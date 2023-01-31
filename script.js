// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] HH:mm:ss a');
  timeDisplayEl.text(rightNow);
}

$(document).ready(function () {
 
  //setting local storage values
  $(".saveBtn").on("click", function () {
      
      console.log(this);
      var description = $(this).siblings(".description").val(); 
      var hour = "hour" + "_" + $(this).parent().attr("id"); 

      
      localStorage.setItem(hour, description);
  })
  
  
 //tracking the hours for the time-blocks
  function timeTracker() {
            
    var currentHour = dayjs().format('HH'); 
    
    
      $(".time-block").each(function () {
          
          var scheduleHour = parseInt($(this).attr("id"));
          
          console.log("schedule_hour" + scheduleHour, "current_hour" + currentHour);
          
          if (isNaN(scheduleHour)) {(scheduleHour = 0);
          }

          //replacing classes in the time-block to be past present or future
          
          if (scheduleHour < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (scheduleHour == currentHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }

  timeTracker();
  $("#9 .description").val(localStorage.getItem("hour_9"));
  $("#10 .description").val(localStorage.getItem("hour_10"));
  $("#11 .description").val(localStorage.getItem("hour_11"));
  $("#12 .description").val(localStorage.getItem("hour_12"));
  $("#13 .description").val(localStorage.getItem("hour_13"));
  $("#14 .description").val(localStorage.getItem("hour_14"));
  $("#15 .description").val(localStorage.getItem("hour_15"));
  $("#16 .description").val(localStorage.getItem("hour_16"));
  $("#17 .description").val(localStorage.getItem("hour_17"));
});  
displayTime();  //calling displayTime
setInterval(displayTime, 1000);  //keeping the time current

//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});
