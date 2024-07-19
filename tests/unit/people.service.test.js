const { expect } = require('chai');
const sinon = require('sinon');
const peopleModel = require('../../src/models/peopleModel');
const isValidEmail = require('../../src/utils/regexEmail');
const { insertPeopleService } = require('../../src/services/peopleService');

describe('People Service', () => {
    afterEach(() => {
        sinon.restore();
    });

    //Triple A
    describe('insertPeopleService', () => {
        it('should throw an error if first_name is empty', async () => {
            //arrange
            const person = { first_name: '', email: 'test@example.com' };
 
            try {
                //act
                await insertPeopleService(person);
            } catch (error) {
                //assert
                expect(error.message).to.equal('First name não pode ser vazio');
            }
        });
    });
});
