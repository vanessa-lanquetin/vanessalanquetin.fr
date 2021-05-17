const express = require('express')
const app = express()
const multer = require('multer')
const pathfs = require('path')
const sharp = require('sharp')
const fse = require('fs-extra')
const PromiseB = require('bluebird')
const { AsyncNedb } = require('nedb-async')
  , db = new AsyncNedb({ filename: pathfs.resolve(__dirname, '..', 'files', 'db.json'), autoload: true });

const DIR = pathfs.resolve(__dirname, '..', 'files', 'draws');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: async(req, file, cb) => {
    const doc = await db.asyncInsert({})
    // @ts-ignore
    const _id = doc._id
    await db.asyncUpdate({ _id }, { storage: pathfs.resolve(DIR, _id)}, {upsert: true})
    cb(null, _id)
  }
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

/**
 * All
 */
app.get('/', async (req, res) => {
  const {width, height} = req.query
  const files = await db.asyncFind({})
  res.json(files.map(file => {
    file.url = buildURL(file._id, width, height);
    file.originalUrl = buildURL(file._id);
    delete file.storage
    delete file.filename
    return file
  }))
})

app.get('/infos/:_id', async (req, res) => {
  const infos = await get(req.params._id)
  res.json(infos)
})

app.get('/url/:_id', async (req, res) => {
  const {width, height} = req.query
  let {_id} = await get(req.params._id, width, height)
  if (width) _id = `${width}px-` + _id
  if (height) _id = `${height}px-` + _id
  const file = pathfs.resolve(DIR, 'resize',_id)
  const img = await sharp(pathfs.resolve(DIR, req.params._id))
  if(width || height) {
    await img.resize(
      width ? +width : null,
      height ? +height : null,
    )
  }
  await img.toFile(file)
  res.sendFile(file)
})

/**
 * Upload
 */
app.post('/', upload.array('files', 10), (req, res) => {
  res.json(true)
})

/**
 * Update infos
 */
app.post('/infos/:_id', async (req, res) => {
  const { _id } = req.params
  delete req.body.width
  delete req.body.height
  await db.asyncUpdate({ _id }, req.body, { upsert: true })
  res.json(true)
})
/**
 * delete infos
 */
app.delete('/:_id', async (req, res) => {
  const { _id } = req.params
  const file = pathfs.resolve(DIR, _id)
  const resizeDirPath = pathfs.resolve(DIR, 'resize')
  await fse.remove(file)
  const resizeFileName = await fse.readdir(resizeDirPath)
  await PromiseB.map(resizeFileName, (filename) => {
    if (filename.includes(_id)) return fse.remove(pathfs.resolve(resizeDirPath, filename))
  })
  await db.asyncRemove({_id})
  res.json(true)
})

module.exports = app

function buildURL(filename, width, height) {
  let url = `/draws/url/${filename}?`
  if (width) url += `width=${width}&`
  if (height) url += `height=${height}&`
  return url
}
async function get(_id, width, height) {
  const infos = await db.asyncFindOne({ _id })
  if (!infos) return
  infos.url = buildURL(infos._id, width, height);
  infos.originalUrl = buildURL(infos._id);
  delete infos.storage
  delete infos.filename
  return infos
}