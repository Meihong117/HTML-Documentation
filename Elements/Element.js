//---### tab
function elements(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

//------canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
//------dialog
// var updateButton = document.getElementById("updateDetails");
// var favDialog = document.getElementById("favDialog");
// var outputBox = document.querySelector("output");
// var selectEl = document.querySelector("select");
// var confirmBtn = document.getElementById("confirmBtn");

// "Update details" button opens the <dialog> modally
// updateButton.addEventListener("click", function onOpen() {
//   if (typeof favDialog.showModal === "function") {
//     favDialog.showModal();
//   } else {
//     alert("The <dialog> API is not supported by this browser");
//   }
// });
// // "Favorite animal" input sets the value of the submit button
// selectEl.addEventListener("change", function onSelect(e) {
//   confirmBtn.value = selectEl.value;
// });
// // "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
// favDialog.addEventListener("close", function onClose() {
//   outputBox.value =
//     favDialog.returnValue + " button clicked - " + new Date().toString();
// });
