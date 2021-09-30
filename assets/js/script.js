$(document).ready(function () {

    $('.saveBtn').on('click', function () {
      // get nearby values
      var value = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
  
      // store events in localStorage
      localStorage.setItem(time, value);
  
      // show that item was saved to localStorage 
      $('.notification').addClass('show');
  
      // remove 'show' message after 3s
      setTimeout(function () {
        $('.notification').removeClass('show');
      }, 3000);
    });
  
    // update to current hours
    function hourUpdater() {
      var currentHour = moment().hours();
  
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
         // set colors for time blocks for past, present and future
        if (blockHour < currentHour) {
          $(this).addClass('past');
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    hourUpdater();
  
  // display current day on page
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });