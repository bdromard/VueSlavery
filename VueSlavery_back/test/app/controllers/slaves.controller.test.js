const chai = require('chai')
const sequelize = require('sequelize')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

const slavesController = require("../app/controllers/slaves.controller.js")

const expect = chai.expect;

chai.use(sinonChai)

describe('slavesController', () => {
  describe('findOne', () => {
    const sandbox = sinon.createSandbox();
    afterEach(function () {
      sinon.restore();
      sandbox.restore();
    }); 

    const req = {
      params: {
        id: 1,
      },
    };

    const statusJsonSpy = sinon.spy();

  
    const res = {
      send: sinon.spy(),
      status: sinon.stub().returns({ json: statusJsonSpy }),
    };

    it('should return data if found', async () => {

      sequelize.Model.findByPk = sandbox
        .stub()
        .returns(Promise.resolve('banana'));

      await slavesController.findOne(req, res);

      expect(res.send).to.have.been.calledWith('banana')
    })
    it('should call res.status with 404 and send message on error', async () => {
      sequelize.Model.findByPk = sandbox
        .stub()
        .returns(Promise.reject('error'));

      await slavesController.findOne(req, res);
      await console.error('---')

      expect(res.status).to.have.been.calledWith(404);
      expect(statusJsonSpy).to.have.been.calledWith('error');
    })
  })
})

