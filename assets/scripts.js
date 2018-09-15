function progress(beginningTime, endingTime, curentTime, $element) {
  let curentBarWidth = curentTime - beginningTime;
  let totalBarWidth = endingTime - beginningTime;
  let progressBarWidth = curentBarWidth * $element.width() / totalBarWidth;
  $element.find('.progress-bar').animate({ width: progressBarWidth }, 500).html(Math.floor(curentTime / 60) + ":" + curentTime % 60);
  if(curentTime <= endingTime) {
      setTimeout(function() {
          progress(beginningTime, endingTime, curentTime + 1, $element);
      }, 1000); // Fix for minutes not seconds -> 60000
  }
};

let beginningTime = 7 * 60;
let endingTime = 21 * 60;
let curentTime = new Date().getHours() * 60 + new Date().getMinutes();

progress(beginningTime, endingTime, curentTime, $('.progress'));