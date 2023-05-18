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
import MatchesService from '../database/services/MatchesService';
import Users from '../database/models/UsersModel';
import { userMock, token } from './Users.mock';
import UsersService from '../database/services/UsersService';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testando TeamsModel', () => {  
    it('Testa se retorna todos os times - Camada Model', async function () {
      // Arrange
      sinon.stub(TeamsModel, 'findAll').resolves(teamsMock as TeamsModel[]);
      // Act
      const result = await request(app).get('/teams');
      // Assert
      expect(result).to.be.a('object');
      expect(result.body).to.be.deep.eq(teamsMock);
      
    });  

    afterEach(()=>{
      sinon.restore();
    })

    it('Testa se retorna o time por id - Camada Model', async function () {
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

      it('Testa se retorna todos os times - Camada Service', async function () {
    // Arrange
      sinon.stub(TeamsModel, 'findAll').resolves([]);
    // Act
      expect(await TeamsService.findAll()).to.be.deep.equal([]);
    
    });  

      afterEach(()=>{
      sinon.restore();
    })

    it('Testa se retorna o time por id - Camada Service', async function () {
      // Arrange
      sinon.stub(TeamsModel, 'findByPk').resolves(teamMock as TeamsModel);
      // Act
      const result = await TeamsService.findById(16);
      // Assert
      expect(result).to.be.a('object');
      expect(result).to.be.deep.eq(teamMock);
      
    });  

    afterEach(()=>{
      sinon.restore();
    })
})

  describe('Testando MatchesModel', () => {  
    it('Testa se retorna todas as partidas - Camada Model', async function () {
      // Arrange
      sinon.stub(MatchesModel, 'findAll').resolves(matchesMock as unknown as MatchesModel[]);
      // Act
      const result = await request(app).get('/matches');
      // Assert
      expect(result).to.be.a('object');
      expect(result.body).to.be.deep.eq(matchesMock);
      
    });  

    afterEach(()=>{
      sinon.restore();
    })
 })

 describe('Testando MatchesModel', () => {  
  it('Testa se retorna todas as partidas - Camada Service', async function () {
     // Arrange
    sinon.stub(MatchesModel, 'findAll').resolves([]);    
    // Assert
    expect(await MatchesService.findFinishedMatches('inProgress')).to.be.deep.equal([]);
    
  });  

  afterEach(()=>{
    sinon.restore();
  })
})

describe('Testando UsersModel', () => {  
  it('Testa se retorna um token com login válido - Camada Service', async function () {
     // Arrange
    //@ts-ignore 
    sinon.stub(UsersService, 'authenticateUser').resolves('token');
    // Act
    const result = await chai.request(app).post('/login').send(userMock);
    // Assert
    expect(result.status).to.be.deep.equal(200);  
    expect(result).to.be.a('object');
    
  });  

  afterEach(()=>{
    sinon.restore();
  })
})

 




