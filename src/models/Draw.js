import API from "../service/API"
import dayjs from 'dayjs'

class Draw {
  constructor(draw) {
    Object.assign(this, draw)
    /** @type {string} */
    this._id = draw._id
    /** @type {string} */
    this.name = draw.name
    /** @type {string} */
    this.date = draw.date
    /** @type {string} */
    this.category = draw.category
    /** @type {string} */
    this.url = process.env.VUE_APP_SERVER_URL + ':' + process.env.VUE_APP_SERVER_PORT + draw.url
  }

  /**
   * 
   * @param {string} _id 
   * @param {number} width 
   * @param {number} height 
   * @returns 
   */
  static async getById(_id, width, height) {
    const { data: draw } = await API.get(`/draws/find`, { params: { _id, width, height } })
    return draw ? new Draw(draw) : null
  }

  /**
 * 
 * @param {number} width 
 * @param {number} height
 * @param {{name?: string}} filter
 * @returns 
 */
  static async all(width, height, filter = {}) {
    let { data: draws } = await API.get(`/draws`, { params: { width, height, filter } })
    if (!draws) draws = []
    return draws.map(draw => new Draw(draw))
  }
  static async groupBy(filter, width, height) {
    const draws = await Draw.all(width, height)
    const drawsBy = {}
    draws.forEach(draw => {
      const format = filter(draw)
      if (!drawsBy[format]) drawsBy[format] = []
      drawsBy[format].push(draw)
    });
    return Object.keys(drawsBy).map(label => ({label, imgs: drawsBy[label]})).sort((a,b) => a.label.localeCompare(b.label))
  }
  static async allByYear(width, height) {
    return Draw.groupBy((draw) => dayjs(draw.date || 'invalid').format('YYYY'), width, height)
  }
  static async allByMonth(width, height) {
    return Draw.groupBy((draw) => dayjs(draw.date || 'invalid').format('YYYY/MM'), width, height)
  }
  static async allByDay(width, height) {
    return Draw.groupBy((draw) => dayjs(draw.date || 'invalid').format('YYYY/MM/DD'), width, height)
  }
  static async allByCategory(width, height) {
    return Draw.groupBy((draw) => draw.category, width, height)
  }
  async save() {
    const { data: draw } = await API.post(`/draws/infos/${this._id}`, this)
    return draw
  }
  async delete() {
    const { data: draw } = await API.delete(`/draws/${this._id}`)
    return draw
  }

}


export default Draw