var button=document.getElementById('counter');
var counter=0;
button.onClick=function(){
    
    //make a request to the counter endpoint
    //Capture the response and store int in a variable
    //Render the variable in the correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
}