const knex = require("knex")({
  client: "pg",
  connection: {
    host: "ep-floral-lake-87871997.us-east-2.aws.neon.tech",
    user: "lpch20",
    port: 5432,
    password: "VOG62LsaKuIC",
    database: "neondb",
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
    },
  },
});

module.exports = knex;
