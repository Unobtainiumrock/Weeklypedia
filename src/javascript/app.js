
// $(document).ready(function() {
//     $('#bg-video').videoBackground("Adobe_Spark_Video_1.gif");
//   });
  
//   var settings = {
//     autoplay: 'autoplay',
//     muted: 'muted',
//     loop: 'loop',
//     fit: 'fill', // changes the object-fit property of the video
//     src: 'Adobe_Spark_Video_1.gif' // url to video
//   }
// USER STORY
// User lands on home page this should our base html with sign-in/sign up button options in the nav.
// button(somewhere in nav, `html elements`)
// button(somewhere in nav, `html elements`)



// Make those nav sign-in/sign-up buttons generate via JQuery. @Mridula, we need the generic button generating
// function we created, except make sure it can be provided different data for them to be:
// modal-triggering buttons org user-preference buttons. The button generator will also need to take a
// target DOM element as a parameter, since we won't be targeting our app container
// directly with buttons. Our button maker will target the nav, and a generic JQuery generated container instead.

// Use the modal examples from boostrap as an example for modal-triggering buttons.


// Automatically render modals to the app container, since they remain hidden until one of the nav buttons trigger
// them to appear/ user actions cause them to disappear.

 signIn();  // note: the signIn() and signUp() can probably be merged into a single modal generator
// signUp();         g0I (Nick) can show an example of how that is done.
//interestButtonHolder();

// On sign-up, a user's login info is saved to firebase authentication, afterwards, they are presented the interests-picking view.
// this is also when the sign-in/sign-up buttons need to be cleared out of the nav.

// On sign-in, a user is directed to their plan view.
// createContainer() for housing all the buttons
// createButton() equal to the number of interests to pick from and target the generic container to put them in
// note: we put them all in a container, so that we can have them all simultaneously animate into view to the user.

// if(true/*User already has preferences*/) {
//   calendar();
//   // calendar calls yourPlan(), which calls
//   $(document).on('click','#new-plan',function(e) {
//     console.log('I was clicked!');
//   })
// }


// interestButtonHolder();

