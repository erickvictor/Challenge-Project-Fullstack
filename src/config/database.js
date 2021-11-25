module.exports = {
  development: {
    username: "root",
    password: "123456",
    database: "Trafico",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "example",
    database: "Trafico_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "example",
    database: "Trafico_prod",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
