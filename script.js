function func(){
 document.getElementById('index').style.display='none';
 document.getElementById('q-1').style.display='block';
}

function prev(event){

    var a= event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    a.style.display='none';
    a.previousElementSibling.style.display='block';
    
}

function next(event){

    var b= event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    b.style.display='none';
    b.nextElementSibling.style.display='block';
}

function go(event,a){
    var b= event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    b.style.display='none';
    var c=document.getElementById('index');

    for(i=0;i<a;i++){
        c=c.nextElementSibling;
    }
    c.style.display='block';
}
function start(){
    document.getElementById('result').style.display='none';
    document.getElementById('index').style.display='block';

   
}

function sub(event){
    var x=event.target.parentElement.parentElement.parentElement;
    x.style.display='none';
    x.nextElementSibling.style.display='block';
    

}
var m=9;
var s=59;
function min() {
    m-=1;
    document.getElementById("timer").innerHTML=m+":"+s;
    
}
function sec() {
    if(s===0){s=59;}
    else{s-=1;}
    document.getElementById("timer").innerHTML=m+":"+s;}


var a=true;
var mm;
var ss;
function time(){
    if(a){
       mm= setInterval(min, 60000);

       ss= setInterval(sec, 1000);
        
        a=false;
    document.getElementById('timer').style.display='block';
    }
    else{
        a=true;
    document.getElementById('timer').innerHTML=" ";
    document.getElementById('timer').style.display='none';
    clearInterval(mm);
    clearInterval(ss);
    m=9;
    s=59;
    }
       
}

