// This function is used to follow only when the follow button appears on twitter.
// It contains a loop that always get the first 20 follow button, before you make another call.
// After the first call, you will have to call the function again to make it work

function followBack(){
    let qSelect = document.querySelectorAll('.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep');
    for(let i = 0; i < qSelect.length; i++){
		let fBtn = qSelect[i].querySelector('[role=button]');
		if(fBtn.innerText.trim() == 'Follow'){
			console.log('following number '+i)
            fBtn.click();
        } else {
			console.log('Already following number'+i)	
		}
    }
}