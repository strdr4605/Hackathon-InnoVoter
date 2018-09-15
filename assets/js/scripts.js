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

$(function() {
  $('.map').maphilight();
  $('#map2').hide();
  $('#map3').hide();
  $('#find').hide();
  $('#partids').hide();
});

$('area').click((evt) => {
  let name = (evt.target.alt).split(' ')[2];
  $('#disname').html(`Circumscriptia ${name}`);
  $('#info').show();
});

$('#closebtn').click((evt) => {
  $('#info').hide();
});

$('#btn1').click(() => {
  $('.map').show();
  $('#map2').hide();
  $('#map3').hide();
});

$('#btn2').click(() => {
  $('.map').hide();
  $('#map2').show();
  $('#map3').hide();
});

$('#btn3').click(() => {
  $('.map').hide();
  $('#map2').hide();
  $('#map3').show();
});

$('.but').click(() => {
  $('#find').show();
});

$('#find').click(() => {
  $('#find').hide();
});

$('#res-pro').click(() => {
  $('#partids').show();
});

$('#partids').click(() => {
  $('#partids').hide();
});