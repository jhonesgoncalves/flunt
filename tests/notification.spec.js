import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import Notification from '../src/notification';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
describe('Notification', () => {
  it('should create an instance of Notification', () => {
    let notification = new Notification({});
    expect(notification).to.be.an.instanceof(Notification);
  });
  
});
