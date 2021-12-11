require('dotenv').config();
console.log("The process is:", process.env.MYSQL_HOST);
export default {
    MYSQL_HOST: process.env.MYSQL_HOST || 'TEST',
    MYSQL_USER: process.env.MYSQL_USER || 'TEST',
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'TEST',
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'TEST',
    PORT: process.env.PORT || 3000
}