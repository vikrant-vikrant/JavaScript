//callback hell
h1 = document.querySelector("h1");
function changecolor(color, delay) {
  setTimeout(() => {
    h1.style.color = color;
  }, delay);
}

changecolor("red", 1000, () => {
  changecolor("blue", 1000, () => {
    changecolor("green", 1000);
  });
});

//callback hell
function savetoDB(data, success, failure) {
  let interspeed = Math.floor(Math.random() * 10) + 1;
  if (interspeed > 5) {
    success();
  } else {
    failure();
  }
}

savetoDB(
  "vikrant",
  () => {
    console.log("data saved");
    savetoDB(
      "vishal",
      () => {
        console.log("data 2 saved");
        savetoDB(
          "sachin",
          () => {
            console.log("data3 saved");
          },
          () => {
            console.log("data3 not save");
          }
        );
      },
      () => {
        console.log("data 2 not save");
      }
    );
  },
  () => {
    console.log("week connection");
  }
);

//promise
function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed successfully");
      reject("color not changed successfully");
    }, delay);
  });
}
colorChange("green", 1000)
  .then(() => {
    console.log("color changed to green");
    return colorChange("red", 1000);
  })
  .then(() => {
    console.log("color changed to red");
    return colorChange("blue", 1000);
  })
  .then(() => {
    console.log("color changed to blue");
  })
  .catch(() => {
    console.log("color not to be changed");
  });

//promises
function fetchData(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username) {
        resolve(`User ${username} fetched!`);
      } else {
        reject("No username provided!");
      }
    }, 1000);
  });
}

fetchData("vikrant")
  .then((resolve) => {
    console.log(resolve); // "User vikrant fetched!"
    return fetchData("vishal");
  })
  .then((resolve) => {
    console.log(resolve); // "User vishal fetched!"
  })
  .catch((reject) => {
    console.log(reject); // Handles any error
  });
