// DOM
let display = document.getElementById("display")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let status = "stop";
let interval;

// 関数（メソッド）
function stopWatch(){
    milliseconds++;
    if(milliseconds / 10 == 1){
        seconds++;
        milliseconds = 0;
        if(seconds / 60 == 1){
            minutes++;
            seconds = 0;
            if(minutes / 60 == 1){
                hours++;
                minutes = 0;
            }
        }
    }
    
    display.innerHTML = hours + ":" +minutes + ":" + seconds + ":" + milliseconds;
}

//イベント
start.addEventListener("click", function(){
    if(status == "stop"){
        interval = setInterval(stopWatch, 100)
        status = "start"
    }
})

stop.addEventListener("click", function(){
    clearInterval(interval)
    status = "stop"
})    

reset.addEventListener("click", function(){
    clearInterval(interval)   
    status = "stop"
    display.innerHTML = "0:0:0:0"
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
})