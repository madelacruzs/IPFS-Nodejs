module.exports = {
    MONGODB: "mongodb://jwt:privasee2018*@ds037488.mlab.com:37488/jwt-privasee",
    jwt: {
        secret_key: "12345qwerty"
    },
    PORT: 10001,
    MSSQL: {
        user: 'XXX',
        password: 'XXX',
        server: '.XXX', 
        database: 'XXX',
        options: {
            encrypt: true // Use this if you're on Windows Azure
        }
    }
}