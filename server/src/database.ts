import mysql from "mysql2";
import config from './config'

/*Sequelize*/

const Sequelize = require('sequelize');
const VideoModel = require('./routes/models/Video');
const UserModel = require('./routes/models/User');

const sequelize = new Sequelize(config.MYSQL_DATABASE, config.MYSQL_USER, config.MYSQL_PASSWORD, {
    host: config.MYSQL_HOST,
    dialect: 'mysql'
});
const Video = VideoModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
sequelize.sync({ force: false })
    .then(() => {
        console.log("Table online");
    });
module.exports = {
    Video,
    User
};

/*Without orm*/

const con = mysql.createConnection({
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE
});

(async () => {
    try {
        const db = await con.connect((err: any) => {
            if (err) throw err;
            console.log(`Conected to Database`);
        });
    }
    catch (err) {
        console.error(err);
    }
})()