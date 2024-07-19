const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../src/database/connection');
const { insertPeople, listPeople, deletePeople, updatePeople } = require('../../src/models/peopleModel');

describe('People Model', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('insertPeople', () => {
        it('should insert a person and return affected rows', async () => {
            //Arrange
            const mockPerson = { first_name: 'John', email: 'john@example.com' };
            const mockResult = [{ affectedRows: 1 }];
            sinon.stub(connection, 'execute').resolves(mockResult);
            
            //Act
            const result = await insertPeople(mockPerson);
            
            //Assert
            expect(result).to.equal(1);
        });
    });

    describe('listPeople', () => {
        it('should list all people', async () => {
            const mockData = [
                { id: 1, first_name: 'John', email: 'john@example.com' },
                { id: 2, first_name: 'Jane', email: 'jane@example.com' },
            ];

            sinon.stub(connection, 'execute').resolves([mockData]);

            const result = await listPeople();
            expect(result).to.deep.equal(mockData);
        });
    });

    describe('deletePeople', () => {
        it('should delete a person and return affected rows', async () => {
            const mockResult = [{ affectedRows: 1 }];

            sinon.stub(connection, 'execute').resolves(mockResult);

            const result = await deletePeople(1);
            expect(result).to.equal(1);
        });
    });

    describe('updatePeople', () => {
        it('should update a person and return affected rows', async () => {
            const mockPerson = { first_name: 'John', email: 'john_new@example.com' };
            const mockResult = [{ affectedRows: 1 }];

            sinon.stub(connection, 'execute').resolves(mockResult);

            const result = await updatePeople(mockPerson, 1);
            expect(result).to.equal(1);
        });
    });
});
