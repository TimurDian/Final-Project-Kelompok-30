var text = "Enjoy Our Special Menus";
var intext = 0;
var speedtext = 100;

setInterval(function(){
var target = $("#autotextmenu");
target.append(text[intext]);
intext++;
}, speedtext);