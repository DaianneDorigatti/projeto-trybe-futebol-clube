import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';
import { request } from 'chai';
import TeamsModel from '../database/models/TeamsModel';
import { teamMock, teamsMock } from './TeamsModel.mock';
import { matchesMock } from './MatchesModel.mock'
import MatchesModel from '../database/models/MatchesModel'
import TeamsService from '../database/services/TeamsService';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testando TeamsModel', () => {  
    it('Testa se retorna todos os times', async function () {
      // Arrange
      sinon.stub(TeamsModel, 'findAll').resolves(teamsMock as TeamsModel[]);
      // Act
      const result = await request(app).get('/teams');
      // Assert
      expect(result).to.be.a('object');
      expect(result.body).to.be.deep.eq(teamsMock);
      
    });  

    it('Testa se retorna o time por id', async function () {
      // Arrange
      sinon.stub(TeamsModel, 'findOne').resolves(teamMock as TeamsModel);
      // Act
      const result = await request(app).get('/teams/1');
      // Assert
      expect(result).to.be.a('object');
      
    });  

    afterEach(()=>{
      sinon.restore();
  })

it('Testa se retorna o time por id - Service', async function () {
  // Arrange
  sinon.stub(TeamsModel, 'findAll').resolves([]);
  // Act
  expect(await TeamsService.findAll()).to.be.deep.equal([]);
  
});  

afterEach(()=>{
  sinon.restore();
})
})

