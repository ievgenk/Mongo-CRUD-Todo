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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to create a collection')
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: "Evgeny",
  //   age: 26,
  //   location: "Vancouver, Canada"
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to create a collection')
  //   }
  //   console.log(result.ops[0]._id.getTimestamp())
  // })


  client.close()
});