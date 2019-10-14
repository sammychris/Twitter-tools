// This function is used to like many comment at a go.
// It only likes comment per user.
// It contains a loop that always like the first 21 buttons, before you make another call.
// After the first call, you will have to call the function again to make it work.
// Lastly it requires a global variable called usernameStore,
// to store the users name in case the function ends to help keep the previous usernames.

let usernameStore = [];

function uniqueLiker(){
    let m = document.querySelectorAll('.css-1dbjc4n.r-1iusvr4.r-46vdb2.r-1777fci.r-5f2r5o.r-bcqeeo');
    for ( let i = 0; i < m.length; i++ ) {
        let user = m[i].querySelectorAll('.css-901oao.css-16my406.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0')[0];
        let likeButton = m[i].querySelector('div[data-testid=like]');
		if(user){
			let username = user.innerText;
        	if(usernameStore.includes(username) || !likeButton) {
            	console.log('You already liked this user');
       		} else {
            	likeButton.click();
            	usernameStore.push(username);
        	}
        }
    }
}