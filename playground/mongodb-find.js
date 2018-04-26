// const MongoClient = require('mongodb').MongoClient
const {
  MongoClient,
  ObjectID
} = require('mongodb')



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')


  // db.collection("Todos").find({
  //   _id: new ObjectID("5ae1ff4dd502673b74dcabfb")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (error) => {
  //   console.log('Unable t ofetch todos', error)
  // })

  db.collection("Todos").find().count().then((count) => {
    console.log(`Todos count:${count}`);
    console.log(JSON.stringify(docs, undefined, 2))
  }, (error) => {
    console.log('Unable t ofetch todos', error)
  })

  db.collection('Users').find({
    name: "Evgeny"
  }).toArray().then((response) => {
    console.log(response)
  }, (error) => {
    console.log(error)
  })


  //client.close()
})