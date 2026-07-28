function register() {
    return new Promise((resolve, reject) => {
    // waitforDelay(10000);
    setTimeout(() => {
        console.log("register here")
        resolve();
    }, 10000);
})
}

function login() {
    return new Promise((resolve, reject) => {
    // waitforDelay(5000);
    setTimeout(() => {
        console.log("login here")
        resolve();
    }, 5000);
})
}
function getData() {
    return new Promise((resolve, reject) => {   
    // waitforDelay(3000);
    setTimeout(() => {
        console.log("getData here")
        resolve();
    }, 3000);
})
}
function displayData() {
    return new Promise((resolve, reject) => {
        // waitforDelay(6000);
        setTimeout(() => {
            console.log("displayData here")
            resolve();
        }, 6000);
    });
}

// register()
//     .then(() => {
//         return login();
//     })
//     .then(() => {
//         return getData();
//     })
//     .then(() => {
//         return displayData();
//     })
    
//     .catch((error) => {
//         console.error("Error:", error);
//     })
//     console.log("All done")

async function test() {
    try {
        await register();
        await login();
        await getData();
        await displayData();
        console.log("All done");
    } catch (error) {
        console.error("Error:", error);
    }
}
test();