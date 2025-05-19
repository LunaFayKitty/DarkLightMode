

document.addEventListener('DOMContentLoaded', function() {


document.getElementById('bDark').addEventListener('click', function() {

    document.body.style.backgroundColor = 'black';
    document.body.style.color ='white';
    console.log('dark')
});

document.getElementById('bLight').addEventListener('click', function() {

    document.body.style.backgroundColor = 'lightgrey';
    document.body.style.color ='darkgrey';
    console.log('light')
});

document.getElementById('bBig').addEventListener('click', function() {

    document.body.style.fontSize = '3em';
    console.log('lalalalalalalala')
});

document.getElementById('bSmall').addEventListener('click', function() {

    document.body.style.fontSize = '1em';
    console.log('lala')
});

document.getElementById('bReset').addEventListener('click', function() {

    document.body.style.fontSize = '';
    document.body.style.backgroundColor = '';
    document.body.style.color ='';
    console.log('la')
});

});


/* hier besser vor body. so schreiben:
document.querySelector("body").style.....

bei reset button wäre es noch schöner es so zu schreiben:
location.reload();*/




/*  
BOXEN-VARIABLES (CONST,LET,VAR)
const dark = document.getElementsbyID("bDark");
dark.addEventListener("click", darkButton);
});

function darkButton() {
document.getElementsByClassName("body").style.backgroundcolor = "black";}*/