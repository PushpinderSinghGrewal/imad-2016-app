var button=document.getElementById('counter');
button.onclick=function() {
    
   //Create a request object
   var request=new XMLHttpRequest();
   
   //Capture the response and store int in a variable
    request.onreadystatechange = functon(){
  if(request.readyState === XMLHttpRequest.DONE){
        //Take some action
       if(request.status===200){
           var counter=request.responseText;
           var span=document.getElementByID('count');
           span.innerHTML=counter.toString();
       }
   }
   // Not done yet
} ; 
   
   
     
    
};