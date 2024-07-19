const { insertPeople, listPeople, deletePeople, updatePeople } = require("../models/peopleModel")
const isValidEmail = require("../utils/regexEmail")

const insertPeopleService = async (person) => {
    if(!person.first_name) throw new Error('First name não pode ser vazio')
    if(!isValidEmail(person.email)) throw new Error('Email está inválido')
    const result = await insertPeople(person)
    if(result != 0) return "Cadastrado com sucesso"
    return "Não foi possível cadastrá-lo"
}

const getPeopleService = async () => {
    const result = await listPeople()
    if(!result) throw new Error('Não há dados a serem listados')    
    return result
}

const deletePeopleService = async (id) => {
    if(!id) throw new Error('Id não pode ser vazio')
    const result = await deletePeople(id)
    if(result === 0) throw new Error('Id não encontrado')
    return "Deletado com sucesso"
}

const updatePeopleService = async (person, id) => {
    if(!id) throw new Error('Id não pode ser vazio')
    if(!person.first_name) throw new Error('First name não pode ser vazio')
    if(!isValidEmail(person.email)) throw new Error('Email está inválido')
    const result = await updatePeople(person, id)
    if(result === 0) throw new Error('Não foi possível atualizá-lo')
    return "Atualizado com sucesso!"
}

module.exports = { insertPeopleService, getPeopleService, deletePeopleService, updatePeopleService }