const playNote = function(note) {
  $(note)[0].play();
  $(note)[0].currentTime = 0;
}

$(document).ready( function() {

  $('button').click(function() {
    let note = `#${this.innerText}Audio`
    playNote(note);
  });

  $(this).keydown(function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 71) {
      let note = `#${event.key}Audio`;
      console.log(note);
      playNote(note);
    }
  });

});
