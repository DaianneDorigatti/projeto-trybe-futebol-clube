import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';
import { request } from 'chai';
import TeamsModel from '../database/models/TeamsModel';
const teamsMock = require('./TeamsModel.mock')
const connection = require ('../database/config/database')

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando TeamsModel', () => {  
    it('Testa se retorna todos os times', async function () {
      // Arrange
      sinon.stub(TeamsModel, 'findAll').resolves([teamsMock]);
      // Act
      const result = await request(app).get('/teams');
      // Assert
      expect(result).to.be.a('object');
      expect(result.body).to.be.deep.eq([teamsMock]);
    });  

    afterEach(()=>{
      sinon.restore();
  })
})
