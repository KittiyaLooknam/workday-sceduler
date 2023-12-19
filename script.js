// write current day to the display
document.addEventListener("DOMContentLoaded", function () {
  // Display the current date in the header
  const currentDateElement = document.getElementById("currentDay");
  currentDateElement.textContent = dayjs().format("dddd, MMMM D, YYYY");

  });  
  
//Create variables for textarea to be used to get value
var hourNineText = $("#hour-9");
var hourTenText = $("#hour-10");
var hourElevenText = $("#hour-11");
var hourTwelveText = $("#hour-12");
var hourThirteenText = $("#hour-13");
var hourFourteenText = $("#hour-14");
var hourFifteenText = $("#hour-15");
var hourSixteenText = $("#hour-16");
var hourSeventeenText = $("#hour-17");
var confirmationMsg = $("#confirmation-msg");
var timeBlock = $(".time-block")


//Create variables for save button to initialize a click event to store textarea value to local storage
var saveBtn = $(".saveBtn");

//Onclick, save the value of all items to local storage
saveBtn.on("click", function(e) {
    e.preventDefault();
    confirmationMsg.html("Appointment Added with <code>localStorage</code>");
    confirmationMsg.attr("style", "text-align: center; font-size: 12px");
    hourNineVal = hourNineText.val();
    hourTenVal = hourTenText.val();
    hourElevenVal = hourElevenText.val();
    hourTwelveVal =  hourTwelveText.val();
    hourThirteenVal = hourThirteenText.val(); 
    hourFourteenVal = hourFourteenText.val(); 
    hourFifteenVal = hourFifteenText.val();
    hourSixteenVal = hourSixteenText.val();
    hourSeventeenVal = hourSeventeenText.val();
    localStorage.setItem("hour09", hourNineVal);
    localStorage.setItem("hour10", hourTenVal);
    localStorage.setItem("hour11", hourElevenVal);
    localStorage.setItem("hour12", hourTwelveVal);
    localStorage.setItem("hour13", hourThirteenVal);
    localStorage.setItem("hour14", hourFourteenVal);
    localStorage.setItem("hour15", hourFifteenVal);
    localStorage.setItem("hour16", hourSixteenVal);
    localStorage.setItem("hour17", hourSeventeenVal);
});

//On page load, place all items from local storage to pageset
function init() {
    hourNineText.val(localStorage.getItem("hour09"));
    hourTenText.val(localStorage.getItem("hour10"));
    hourElevenText.val(localStorage.getItem("hour11"));
    hourTwelveText.val(localStorage.getItem("hour12"));
    hourThirteenText.val(localStorage.getItem("hour13"));
    hourFourteenText.val(localStorage.getItem("hour14"));
    hourFifteenText.val(localStorage.getItem("hour15"));
    hourSixteenText.val(localStorage.getItem("hour16"));
    hourSeventeenText.val(localStorage.getItem("hour17"));
};

init()



