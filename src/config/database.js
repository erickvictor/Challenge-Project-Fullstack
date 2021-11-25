module.exports = {
  development: {
    username: "root",
    password: "example",
    database: "trafico",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "example",
    database: "trafico_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "example",
    database: "trafico_prod",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
