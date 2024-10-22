console.log("We are going to learn async Programming");
function delay1(milliseconds){
    console.log("I am inside delay function");
    let startTime = new Date().getTime();
    console.log("Delay function is going to start");
    while(new Date().getTime()<startTime+1){
        
        console.count("I am inside while block");
    }
    console.log("I am outside while block");

}


function delay(milliseconds){
    console.log("I am inside delay function");
    let startTime = new Date().getTime();
    console.log("Delay function is going to start");
    setTimeout(()=>{
        console.log("Operation is done");
    },milliseconds);
    console.log("I am outside while block");

}
delay(100);

console.log("Do Something else");