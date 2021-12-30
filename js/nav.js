"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

// Any thing below is my work:
// user story
/*
function navUserStoryClick(evt){
    console.debug("navUserStoryClick", evt);
    hidePageComponents();  // this will hide   $allStoriesList, $loginForm, $signupForm,
    $allStoriesList.show();
    $submitForm.show();
}
*/

// My addition Every thing below is my addition

/** Show story submit form on clicking story "submit" */
// when a user clicks on the submit, that is in navbar, show story PART 2B

// function navSubmitStoryClick(evt) {  
function navSubmitClick(evt) {           // PART 2B, function for submit link in 
    console.debug("navSubmitClick", evt);
    hidePageComponents();
    // $allStoriesList.show();
    $submitForm.show();
  }
  
  $navSubmitStory.on("click", navSubmitClick);
  
  /** Show favorite stories on click on "favorites" */
  
  function navFavoritesClick(evt) {
    console.debug("navFavoritesClick", evt);
    hidePageComponents();
    putFavoritesListOnPage();
  }
  
  $body.on("click", "#nav-favorites", navFavoritesClick);
  
  /** Show My Stories on clicking "my stories" */
  
  function navMyStories(evt) {
    console.debug("navMyStories", evt);
    hidePageComponents();
    putUserStoriesOnPage();
    $ownStories.show();
  }
  
  $body.on("click", "#nav-my-stories", navMyStories);
  
/** Hide everything but profile on click on "profile" */

function navProfileClick(evt) {
    console.debug("navProfileClick", evt);
    hidePageComponents();
    $userProfile.show();
  }
  
  $navUserProfile.on("click", navProfileClick);
