const stack = [
  {
    label: 'vanessalanquetin.fr-server',
    url: "http://localhost:8080",
    spawnCmd: 'npm',
    spawnArgs: ['run', 'server'],
    spawnOptions: {
      cwd:  __dirname,
      env: Object.assign({
        PORT: '4215',
        EMAIL: '',
        PASSWORD: '',
      }, process.env)
    }
  },
  {
    label: 'vanessalanquetin.fr-front',
    spawnCmd: 'npm',
    url: "http://localhost:4215",
    spawnArgs: ['run', 'client'],
    spawnOptions: {
      cwd: __dirname,
      env: Object.assign({
        VUE_APP_SERVER_URL: 'http://localhost',
        VUE_APP_SERVER_PORT: 4215,
      }, process.env)
    }
  },
]
module.exports = stack
