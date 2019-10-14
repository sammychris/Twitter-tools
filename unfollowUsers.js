// This function unfollows many users at a go.
// It only unfollows users that never followed back.
// It contains a loop unfollows 21 users at once, before you make another call.
// After the first call, you will have to call the function again to make it work.
// You only use it when the unfollow buttons are available



function unfollow(){
    let users = document.querySelectorAll('div.r-1awozwy.r-18u37iz.r-1wtj0ep');
    for (let i = 0; i < users.length; i++){
		let user = users[i]
    	if( !user.children[0].children[0].children[0].children[1].children[1]) {
			if(user.children[1].children[0].children[0].children[0].children[0].innerHTML == 'Following'){
				user.children[1].children[0].click();
				document.querySelectorAll('[data-testid=confirmationSheetConfirm]')[0].click();
				console.log('You just unfollow this user')
            }
        }
    }
}