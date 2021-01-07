var mysql = require('mysql');

function Submit(event) {
    username = document.getElementById("usernameInput").value;
    password = document.getElementById("InputPassword").value;
    let con = mysql.createConnection({
        host: "localhost",
        user: username,
        password: password,
      });
      /*you need to add here alert or something to the ui to say that you success or fail in connection */
      con.connect(function(err) {
        if (err) {
          alert("error try again!");
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');
        alert("connected");
      });
}

const form = document.getElementById('form');
form.addEventListener('submit', Submit);

