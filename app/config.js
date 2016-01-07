
// var Bookshelf = require('bookshelf');
// var path = require('path');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

module.exports = db;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('Mongodb connection is open!');
})



// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

/*
    link.string('url', 255);
      link.string('base_url', 255);
      link.string('code', 100);
      link.string('title', 255);
      link.integer('visits');

      user.string('username', 100).unique();
      user.string('password', 100);
*/


