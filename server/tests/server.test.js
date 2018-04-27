const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  app
} = require('./../server');
const {
  Todo
} = require('./../models/todo')

const expect = chai.expect
chai.use(chaiHttp)

describe('POST /todos', function () {
  beforeEach((done) => {
    Todo.remove({}).then(() => done())
  })
  ///////////////TEST///////////////
  it('Should create a new todo', function (done) {
    let text = 'I love bulka Ben'
    chai.request(app)
      .post('/todos')
      .send({
        text
      })
      .end(function (err, res) {
        if (err) {
          return console.log(err)
        }
        console.log(res.body)
        expect(res).to.have.status(200)
        expect(res.body.text).to.equal(text)
        Todo.find().then((todos) => {
          expect(todos.length).to.equal(1)
          expect(todos[0].text).to.equal(text)
          done()
        }).catch((e) => {
          done(e)
        })
      })
  })
  ///////////////TEST///////////////

  it('should not create todo with invalid body data', function (done) {
    chai.request(app)
      .post('/todos')
      .send({})
      .end(function (err, response) {
        if (err) {
          return done(err)
        }
        expect(response).to.have.status(400)
        Todo.find().then((todos) => {
          expect(todos.length).to.equal(0)
          done()
        }, (e) => {
          done(e)
        })
      })
  })

  ///////////////TEST///////////////
})