var figlet = require("figlet");
var giveMeAJoke = require('give-me-a-joke');

figlet("vikrant", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});


// To get a random dad joke
giveMeAJoke.getRandomDadJoke (function(joke) {
    console.log(joke);
});
