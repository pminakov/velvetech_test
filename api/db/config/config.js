module.exports = {
  "development": {
    "username": process.env.DB_USER || "catalog_user",
    "password": process.env.DB_PASS || "catalog_password",
    "database": process.env.DB_NAME || "catalog_dev",
    "host": process.env.DB_HOST || "192.168.1.12",
    "dialect": process.env.DB_TYPE || "postgres"
  },
  "test": {
	  "username": process.env.DB_USER || "catalog_user",
	  "password": process.env.DB_PASS || "catalog_password",
	  "database": process.env.DB_NAME || "catalog_dev",
	  "host": process.env.DB_HOST || "192.168.1.12",
	  "dialect": process.env.DB_TYPE || "postgres"
  },
  "production": {
	  "username": process.env.DB_USER || "catalog_user",
	  "password": process.env.DB_PASS || "catalog_password",
	  "database": process.env.DB_NAME || "catalog_dev",
	  "host": process.env.DB_HOST || "192.168.1.12",
	  "dialect": process.env.DB_TYPE || "postgres"
  }
};
