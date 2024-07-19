const { listPeopleViagens } = require("../models/peopleViagensModel")

const getPeopleViagensService = async () => {
    const result = await listPeopleViagens()
    if(!result) throw new Error('Não há dados a serem listados')    
    return result
}

module.exports = { getPeopleViagensService }