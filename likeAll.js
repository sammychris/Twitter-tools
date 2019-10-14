// This function is used to like as many comments in .5 seconds .
// It likes all comments in .5 second as long as you keep scrolling the page.
// It has no loop, but contains a set setInterval function that runs at .5s.
// You only call it once then setInterval does the rest.


function likeAll(){
	//var like = document.querySelectorAll('div[data-testid=like]');
	//let count = 0;
    let timer = setInterval( function () {
		var currentLike = document.querySelectorAll('div[data-testid=like]')[0];
		if(!currentLike){
			clearInterval(timer);
			return console.log('completed');
        }	
		currentLike.click();
		console.log('licked');
		//count++;
	}, 500);
}