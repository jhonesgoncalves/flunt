import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
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

    describe('- isGreaterThan', () => {
      it('should return one notification', () => {
          let contract = new Contract();
          contract.isGreaterThan(4, 10,  "isGreaterThan", "notification test");
          expect(contract.notifications.length).to.be.equal(1)
      });

      it('should not return notification', () => {
          let contract = new Contract();
          contract.isGreaterThan(11, 10,  "isGreaterThan", "notification test");
          expect(contract.notifications.length).to.be.equal(0)
      });
  });

    describe('- isValid', () => {
        it('should return false', () => {
            let contract = new Contract();
            contract.isEmail("value", "Email", "notification test");
            expect(contract.isValid()).to.be.equal(false)
        });

        it('should return true', () => {
            let contract = new Contract();
            expect(contract.isValid()).to.be.equal(true)
        });
    });

    describe('- getMessages', () => {
        it('should return one message', () => {
            let contract = new Contract();
            contract.isEmail("value", "Email", "notification test");
            expect(contract.getMessages()[0]).to.be.equal("notification test")
        });

        it('should return not return message', () => {
            let contract = new Contract();
            expect(contract.getMessages().length).to.be.equal(0)
        });
    });

    describe('- getNotifications', () => {
        it('should return one notification', () => {
            let contract = new Contract();
            contract.isEmail("value", "Email", "notification test");
            expect(contract.getNotifications().length).to.be.equal(1)
        });

        it('should return not return notification', () => {
            let contract = new Contract();
            expect(contract.getNotifications().length).to.be.equal(0)
        });
    });




});


