const audio =
  document.query Selector (!'audio');

audio.addEventListerner('play' , () => {
  body.classList.add('play-music');
});

audio.addEventListerner('play' , () => {
  body.classList.remove('play-music');
});
