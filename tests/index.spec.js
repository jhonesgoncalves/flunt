import chai, { expect } from 'chai';
import sinon  from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import Flunt from '../src/index';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');
describe('Flunt Library', () => {
  it('should create an instance of Flunt', () => {
    let flunt = new Flunt({});
    expect(flunt).to.be.an.instanceof(Flunt);
  });
  
});
