import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import {Notification, Notifiable, Contract} from '../src/index';
// const Flunt = require('../src/index')
// const Notification = Flunt.Notification;
// const Contract = Flunt.Contract;
// const Notifiable = Flunt.Notifiable;

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
describe('Flunt Library', () => {
  it('should create an instance of Notification', () => {
    let notification = new Notification({});
    expect(notification).to.be.an.instanceof(Notification);
  });

  it('should create an instance of Notifiable', () => {
    let notifiable = new Notifiable({});
    expect(notifiable).to.be.an.instanceof(Notifiable);
  });

  it('should create an instance of Contract', () => {
    let contract = new Contract({});
    expect(contract).to.be.an.instanceof(Contract);
  });
  
});
