function register() {
    // waitforDelay(10000);
    setTimeout(() => {
        console.log("register here")
    }, 10000);
}

function login() {
    // waitforDelay(5000);
    setTimeout(() => {
        console.log("login here")
    }, 5000);
}
function getData() {
    // waitforDelay(3000);
    setTimeout(() => {
        console.log("getData here")
    }, 3000);
}
function displayData() {
    // waitforDelay(6000);
    setTimeout(() => {
        console.log("displayData here")
    }, 6000);
}
// function waitforDelay(delay) {
//     const mt = Date.now() + delay;
//     while (Date.now() < mt) {
        
//     }
// }
register();
login();
getData();
displayData();