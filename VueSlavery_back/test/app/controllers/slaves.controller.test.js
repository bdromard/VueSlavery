const chai = require('chai');
const sequelize = require('sequelize');
const sinon = require('sinon');
const request = require('request');
const sinonChai = require('sinon-chai');

const slavesController = require("../../../app/controllers/slaves.controller.js");

const expect = chai.expect;

chai.use(sinonChai)

describe('slavesController', () => {

  const statusJsonSpy = sinon.spy();

  const res = {
    send: sinon.spy(),
    status: sinon.stub().returns({ json: statusJsonSpy }),
  };

  const sandbox = sinon.createSandbox();
  afterEach(function () {
    sinon.restore();
    sandbox.restore();
  });


  describe('create', () => {
    const req = {
      body: {
        id: 1,
        name: "name",
        owner: "owner",
        gender: "gender",
        profession: "profession",
        archiveId: 1
      },
    };

    
    it('should create data in model', async () => {

      sequelize.Model.create = sandbox
        .stub()
        .returns(Promise.resolve('Slave created'));

      await slavesController.create(req, res);

      expect(res.send).to.have.been.calledWith('Slave created')
    })

    it('should call res.status with 500 and send message on error', async () => {
      sequelize.Model.create = sandbox
        .stub()
        .returns(Promise.reject('error'));

      await slavesController.create(req, res);
      await console.error('---')

      expect(res.status).to.have.been.calledWith(500);
      expect(statusJsonSpy).to.have.been.calledWith('error');
    })
});

  describe('findAll', () => {

    const req = sinon.stub(request, 'get')

    it('should return all entries in table', async() => {

      sequelize.Model.findAll = sandbox
        .stub()
        .returns(Promise.resolve('all data'));

      await slavesController.findAll(req, res);

      expect(res.send).to.have.been.calledWith('all data')
    });

    it('should call res.status with 500 and send message on error', async() => {

      sequelize.Model.findAll = sandbox
        .stub()
        .returns(Promise.reject('error'));

      await slavesController.findAll(req, res);
      await console.error('---')

      expect(res.status).to.have.been.calledWith(500);
      expect(statusJsonSpy).to.have.been.calledWith('error')
    });
  });

  describe('findOne', () => {

    const req = {
      params: {
        id: 1,
      },
    };


    it('should return data if found', async () => {

      sequelize.Model.findByPk = sandbox
        .stub()
        .returns(Promise.resolve('found data'));

      await slavesController.findOne(req, res);

      expect(res.send).to.have.been.calledWith('found data')
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
  });
  
  describe('update', () => {

    const req = {
      params: {
        id: 1,
      },
    };

    it('should update entry if found with ID', async() => {

      sequelize.Model.update = sandbox
        .stub()
        .returns(Promise.resolve('updated data'));

      await slavesController.update(req, res);

      expect(res.send).to.have.been.calledWith('updated data')
    })

    it('should call res.status with 500 and send message on error', async () => {

      sequelize.Model.update = sandbox
        .stub()
        .returns(Promise.reject('error'));

      await slavesController.update(req, res);
      await console.error('---')

      expect(res.status).to.have.been.calledWith(500);
      expect(statusJsonSpy).to.have.been.calledWith('error');
    })
  })

});

