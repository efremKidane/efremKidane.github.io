 const prompt = require('prompt-sync')();
 
 function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar")  user.loginOk()
    else user.loginFail()
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      console.log(`${this.name} logged in`);
    },
  
    loginFail() {
      console.log(`${this.name} failed to log in`);
    },
  
  };


  askPassword(function() {user.loginOk.call(user), user.loginFail.call(user)});

  askPassword(function(){user.loginOk.apply(user), user.loginFail.apply(user)});

  askPassword( user.loginOk.bind(user), user.loginFail.bind(user));