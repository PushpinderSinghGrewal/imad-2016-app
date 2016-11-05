console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="New value";
var gyanni=document.getElementById('gyanni');
var marginLeft=0;
function moveRight(){
marginLeft=marginLeft+10;
gyanni.style.marginLeft=marginLeft+'px';
    
    
}

gyanni.onclick=function()
{
  var interval=setInterval(moveRight,100);
    
    
};