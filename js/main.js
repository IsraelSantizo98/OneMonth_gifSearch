//Gran de value in the input
document.querySelector('.js-go').addEventListener('click', function(){
    //alert('test')
    var input = document.querySelector('input').value;
    console.log(input);
    pushToDom(input);
});
function pushToDom(input){
    var container = document.querySelector('.js-container');
    container.innerHTML = input;
};