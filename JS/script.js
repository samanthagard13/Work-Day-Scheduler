$(document).ready(function() {

  let saveBtn = $('.saveBtn');
  let now = dayjs();
  let hour = dayjs().hour();

  saveBtn.on('click', function (event) {
    let selectedHour = $(this).closest('.time-block').attr('id');
    let savedEvent = $(this).siblings('.description').val();

    localStorage.setItem(selectedHour, savedEvent);
  });

$('.time-block').each(function() {
  let blockHour = parseInt($(this).attr('id').split('-')[1]);
  if (blockHour === hour) {
    $(this).addClass('present');
    $(this).css('border', 'rgb(64, 64, 64) 1px solid');
  } else if (blockHour < hour) {
    $(this).addClass('past');
  } else {
    $(this).addClass('future');
  }

  var selectedHour = $(this).attr('id');
  var savedEvent = localStorage.getItem(selectedHour);
  $(this).find('.description').val(savedEvent);
}); 

$('#currentDay').text(now.format('MMM D, YYYY h:mmA'));
});

