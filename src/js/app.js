const notes = document.querySelectorAll('.string__fret');

const soundsList = getSoundsList();

notes.forEach((note, index) => {
  note.addEventListener('mousedown', () => {
    note.style.backgroundColor = 'red';

    play(index);
  })

  note.addEventListener('mouseup', () => {
    note.style.backgroundColor = 'transparent';

    stop(index);
  })
});

function play(sound) {
  soundsList[sound].play();
}

function stop(sound) {
  soundsList[sound].pause();
  soundsList[sound].currentTime = 0;
}

function getSoundsList() {
  let soundsList = [];

  notes.forEach(note => {
    soundsList.push(new Audio('./src/audio/' + note.dataset.note + '.' + 'mp3'));
  })

  return soundsList;
}
