import mysql from 'mysql'

const connectionData =
    {
        host: "localhost",
        user: "root",
        password: "80507132611S",
        database: 'Gallery'
    };

const DataBase = mysql.createConnection( connectionData );

module.exports.DataBase = DataBase;
