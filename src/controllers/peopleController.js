const { insertPeopleService, getPeopleService, deletePeopleService, updatePeopleService } = require("../services/peopleService")
const { getPeopleViagensService } = require("../services/peopleViagensService")

const insertPeopleController = async (req, res) => {
    try {
        const { first_name, email } = req.body
        const result = await insertPeopleService({ first_name, email }) 
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getPeopleController = async (req, res) => {
    try {
        const result = await getPeopleService()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deletePeopleController = async (req, res) => {
    try {
        const { id } = req.params
        const result = await deletePeopleService(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updatePeopleController = async (req, res) => {
    try {
        const { id } = req.params
        const { first_name, email } = req.body
        const result = await updatePeopleService({ first_name, email }, id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getPeopleViagensController = async (req, res) => {
    try {
        const result = await getPeopleViagensService()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { insertPeopleController, getPeopleController, deletePeopleController, updatePeopleController, getPeopleViagensController }