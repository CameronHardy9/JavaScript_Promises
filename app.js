console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let watching = new Promise((resolve, reject) => {
    let userWatchingLiveStream = true;
    let userLeft = false;

    if(userLeft) {
        reject({
            name: "User Left",
            message: ":("
        });
    } else if(userWatchingLiveStream) {
        resolve("Thumbs up and Subscribe");
    }
}) 

watching
    .then(message => console.log(message))
    .catch(error => console.log(`${error.name} ${error.message}`));
