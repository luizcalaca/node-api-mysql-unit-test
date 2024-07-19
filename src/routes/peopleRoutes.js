const express = require('express')
const router = express.Router()
const controller = require('../controllers/peopleController')

router.post('/', controller.insertPeopleController)
router.get('/', controller.getPeopleController)
router.delete('/:id', controller.deletePeopleController)
router.put('/:id', controller.updatePeopleController)
router.get('/:id/viagens', controller.getPeopleViagensController)

module.exports = router