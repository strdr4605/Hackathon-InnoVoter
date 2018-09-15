function progress(beginningTime, endingTime, curentTime, $element) {
  let curentBarWidth = curentTime - beginningTime;
  let totalBarWidth = endingTime - beginningTime;
  let progressBarWidth = curentBarWidth * $element.width() / totalBarWidth - 25; // 2 is bubble size
  let timeText = `<p>${Math.floor(curentTime / 60)}:${(curentTime % 60)}</p>`
  $element.find('.progress-bar').animate({ width: progressBarWidth }, 500).html(timeText);
  if(curentTime <= endingTime) {
      setTimeout(function() {
          progress(beginningTime, endingTime, curentTime + 1, $element);
      }, 60000); // Fix for minutes not seconds -> 60000
  }
  return progressBarWidth;
};

let beginningTime = 7 * 60;
let endingTime = 21 * 60;
let curentTime = new Date().getHours() * 60 + new Date().getMinutes();

progress(beginningTime, endingTime, curentTime, $('.progress'));

// buttons actions

$('#dropdown').click(() => {
  $('#chart').toggleClass('close-chart');
  $('#hours').toggleClass('hide');
  $('.progress-bar p').toggleClass('hide');
  $('#dropdown').toggleClass('rotate');
});