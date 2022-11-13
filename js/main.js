var today =new Date();
var hours=today.getHours()
var body=document.getElementById('body')
if (hours>=5 && hours<12) {
    alert('Good Morning');
    body.style.backgroundColor = 'yellow'
}
else if(hours>=12 && hours<17){
    alert('Good Day')
    body.style.backgroundColor = 'blue'
}
else if(hours>=17 && hours<21){
    alert('Good Evening')
    body.style.backgroundColor = 'red'
}
else{
    alert('Good Night')
    body.style.backgroundColor = 'black'
}
var r=20;
var S;
S=Math.pow(r*Math.PI,2)
