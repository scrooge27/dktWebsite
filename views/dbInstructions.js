/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");*/

  con.query("CREATE DATABASE mydb", function (err, result) {	//create db
    if (err) throw err;
    console.log("Database created");
  });

  var sql = "CREATE TABLE customers (name VARCHAR(255), surname VARCHAR(255), address VARCHAR(255), city VARCHAR(255), email VARCHAR(255), email VARCHAR(255), requests VARCHAR(255), newsletter VARCHAR(255))";		
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });	//create table

//});