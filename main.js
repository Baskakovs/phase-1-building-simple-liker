// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const like = document.querySelectorAll('.like')
const likeGlyph = document.querySelectorAll('.like-glyph')
likeGlyph.forEach((element)=>element.addEventListener("click", ()=> action(element)))
const activatedHeart = document.querySelectorAll('.activated-heart')
function action(e){
  if(e.classList.contains('activated-heart')){
    e.innerText = EMPTY_HEART
    e.setAttribute('class','')
  }else
  mimicServerCall()
  .then(()=>heartStyle(e))
  .catch((mes)=> error(mes))
}
function heartStyle(e){
  e.innerText = FULL_HEART
  e.setAttribute('class','activated-heart')
  }
function error(mes){
  modal.setAttribute('class','')
  modal.innerText = mes
  setTimeout(()=>modal.setAttribute('class','hidden'),3000)
}


//------------------------------l------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
