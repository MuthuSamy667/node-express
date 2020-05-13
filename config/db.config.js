module.exports = {
  dev: {
    dialect: 'mysql',
    database: 'remo_db',
    host: 'localhost',
    username: 'root',
    password: '',
    port: 3306,
    define: {
      underscored: false,
      underscoredAll: false,
      charset: 'utf8mb4',
      dialectOptions: {
        collate: 'utf8mb4_0900_ai_ci',
      },
      timestamps: false,
    },
  },
};
