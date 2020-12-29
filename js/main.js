//Gran de value in the input
document.querySelector('.js-go').addEventListener('click', function(){
    //alert('test')
    var input = document.querySelector('input').value;
    console.log(input);
    pushToDom(input);
});
//Reconcer el click del teclado
document.querySelector('.js-userinput').addEventListener('keyup', function(e){
    //The e in the function es the data for de event
    console.log(e);
    var input = document.querySelector('input').value;
    console.log(input);
    //The number 13 is the code for enter in the keyboard
    //The keycode in js not compatible for all browsers
    if(e.which === 13){
        pushToDom(input);
    }else{
        //alert('N era el enter');
    }
});
/* Para escribir directamente el DOM
document.querySelector('.js-userinput').addEventListener('keyup', function(){
    //alert('test')
    var input = document.querySelector('input').value;
    console.log(input);
    pushToDom(input);
});
*/
//Variable for link of giphy
var url = "https://api.giphy.com/v1/gifs/search?api_key=Rhp6uPOa1OBOgfjv7Gl7neJ8gTH2BuSs&q=&limit=25&offset=0&rating=g&lang=en";
//AJAX
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load', function(e){
    //console.log(e);
    //response es cuando ya cargo la pagina
    var data = e.target.response;
    console.log(data);
});
function pushToDom(input){
    var container = document.querySelector('.js-container');
    container.innerHTML = input;
};
