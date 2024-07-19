const connection = require('../database/connection');

const insertPeople = async (person) => {
    const [data] = await connection.execute(
        `INSERT INTO people
        (first_name, email) VALUES (?,?)`,
        [person.first_name, person.email],
    );
    return data.affectedRows
}

const listPeople = async () => {
    const [data] = await connection.execute('SELECT * FROM people');
    return data;
}

const deletePeople = async (id) => {
    const result = await connection.execute('DELETE FROM people WHERE id = ?', [id]);
    return result[0].affectedRows
} 

const updatePeople = async (person, id) => {
    const result = await connection.execute(`UPDATE people SET first_name = ?, 
        email =? WHERE id= ?`,
        [person.first_name, person.email, id]);
    return result[0].affectedRows
} 

module.exports = { insertPeople, listPeople, deletePeople, updatePeople };