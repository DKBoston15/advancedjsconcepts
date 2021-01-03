function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`);
        if (location == "Google") {
            resolve("Google says hi!");
        } else {
            reject("We can only talk to Google.");
        }
    });
}
function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing Request");
        resolve(`Extra Information: ${response}`);
    });
}

// makeRequest("Facebook")
//     .then((res) => {
//         console.log("Response Recieved");
//         return processRequest(res);
//     })
//     .then((processedRequest) => {
//         console.log(processedRequest);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function doWork() {
    try {
        const response = await makeRequest("Google");
        console.log("Response Received");
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    } catch {
        console.log("Error");
    }
}
doWork();
