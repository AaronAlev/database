var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwerty",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
      ['Marten', 'Kusagil Tartus'],
      ['Aimar', 'Kusagil Tartus'],
      ['Jyrmo', 'Ikka Tartus'],
      ['Miku', 'Ka Tartus']
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });