import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import Flunt from '../src/index';
import Notifiable from '../src/notifiable';
import Contract from '../src/contract';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
describe('Flunt Library', () => {
  it('should return one notification', () => {
    let notifiable = new Notifiable();
    notifiable.AddNotification("teste", "mensagem teste");
    var n = notifiable.notifications
    expect(n.length).to.be.equal(1)
  });

  it('should return two notification', () => {
    let notifiable = new Notifiable();
    notifiable.AddNotifications(new Contract()
      .isRequired("", "valor", "precisa do valor")
      .isEmail("asdsa", "Email", "Email invalido")
    );
    console.log(notifiable.notifications)
    var n = notifiable.notifications
    expect(n.length).to.be.equal(2)
  });
  
});
