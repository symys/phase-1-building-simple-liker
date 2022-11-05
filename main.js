// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded",(e) => {
  //console.log("hello")

  const likeBtns = document.querySelectorAll(".like-glyph");
  console.log(likeBtns)

  for (let likeBtn of likeBtns) {
    likeBtn.addEventListener('click', (event) => {
      mimicServerCall()
      .then((res) => {
        if(likeBtn.innerHTML === EMPTY_HEART){
          likeBtn.innerHTML = FULL_HEART;
          likeBtn.classList.add = "activated-heart";
        }
        else{
          likeBtn.innerHTML = EMPTY_HEART;
          likeBtn.classList.remove("activated-heart")
        }
      })
      .catch((error) => {
        const errAppear = document.querySelector("#modal");
        //console.log(errAppear)
        errAppear.classList.remove("hidden");

        const errMsg = document.querySelector("#modal-message")
        errMsg.innerHTML = error
        setTimeout(() => {
          errAppear.classList.add("hidden")
        }, 3000);
        

      })
    });
    
  }
})


//------------------------------------------------------------------------------
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
