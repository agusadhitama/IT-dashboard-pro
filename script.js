// CPU RAM DISK simulation
function updateStats(){

let cpu=Math.floor(Math.random()*100)
let ram=Math.floor(Math.random()*100)
let disk=Math.floor(Math.random()*100)

document.getElementById("cpu").innerText=cpu+"%"
document.getElementById("ram").innerText=ram+"%"
document.getElementById("disk").innerText=disk+"%"

if(cpu>85){

showNotification("⚠ CPU usage critical")

}

}

setInterval(updateStats,2000)


// CLOCK
function updateClock(){

let now=new Date()
document.getElementById("clock").innerText=now.toLocaleTimeString()

}

setInterval(updateClock,1000)


// NOTIFICATION
function showNotification(msg){

let n=document.getElementById("notification")

n.innerText=msg
n.style.display="block"

setTimeout(()=>{

n.style.display="none"

},3000)

}


// SPEED TEST
function startSpeedTest(){

let speed=0

let interval=setInterval(()=>{

speed+=Math.random()*12

document.getElementById("speed").innerText=Math.floor(speed)+" Mbps"

if(speed>150){

clearInterval(interval)

}

},100)

}


// TERMINAL
const lines=[

"Initializing system...",
"Loading network modules...",
"Scanning 192.168.1.1...",
"Firewall detected...",
"Bypassing security...",
"Injecting payload...",
"Access granted ✔"

]

let i=0

function typeTerminal(){

if(i<lines.length){

document.getElementById("terminal").innerHTML+=lines[i]+"\n"
i++

}

}

setInterval(typeTerminal,2000)


// CHART
const ctx=document.getElementById("networkChart")

const chart=new Chart(ctx,{

type:"line",

data:{

labels:[1,2,3,4,5,6],

datasets:[{

label:"Traffic",

data:[10,30,20,40,35,50],

borderColor:"#F25912",
backgroundColor:"rgba(56,189,248,0.15)",

fill:true,
tension:.3

}]

},

options:{responsive:true}

})

setInterval(()=>{

chart.data.datasets[0].data.push(Math.random()*100)
chart.data.datasets[0].data.shift()
chart.update()

},2000)


// STARS BACKGROUND
const canvas=document.getElementById("stars")
const ctxStar=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2

})

}

function drawStars(){

ctxStar.clearRect(0,0,canvas.width,canvas.height)

ctxStar.fillStyle="white"

stars.forEach(star=>{

ctxStar.beginPath()
ctxStar.arc(star.x,star.y,star.size,0,Math.PI*2)
ctxStar.fill()

})

}

setInterval(drawStars,50)


// PUBLIC IP DETECTOR
fetch("https://api.ipify.org?format=json")
.then(res=>res.json())
.then(data=>{

document.getElementById("ip").innerText=data.ip

})