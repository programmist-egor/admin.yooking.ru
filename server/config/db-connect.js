import {Sequelize} from "sequelize";
import {configAdminDB, configExtranetDB} from "./db-config.js";

// // Создаем подключение к базе данных
const sequelizeAdmin = new Sequelize(configAdminDB.DB, configAdminDB.USER, configAdminDB.PASSWORD, {
    host: configAdminDB.HOST,
    dialect: "mysql",
    port: 3306,
    pool: {
        max: configAdminDB.pool.max,
        min: configAdminDB.pool.min,
        acquire: configAdminDB.pool.acquire,
        idle: configAdminDB.pool.idle
    },
    define: {
        timestamps: false
    }
});

const sequelizeExtranet = new Sequelize(configExtranetDB.DB, configExtranetDB.USER, configExtranetDB.PASSWORD, {
    host: configExtranetDB.HOST,
    dialect: "mysql",
    port: 3306,
    pool: {
        max: configExtranetDB.pool.max,
        min: configExtranetDB.pool.min,
        acquire: configExtranetDB.pool.acquire,
        idle: configExtranetDB.pool.idle
    },
    define: {
        timestamps: false
    }
});


export {sequelizeAdmin, sequelizeExtranet}