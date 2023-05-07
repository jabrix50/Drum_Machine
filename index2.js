let sumPads = document.querySelectorAll('.drum-pad').length;
let audio;

//mouse handler
for(let i = 0; i < sumPads; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function handleClick() {
      let clickedKey = this.innerText;
      audio = document.getElementById(clickedKey);
      audio.play();
      displaySound();
    })
  };

  //keypad handler
document.addEventListener('keydown', function handleKeyDown(event) {
    let clickedKey = event.key.toUpperCase();
    audio = document.getElementById(clickedKey);
    audio.play();
    displaySound();
})

function playSound() {    
    setTimeout(function() {
        audio.play();
    }, 0)
};

function displaySound() {
    let audioId = audio.parentElement.id;
    displayBank = document.querySelector('.display')
    displayBank.innerText = audioId
};
