const hourhandle=document.getElementById('hour')
const minhandle=document.getElementById('minute')
const sechandle=document.getElementById('sec')

const disp=document.getElementById('demo')

const quoteD=document.getElementById('quote')

const btn=document.getElementById("clockbtn")

console.log(hourhandle);

 setClock=()=>{

        const now =new Date();
        const sec=now.getSeconds();
        // console.log("second", sec)
        const secDegree=((sec/60)*360)+90;
        // console.log('degree',secDegree)
        sechandle.style.transform=`rotate(${secDegree}deg)`


        const min=now.getMinutes()
        // console.log("minute", min)
        const mindegreee=((min/60)*360)+((sec/60)*6)+90
        // console.log('mindegree',mindegreee)
        minhandle.style.transform=`rotate(${mindegreee}deg)`
        // minhandle.style.backgroundColor ='green'
        // minhandle.style.width='43%';
        // minhandle.style.top='49%';
        // minhandle.style.left='8%';
        



        const hour=now.getHours();
        console.log('hour',hour)
        const hourdegree=((hour/12)*360)+((min/60)*30)+90; 
        // const hourdegree=((hour/12)*360)+((min/60)*30)+90;
        console.log('hourdegree',hourdegree)
        hourhandle.style.transform=`rotate(${hourdegree}deg)`
    //    hourhandle.style.backgroundColor ='blue'

        // hourhandle.style.width='43%';
        // hourhandle.style.top='49%';
        // hourhandle.style.left='8%';
        }

setInterval(setClock,1000);

function hideclock(){

    if(disp.style.display == 'none'){

        console.log()
     document.getElementById("demo").style.display = 'block';
     quoteD.style.display='none';
     btn.innerText='hide'
    }
    else if(disp.style.display == 'block'){
        document.getElementById("demo").style.display = 'none';
        quoteD.style.display='block';
        btn.innerText='show'
    }  
    
    else{
        alert('error')
    }
}


    

// setClock();
