import mysql from "mysql2";
import config from './config'
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