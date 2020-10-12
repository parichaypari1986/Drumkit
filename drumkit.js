// code for detecting the keypress and log the correspoding audio file name.

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key= "${e.keyCode}"]`);
    
    if(!audio) return; //if there is no audio file related to  the perticulart key value then return.
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
    }

function removeTransition(e) {
if(e.propertyName !== 'transform') return;
this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


window.addEventListener('keydown', playSound) ;

