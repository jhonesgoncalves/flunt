import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import Notifiable from '../src/notifiable';
import Contract from '../src/contract';
import Notification from '../src/notification';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
describe('Notifiable', () => {

  it('should create an instance of Notifiable', () => {
    let notifiable = new Notifiable({});
    expect(notifiable).to.be.an.instanceof(Notifiable);
  });

  it('should return one notification', () => {
    let notifiable = new Notifiable();
    notifiable.AddNotification("Notification", "test notification");
    expect(notifiable.notifications.length).to.be.equal(1)
  });

  it('should return two notification', () => {
    let notifiable = new Notifiable();
    notifiable.AddNotifications(new Contract()
      .isRequired("", "Required", "value required")
      .isEmail("asdsa", "Email", "Email invalid")
    );
    expect(notifiable.notifications.length).to.be.equal(2)
  });

  it('should return two notification for pass list notifications', () => {
    let notifiable = new Notifiable();

    let listNotification = [];
    listNotification.push(new Notification("test", "test notification"))
    listNotification.push(new Notification("test", "test notification"))

    notifiable.AddNotifications(listNotification);
    expect(notifiable.notifications.length).to.be.equal(2)
  });

  it('should return false for isValid', () => {
    let notifiable = new Notifiable();
    notifiable.AddNotification("Notification", "test notification");
    expect(notifiable.isValid()).to.be.equal(false)
  });

  it('should return true for isValid', () => {
    let notifiable = new Notifiable();
    expect(notifiable.isValid()).to.be.equal(true)
  });

  describe('- getMessages', () => {
    it('should return one message', () => {
        let contract = new Contract();
        contract.isEmail("value", "Email", "notification test");
        let notifiable = new Notifiable();
        notifiable.AddNotifications(contract);
        expect(notifiable.getMessages()[0]).to.be.equal("notification test")
    });

    it('should return not return message', () => {
        let notifiable = new Contract();
        expect(notifiable.getMessages().length).to.be.equal(0);
    });
});

});
