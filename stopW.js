/* IIFE CALL */

(function (){
    /*--------------------------------------Getting html Elements------------------------------------------------*/

    const start_stop=document.getElementById("start-stop");
    const reset=document.getElementById("reset");
    const timer=document.getElementById("timer");

    /* --------------------------------------Declarations------------------------------------------------*/

    let start_stop_flag=true;
    let img_flag=true;
    let milisec=0,sec=0,mins=0,hours=0;
    let interval;

    /* --------------------------------------Function Declarations------------------------------------------------*/

    function start_stop_timer(){
        if(start_stop_flag===true){
            start_stop.innerHTML="Pause";
            interval=setInterval(function(){
                //function call
                start_stop_flag=false;
                timerDisplay();
            },10)
        }
        else if(start_stop_flag===false){
            start_stop.innerHTML="Start";
            clearInterval(interval);
            start_stop_flag=true;
        }
    }

    function timerDisplay(){
        milisec+=10;
        if (milisec===1000){
            milisec=0;
            sec+=1;
            if(sec===60){
                sec=0;
                mins+=1;
                if(mins===60){
                    mins=0;
                    hours+=1;
                    if(hours===24){
                        clearInterval(interval);
                        resetTimer();
                        alert("StopWatch has been Reset");
                    }
                }
            }
        }
        let h=hours<10? "0"+hours:hours;
        let m=mins<10? "0"+mins:mins;
        let s=sec<10? "0"+sec:sec;
        let ms=milisec<100?"0"+milisec:milisec;

        timer.innerHTML=`${h} : ${m} : ${s} : ${ms}`;
    }

    function resetTimer(){
        clearInterval(interval);
        timer.innerHTML="00 : 00 : 00 : 000";
        start_stop.innerHTML="Start";
        start_stop_flag=true;
        milisec=0;
        sec=0;
        mins=0;
        hours=0;
    }

    /* --------------------------------------Handling Click Events------------------------------------------------ */
    function initialize(){
        start_stop.addEventListener('click',start_stop_timer);
        reset.addEventListener('click',resetTimer);
    }

    initialize();
})();