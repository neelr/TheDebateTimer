import Layout from "../components/Layout";
import Link from "next/link";

export default class Index extends React.Component {
    render() {
        return(
            <Layout display="true">
                <div className="center">
                    <div className="container">
                        <h1>timer</h1>
                        <h2 id="timer">Press a speech!</h2>
                        <div style={{display:"flex"}}>
                            <a style={{margin:"5px"}} id="start" className="button">Start</a>
                            <a style={{margin:"5px"}} id="stop" className="button">Stop</a>
                        </div>
                    </div>
                    <style jsx>{`
                    #timer {
                        font-size:10vh;
                        font-weight:700;
                    }
                    @media screen and (max-height:330px) {
                        #timer {
                            font-size:3em;
                            font-weight:700;
                        }
                        h1 {
                            display: none !important;
                        }
                        .content {
                            margin-top:0px !important;
                        }
                    }
                    `}</style>
                </div>
            </Layout>
        )
    }
    componentDidMount() {
        var prep = 0;
        var negPrep = 300;
        var affPrep = 300;
        var alarm = new Audio('/static/alarm.mp3');
        var pause = false;
        var cleared = true;
        var time;
        var interval;
        var on = false;
        function timer() {
            on = true;
            if (!pause) {
                time-=1;
                var minute = Math.floor(time/60);
                var seconds = time % 60;
                seconds = seconds==0 ? "00": seconds;
                seconds = seconds<10 ? "0"+String(seconds): seconds;
                document.getElementById("timer").innerHTML = `${minute}:${seconds==0 ? "00": seconds}`;
                if (time === 0) {
                    on = false;
                    clearInterval(interval);
                    document.getElementById("timer").innerHTML = `0:00 DONE!`;
                    cleared = true;
                    alarm.play();
                }
            }
        } 
        Array.prototype.map.call(document.getElementsByClassName("eight"),(element)=> {
            element.onclick = ()=>  {
                prep = 0;
                on = false;
                clearInterval(interval);
                cleared = false;
                pause = false;
                time = 480;
                var minute = Math.floor(time/60);
                var seconds = time % 60;
                seconds = seconds==0 ? "00": seconds;
                seconds = seconds<10 ? "0"+String(seconds): seconds;
                document.getElementById("timer").innerHTML = `${minute}:${seconds==0 ? "00": seconds}`;
            }
        });
        Array.prototype.map.call(document.getElementsByClassName("five"),(element)=> {
            element.onclick = ()=>  {
                prep = 0;
                on = false;
                clearInterval(interval);
                cleared = false;
                pause = false;
                time = 300;
                var minute = Math.floor(time/60);
                var seconds = time % 60;
                seconds = seconds==0 ? "00": seconds;
                seconds = seconds<10 ? "0"+seconds: seconds;
                document.getElementById("timer").innerHTML = `${minute}:${seconds==0 ? "00": seconds}`;
            }
        });
        Array.prototype.map.call(document.getElementsByClassName("three"),(element)=> {
            element.onclick = ()=>  {
                prep = 0;
                on = false;
                clearInterval(interval);
                cleared = false;
                pause = false;
                time = 180;
                var minute = Math.floor(time/60);
                var seconds = time % 60;
                seconds = seconds==0 ? "00": seconds;
                seconds = seconds<10 ? "0"+seconds: seconds;
                document.getElementById("timer").innerHTML = `${minute}:${seconds==0 ? "00": seconds}`;
            }
        });
        document.getElementById("start").onclick = ()=> {
            if (!pause && !cleared) {
                if (!on) {
                    alarm.pause();
                    interval = setInterval(timer,1000);
                }
            } else {
                pause = false;
            }
        }
        document.getElementById("stop").onclick = ()=> {
            alarm.pause();
            pause = true;
            if (prep == 1) {
                affPrep = time;
            } else if (prep == 2) {
                negPrep = time;
            }
        }
        document.getElementById("aff").onclick = ()=>  {
            on = false;
            clearInterval(interval);
            cleared = false;
            pause = false;
            time = affPrep;
            prep = 1;
            var minute = Math.floor(time/60);
            var seconds = time % 60;
            seconds = seconds==0 ? "00": seconds;
            seconds = seconds<10 ? "0"+seconds: seconds;
            document.getElementById("timer").innerHTML = `${minute}:${seconds==0 ? "00": seconds}`;
        }
        document.getElementById("neg").onclick = ()=>  {
            on = false;
            clearInterval(interval);
            cleared = false;
            pause = false;
            time = negPrep;
            prep = 2;
            var minute = Math.floor(time/60);
            var seconds = time % 60;
            seconds = seconds==0 ? "00": seconds;
            seconds = seconds<10 ? "0"+seconds: seconds;
            document.getElementById("timer").innerHTML = `${minute}:${seconds==0 ? "00": seconds}`;
        }
    }
}