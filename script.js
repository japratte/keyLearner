const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keyList = ['A', 'Ab', 'B', 'Bb', 'C', 'D', 'Db', 'E', 'Eb', 'F', 'G', 'Gb'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

var rkg;

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

keys.forEach(key => {
    key.addEventListener('click', () => showAnswer(key))
})



document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function ranKeyGen(keyList) {
    var ranKey = keyList[Math.floor(Math.random() * keyList.length)];
    return ranKey;
}

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

function showQuestion() {
    
    rkg = ranKeyGen(keyList);
        
    document.getElementById("question1").innerHTML = "Please click on the " + rkg + " key...."
}

function showAnswer(key) {
    document.getElementById("answer1").innerHTML = "Incorrect - You clicked the " + key.innerHTML + " key !"

    if (key.innerHTML == rkg){
        showQuestion()
        showCorrectAnswer()
    }
        
}

function showCorrectAnswer() {
    
    document.getElementById("answer1").innerHTML = "Correct !"
}


showQuestion();
