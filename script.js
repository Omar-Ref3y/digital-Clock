const Hour=document.getElementById("hour")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")
const ampm=document.getElementById("ampm")
function updateTime() {
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let am="AM"
    if(h>12){
        h=h-12
        am="PM"
    }
    h=h<10?"0"+h:h
    m=m<10?"0"+m:m
    s=s<10?"0"+s:s

    Hour.innerHTML=h
    minutes.innerHTML=m
    seconds.innerHTML=s
    ampm.innerHTML=am
    setTimeout(()=>{
        updateTime()
    },1000)
}
updateTime()