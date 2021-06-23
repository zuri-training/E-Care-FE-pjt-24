// for caret dropDown
const dropDown = document.querySelector(".drop-down-menu");
const ddContent = document.querySelector(".dd-content");
dropDown.addEventListener("click", function () {
  ddContent.classList.toggle("active");
})

  // for sidebar
const myPatients = document.querySelector(".my-patients");
const discharged = document.querySelector(".Discharged");
myPatients.addEventListener("click", function () {
  discharged.classList.toggle("active");
})
  
// for greeting
const greetings = document.querySelector("#greetings")
const day = new Date();
const hr = day.getHours();
if (hr >= 0 && hr < 12) {
  document.write("Good Morning!");
} else if (hr == 12) {
  document.write("Good Noon!");
} else if (hr >= 12 && hr <= 17) {
  document.write("Good Afternoon!")
} else {
  document.write("Good Evening!")
}

// // body-statistics
//   const bodyStatistics = document.querySelector(".body-statistics"),
//   const statisticsTitle = document.querySelector(".statistics-title");
//   statisticsTitle.addEventListener("click",function(){ bodyStatistics.classList.toggle("active");
//   })