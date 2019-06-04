import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import Notifiable from '../src/notifiable';
import Contract from '../src/contract';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
describe('Contract', () => {

    describe('- isRequired', () => {
        it('should return one notification', () => {
            let contract = new Contract();
            contract.isRequired("", "Required", "notification test");
            expect(contract.notifications.length).to.be.equal(1)
        });

        it('should not return notification', () => {
            let contract = new Contract();
            contract.isRequired("value", "Required", "notification test");
            expect(contract.notifications.length).to.be.equal(0)
        });

      
    });

    describe('- isMinLen', () => {
        it('should return one notification', () => {
            let contract = new Contract();
            contract.hasMinLen("va", 3,  "hasMinLen", "notification test");
            expect(contract.notifications.length).to.be.equal(1)
        });
        
        it('should not return notification', () => {
            let contract = new Contract();
            contract.hasMinLen("value",3, "hasMinLen", "notification test");
            expect(contract.notifications.length).to.be.equal(0)
        });      
    });

    describe('- isMaxLen', () => {
        it('should return one notification', () => {
            let contract = new Contract();
            contract.hasMaxLen("value", 3,  "hasMaxLen", "notification test");
            expect(contract.notifications.length).to.be.equal(1)
        });
        
        it('should not return notification', () => {
            let contract = new Contract();
            contract.hasMaxLen("va",3, "hasMaxLen", "notification test");
            expect(contract.notifications.length).to.be.equal(0)
        });      
    });

    describe('- isFixedLen', () => {
        it('should return one notification', () => {
            let contract = new Contract();
            contract.isFixedLen("value", 3,  "isFixedLen", "notification test");
            expect(contract.notifications.length).to.be.equal(1)
        });
        
        it('should not return notification', () => {
            let contract = new Contract();
            contract.isFixedLen("val",3, "isFixedLen", "notification test");
            expect(contract.notifications.length).to.be.equal(0)
        });      
    });

    describe('- isEmail', () => {
        it('should return one notification', () => {
            let contract = new Contract();
            contract.isEmail("value", "Email", "notification test");
            expect(contract.notifications.length).to.be.equal(1)
        });
        
        it('should not return notification', () => {
            let contract = new Contract();
            contract.isEmail("test@test.com", "Email", "notification test");
            expect(contract.notifications.length).to.be.equal(0)
        });      
    });




});


