module.exports = (sequelize: { define: (arg0: string, arg1: { id: { type: any; primaryKey: boolean; autoIncrement: boolean; }; username: any; email: any; password: any; }) => any; }, type: { INTEGER: any; STRING: (arg0: number) => any; }) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: type.STRING,
        email: type.STRING,
        password: type.STRING(150)
    });
}