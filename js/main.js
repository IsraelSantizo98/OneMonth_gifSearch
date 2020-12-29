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
function pushToDom(input){
    var container = document.querySelector('.js-container');
    container.innerHTML = input;
};
