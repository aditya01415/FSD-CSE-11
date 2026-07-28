function register(cb) {
    // waitforDelay(10000);
    setTimeout(() => {
        console.log("register here")
        cb();
    }, 10000);
}

function login(cb) {
    // waitforDelay(5000);
    setTimeout(() => {
        console.log("login here")
        cb();
    }, 5000);
}
function getData(cb) {
    // waitforDelay(3000);
    setTimeout(() => {
        console.log("getData here")
        cb();
    }, 3000);
}
function displayData(cb) {
    // waitforDelay(6000);
    setTimeout(() => {
        console.log("displayData here")
        cb();
    }, 6000);
}
// function waitforDelay(delay) {
//     const mt = Date.now() + delay;
//     while (Date.now() < mt) {
        
//     }
// }
register(
    ()=>{
        login(
            ()=>{
                getData(
                    ()=>{
                        displayData(
                            ()=>{
                                console.log("All done")
                            }
                        )
                    }
                )
            }
        )
    }
)
// register();
// login();
// getData();
// displayData();