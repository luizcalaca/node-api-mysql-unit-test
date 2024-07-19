const connection = require('../database/connection');

const listPeopleViagens = async () => {
    const [data] = await connection.execute('SELECT * FROM people people INNER JOIN viagens ON people.id = viagens.id_people');
    return data;
}

module.exports = { listPeopleViagens }