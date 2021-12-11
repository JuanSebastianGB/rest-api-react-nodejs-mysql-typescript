module.exports = (sequelize: { define: (arg0: string, arg1: { id: { type: any; primaryKey: boolean; autoIncrement: boolean; }; title: any; description: any; score: any; director: any; }) => any; }, Sequelize: { INTEGER: any; STRING: any; }) => {

    const Film = sequelize.define('film', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        score: Sequelize.INTEGER,
        director: Sequelize.STRING
    });
    return Film;
}
module.exports = (sequelize: { define: (arg0: string, arg1: { id: { type: any; primaryKey: boolean; autoIncrement: boolean; }; title: { type: any; require: boolean; }; description: { type: any; }; url: { type: any; require: boolean; }; }) => any; }, Sequelize: { INTEGER: any; STRING: any; }) => {

    const Video = sequelize.define('video', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            require: true,
        },
        description: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING,
            require: true
        }
    });
    return Video;
}
