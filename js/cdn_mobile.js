function delete_it(obj){
    document.getElementById(obj).innerHTML='';
}
setTimeout('delete_it("cdn_mid_p")',6000);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
c = 0;
function lined(){
    var num = getRndInteger(1,10);
    c = c + num;
    var o = c / 100;
    if (o>1){o=1;}
    var u = 45 * o;
    var objs = document.getElementById('linesksks');
    var k = parseInt(u);
    objs.style.width=k+'rem';
    var t = c;
    if (t>100){
        t=100;
        //setTimeout('window.location.href="/url/index.html"',2000);
    }
    var r = parseInt(t);
    document.getElementById('percent').innerHTML=r+'%';
}
setTimeout('setInterval("lined()",500);',8000);