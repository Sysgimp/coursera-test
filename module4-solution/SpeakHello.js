(function() {

// STEP 2: CHECK 
// Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: CHECK
// Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
var helloSpeaker = {};
// helloSpeaker.speak = function () {
// 	// body...
// };
// window.speaker = helloSpeaker.speaker

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

// STEP 4: CHECK
// Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

// STEP 5: CHECK
// Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
window.helloSpeaker = helloSpeaker;

})();