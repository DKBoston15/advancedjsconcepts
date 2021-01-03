const fetch = require("node-fetch");

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

p.then((message) => {
    console.log(message);
})
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log("Yes!");
    });

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
