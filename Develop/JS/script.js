// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

  let saveBtn = $('.saveBtn');
  let now = dayjs();
  let hour = dayjs().hour();
  let timeBlock = $('.time-block');
  let description = $('.description');
  let hoursArray = [
    '#hour-7',
    '#hour-8',
    '#hour-9',
    '#hour-10',
    '#hour-11',
    '#hourP-12',
    '#hourP-13',
    '#hourP-14',
    '#hourP-15',
    '#hourP-16',
    '#hourP-17',
    '#hourP-18',
    '#hourP-19'
  ];
  

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on('click', function (event) {
    let selectedHour = $(this).closest('time-block');
    let savedEvent = $(this).siblings('.description').val();

    localStorage.setItem(selectedHour, savedEvent);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
$('.time-block').each(function() {
  let blockHour = parseInt($(this).attr('id').split('-')[1]);
  if (blockHour === hour) {
    $(this).addClass('present');
    $(this).css('border', 'rgb(0, 0, 0) 1px solid');
  } else if (blockHour < hour) {
    $(this).addClass('past');
  } else {
    $(this).addClass('future');
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //localStorage.getItem(savedEvent).display;
  var selectedHour = $(this).attr('id');
  var savedEvent = localStorage.getItem(selectedHour);
  $(this).find('.description').val(savedEvent);
}); 
  // TODO: Add code to display the current date in the header of the page.

$('#currentDay').text(now.format('MMM D, YYYY h:mmA'));
});

