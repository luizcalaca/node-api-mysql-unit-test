const app = require('./app');
const connection = require('./database/connection');

connection.getConnection().then(() => {
    console.log('Banco conectado');
    app.listen(3010);
}).catch((err) => console.log(err));
