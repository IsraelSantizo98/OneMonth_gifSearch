//Grab de value in the input
document.querySelector('.js-go').addEventListener('click', function(){
    //alert('test')
    var input = document.querySelector('input').value;
    var userInput = getUserInput();
    searchGiphy(userInput);
});
//Reconcer el click del teclado
document.querySelector('.js-userinput').addEventListener('keyup', function(e){
    //The e in the function es the data for de event console.log(e);
    //var input = document.querySelector('input').value;
    //The number 13 is the code for enter in the keyboard
    //The keycode in js not compatible for all browsers
    if(e.which === 13){
        var userInput = getUserInput();
        searchGiphy(userInput);
    }else{
        //alert('N era el enter');
    }
});
function getUserInput() {
	var inputValue = document.querySelector('.js-userinput').value;
	return inputValue;
}
function searchGiphy( searchQuery ) {
	var url = "https://api.giphy.com/v1/gifs/search?q="+ searchQuery +"&api_key=Rhp6uPOa1OBOgfjv7Gl7neJ8gTH2BuSs&q=&limit=25&offset=0&rating=g&lang=en"
	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();
	GiphyAJAXCall.addEventListener('load', function( data ) {
			var actualData = data.target.response;
			pushToDOM(actualData);
			console.log(actualData);
	});
}
/* Para escribir directamente el DOM
document.querySelector('.js-userinput').addEventListener('keyup', function(){
    //alert('test')
    var input = document.querySelector('input').value;
    console.log(input);
    pushToDom(input);
});
*/
//Variable for link of giphy

function pushToDOM( response ) {
	// turn response into real javascript object
	response = JSON.parse( response );
	// drill down to the data array
	var images = response.data;
	// find the container to hold this stuff in DOM
	var container = document.querySelector('.js-container');
	// clear it of old content since this function will be used on every search
	// we want to reset the div
	container.innerHTML = "";
	// loop through data array and add IMG html
	images.forEach(function(image){
		// find img src
		var src = image.images.fixed_height.url;
		// concatenate a new IMG tag
		container.innerHTML += "<img src='"+ src +"' class='container-image' />";
	});
}
/*
function pushToDom(input){
    var response = JSON.parse(input);
    //console.log(input);
    //var imageUrl = response.data[2].images.fixed_height.url;
    var imageUrls = response.data;
    var container = document.querySelector('.js-container');
    //console.log(imageUrl);
    imageUrls.forEach(function (image){
        var src = image.images.fixed_height.url
        //console.log(src);
        //Para evitar que las imagenes se colocan el la misma posicion
        container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
    });
};
*/
