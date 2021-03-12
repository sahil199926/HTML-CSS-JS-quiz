//start
function func(){
 document.getElementById('index').style.display='none';
 document.getElementById('q-1').style.display='block';
 //foot
 document.getElementById('foot').style.display='block';
}
//go
function go(a){
  
    var divs=document.getElementById('index');
    divs=divs.nextElementSibling;

    for(i=1;i<=10;i++){
        if(divs.style.display=='block')
        {var del=document.getElementById('foot').childNodes[1].childNodes[1].querySelectorAll('li');
        for(j=0;j<del.length;j++){
            if(i==Number(divs.id.slice(-1)))
            {
                del[j].classList.remove('active');
            }
            if(j==a){del[j-1].classList.add('active');}
            
        }
    }

        if(i==a){divs.style.display='block';}
        else{divs.style.display='none';}
        divs=divs.nextElementSibling;
    }
}

function fo(event){

    var b= event.target.parentElement.parentElement.parentElement;

    var f=document.getElementById('foot').childNodes[1].childNodes[1].querySelectorAll('li');
    
    var temp=Number(b.id.slice(-1));
   
    f[temp-1].classList.remove("active");
    f[temp].classList.remove('disabled');
    f[temp].classList.add('active');
}

//footer to move quickly to  any visited page

//start again
function start(){
    document.getElementById('result').style.display='none';
    document.getElementById('index').style.display='block';
    document.getElementById('sol').style.display='none';
    location.reload();
   
}
ans={'q1':0,'q2':0,'q3':0,'q4':0,'q5':0,'q6':0,'q7':0,'q8':0,'q9':0,'q10':0,};
solution={'q1':'0','q2':'0','q3':'0','q4':'0','q5':'0','q6':'0','q7':'0','q8':'0','q9':'0','q10':'0'};
// for answer submition
function sub(event){
    var cal=event.target.parentElement.previousElementSibling;
    
    for(i=0;i<cal.childNodes.length;i++){
        
        if(cal.childNodes[i].checked&&cal.childNodes[i].value==='y')
        { solution[cal.childNodes[i].name]=cal.childNodes[i].id; ans[cal.childNodes[i].name]=1;}

        else if(cal.childNodes[i].checked){solution[cal.childNodes[i].name]=cal.childNodes[i].id;ans[cal.childNodes[i].name]=2;}
       
    }

    var x=event.target.parentElement.parentElement.parentElement;
    if(x.id==='q-10'){return;}
    x.style.display='none';
    x.nextElementSibling.style.display='block';
    

}

//result
function result(){
    document.getElementById('q-10').style.display='none';
    document.getElementById('result').style.display='block';
    var r=0;
    for(let p in ans){
        if(ans[p]==1){r+=1;}
    }
    document.getElementById("res").innerHTML='You have scored '+r;
}
//mark as submitted
function tick(event){
    event.target.innerHTML=" ✓ submitted";
}
//modal
function sure(c){
    if(c=='c'){document.getElementsByClassName('modal')[0].style.display='none';}
    else if(c=='b'){document.getElementsByClassName('modal')[0].style.display='none';
    document.getElementById('foot').style.display='none';}
    else{document.getElementsByClassName('modal')[0].style.display='block';}

}
var mm;
var ss;
var m=9;
var s=59;
//minite fun
function min() {
    if(m===-1){
        alert('TIME IS UP');
        m=9;
        s=59;
        result();
        clearInterval(mm);
        clearInterval(ss);

        var c = document.getElementById('index');

        for (i = 0; i < 11; i++) {
            c.style.display = 'none';
            c = c.nextElementSibling;
        }
        time();
        c.style.display = 'block';
    }

    else{m-=1;}
    document.getElementById("timer").innerHTML=m+":"+s;
    
}
//second func
function sec() {
    if(s===0){s=59;}
    else{s-=1;}
    document.getElementById("timer").innerHTML=m+":"+s;
}


var a=true;
//time 
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


//amswers
function answer(){
var all_ul=document.getElementById('sol').querySelectorAll('ul');
    for (let i = 1; i <= all_ul.length; i++) {
        let temp = solution['q' + i];

        var temp2 = temp.slice(-1);

        temp2 = Number(temp2);
        var u_l = all_ul[i - 1];
        var chi = u_l.querySelectorAll('li');
        //console.log(chi);

        for (var j = 1; j <= chi.length; j++) {
            if (temp2 == 0) { break;}
            if (j == temp2) {
             
                chi[j - 1].style.border = '4px solid black';
            }
        }


    }
    document.getElementById('sol').style.display='block';
}
//show answers
function show(){
    document.getElementById('b3').style.display='block';
}

 
//top
mybutton = document.getElementById("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
