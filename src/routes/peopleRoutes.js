const express = require('express')
const controller = require('../controllers/peopleController')

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       required:
 *         - first_name
 *         - email
 *       properties:
 *         first_name:
 *           type: string
 *           description: Nome da pessoa
 *         email:
 *           type: string
 *           description: Email da pessoa
 *       example:
 *         first_name: John Doe
 *         email: john@gmail.com
 */

/**
 * @swagger
 * tags:
 *   name: People
 *   description: Gerenciamento de pessoas
 */

/**
 * @swagger
 * /api/people:
 *   post:
 *     summary: Insere uma nova pessoa
 *     tags: [People]
 *     responses:
 *       200:
 *         description: Inserção de pessoas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.post('/', controller.insertPeopleController)

/**
 * @swagger
 * tags:
 *   name: People
 *   description: Gerenciamento de pessoas
 */

/**
 * @swagger
 * /api/people:
 *   get:
 *     summary: Retorna a lista de pessoas
 *     tags: [People]
 *     responses:
 *       200:
 *         description: Lista de pessoas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.get('/', controller.getPeopleController)
router.delete('/:id', controller.deletePeopleController)
router.put('/:id', controller.updatePeopleController)
router.get('/:id/viagens', controller.getPeopleViagensController)

module.exports = router