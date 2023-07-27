const stack = [
  {
    label: "vanessalanquetin.fr-server",
    git: {
      home: "https://github.com/vanessouille/vanessalanquetin.fr",
      remote: "https://github.com/vanessouille/vanessalanquetin.fr.git",
    },
    url: "http://localhost:4215",
    spawnCmd: "npm",
    spawnArgs: ["run", "server"],
    spawnOptions: {
      cwd: __dirname,
      env:  {
        PORT: "4215",
        EMAIL: "",
        PASSWORD: "",
        SIB_APIKEY: "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"
      },
    },
  },
  {
    label: "vanessalanquetin.fr-front",
    git: {
      home: "https://github.com/vanessouille/vanessalanquetin.fr",
      remote: "https://github.com/vanessouille/vanessalanquetin.fr.git",
    },
    spawnCmd: "npm",
    url: "http://localhost:54710",
    spawnArgs: ["run", "client"],
    spawnOptions: {
      cwd: __dirname,
      env: {
        VITE_APP_SERVER_URL: "http://localhost",
        VITE_APP_SERVER_PORT: 4215,
      },
    },
  },
];
module.exports = stack
