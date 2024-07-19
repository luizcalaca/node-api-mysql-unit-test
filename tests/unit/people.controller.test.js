const { expect } = require('chai');
const sinon = require('sinon');
const {
    insertPeopleController,
} = require('../../src/controllers/peopleController');
const peopleService = require('../../src/services/peopleService');

describe('People Controller', () => {
    let req, res, next;

    beforeEach(() => {
        req = {};
        res = {
            status: sinon.stub().returnsThis(),
            json: sinon.stub()
        };
        next = sinon.stub();
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('insertPeopleController', () => {
        it('should insert a person and return status 200', async () => {
            req.body = { first_name: 'John', email: 'john@example.com' };
            sinon.stub(peopleService, 'insertPeopleService').resolves("Cadastrado com sucesso");

            await insertPeopleController(req, res, next);

            expect(res.status.calledWith(200)).to.be.true;
        });

    });

    
});
