console.log("timer Loaded");

function Timer(){
    let status, duration, interval;
    const ticker = () =>{
        ++duration
    }
    this.startTimer = () =>{
        if(status != 'Started'){
            duration ??= 1;
            interval = setInterval(ticker, 1000);
            status= 'Started'
            console.log("timer Started");
        }else{
            console.log("timer is already Started, you can't do it again");
        }
    }
    this.stopTimer = () =>{
        if(status == 'Started'){
            clearInterval(interval)
            status= 'Stopped'
            console.log("Total Duration:", duration);
        }else{
            console.log("timer is not started yet");
        }
    }
    Object.defineProperty(this, 'duration',{
        get: () => duration
    })
    this.reset = () =>{
        console.log("Total Duration:", duration);
        duration = 0;
        clearInterval(interval)
        console.log("Stop watch rested");
    }
}

const SW =  new Timer()