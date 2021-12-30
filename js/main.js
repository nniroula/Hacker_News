"use strict";

// So we don't have to keep re-finding things on page, find DOM elements once:

const $body = $("body");

const $storiesLoadingMsg = $("#stories-loading-msg");
const $allStoriesList = $("#all-stories-list");

const $loginForm = $("#login-form");
const $signupForm = $("#signup-form");

const $navLogin = $("#nav-login");
const $navUserProfile = $("#nav-user-profile");
const $navLogOut = $("#nav-logout");

// My addition underneath
const $favoritedStories = $("#favorited-stories");
const $ownStories = $("#my-stories");
// selector that finds all three story lists
const $storiesLists = $(".stories-list");

const $submitForm = $("#submit-form");
const $navSubmitStory = $("#nav-submit-story");
const $userProfile = $("#user-profile");


// My addition above

/** To make it easier for individual components to show just themselves, this
 * is a useful function that hides pretty much everything on the page. After
 * calling this, individual components can re-show just what they want.
 */

function hidePageComponents() {
    const components = [
        $allStoriesList,
        $loginForm,
        $signupForm,
    ];
    components.forEach(c => c.hide());
}
/*
function hidePageComponents() {
    const components = [
      $storiesLists,
      $submitForm,
      $loginForm,
      $signupForm,
      $userProfile
    ];
    components.forEach(c => c.hide());
  }
*/

/** Overall function to kick off the app. */

async function start() {
    console.debug("start");    // what does debug do? 

    // "Remember logged-in user" and log in, if credentials in localStorage
    await checkForRememberedUser();
    await getAndShowStoriesOnStart();

    // if we got a logged-in user
    if (currentUser) updateUIOnUserLogin();
}

// Once the DOM is entirely loaded, begin the app
                                                            // what does console.warn() do
console.warn("HEY STUDENT: This program sends many debug messages to" +
  " the console. If you don't see the message 'start' below this, you're not" +
  " seeing those helpful debug messages. In your browser console, click on" +
  " menu 'Default Levels' and add Verbose");
$(start);






// for getting token
/*

  curl -i \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"user":{"name":"Joanne","username":"jn","password":"codefun"}}' \
      https://hack-or-snooze-v3.herokuapp.com/signup
    
*/

// Token
/*

"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpuIiwiaWF0IjoxNjQwOTAxMDYzfQ.xOkFEu6nO0ys4sLk6-TGevVoFQ6f6Slhj6JGkR387eM"
*/


/*
curl -i \
     -H "Content-Type: application/json" \
     -X POST \
     -d '{"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpuIiwiaWF0IjoxNjQwOTAxMDYzfQ.xOkFEu6nO0ys4sLk6-TGevVoFQ6f6Slhj6JGkR387eM", "story": {"author":"Joanne","title":"Fun Loving", "url": "https://www.rithmschool.com/blog/developer-productivity"} }' \
      https://hack-or-snooze-v3.herokuapp.com/stories

*/