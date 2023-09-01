process.env.NODE_ENV = 'test';

const chai = require('chai');
const sequelize = require('sequelize');
const sinon = require('sinon');
const request = require('request');
const sinonChai = require('sinon-chai');

const server = require("../../../server.js")
const slavesModel = require("../../../app/models/slaves.js")
const slavesRoute = require("../../../app/routes/slaves.routes.js");

const expect = chai.expect;

chai.use(sinonChai)

describe('Slaves', () => {
  beforeEach((done) => {
    slavesModel({sequelize}, (err) => {
      done();
    });
  });

  describe('/GET slave', () => {
    it('should GET all the slaves in the database', (done) => {
      chai.request(server)
        .get('/api/slaves/findAll')
        .end((err, res) => {
          res.expect.to.have.status(200);
          res.body.expect.to.be.a('array');
          res.body.length.expect.to.be.eql(0);
      done();
        })   
    })
  })
});
