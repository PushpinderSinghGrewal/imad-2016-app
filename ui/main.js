console.log('Loaded!');
//var element=document.getElementById('main-text');
//element.innerHTML="New value";
var myimage=document.getElementById('myimage');
var marginLeft=0;
function moveRight(){
marginLeft=marginLeft+10;
myimage.style.marginLeft=marginLeft+'px';
    
    
}

myimage.onclick=function()
{
  var interval=setInterval(moveRight,100);
    
    
};