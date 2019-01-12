// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');


var obj =new ObjectID();
console.log(obj);
// var user ={
//     name: 'xyz',
//     age: 26
// };

// var {name}=user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){
    return console.log('unable to connect to database');
}
console.log('Connected to Mongo Server');

// db.collection('Todos').insertOne({
//       text: 'Something to do',
//       completed: false
//     }, (err, result) => {
//       if (err) {
//         return console.log('Unable to insert todo', err);
//       }
    
//       console.log(JSON.stringify(result.ops, undefined, 2));
//     });

//Insert new doc into Users (name age location)

// db.collection('Users').insertOne({
//     name: 'Adnan',
//     age: 26,
//     location: 'Margao'
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert Users', err);
//     }
  
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });

db.close();

});