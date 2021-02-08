let play = document.getElementById("play");
let stop = document.getElementById("stop");
let chill = new Audio("public/2019-06-07_-_Chill_Gaming_-_David_Fesliyan.mp3");
play.addEventListener("click", function () {
  chill.play();
  play.style.display = "none";
  stop.style.display = "block";
});
stop.addEventListener("click", function () {
  chill.pause();
  play.style.display = "block";
  stop.style.display = "none";
});

// // set up text to print, each item in array is new line
// var aText = new Array("do you want to be at peace?");
// var iSpeed = 100; // time delay of print out
// var iIndex = 0; // start printing array at this posision
// var iArrLength = aText[0].length; // the length of the text array
// var iScrollAt = 2; // start scrolling up at this many lines
// let destination1 = document.getElementById("typedtext");
// let byebye = () => {
//   destination1.classList.add("byebye");
// };

// var iTextPos = 0; // initialise text position
// var sContents = ""; // initialise contents variable
// var iRow; // initialise current row

// function typewriter() {
//   sContents = " ";
//   iRow = Math.max(0, iIndex - iScrollAt);

//   while (iRow < iIndex) {
//     sContents += aText[iRow++];
//   }
//   destination1.innerHTML =
//     sContents + aText[iIndex].substring(0, iTextPos) + "_";
//   if (iTextPos++ == iArrLength) {
//     iTextPos = 0;
//     iIndex++;
//     setTimeout(byebye, 4000);
//     if (iIndex != aText.length) {
//       iArrLength = aText[iIndex].length;
//       setTimeout("typewriter()", 500);
//     }
//   } else {
//     setTimeout("typewriter()", iSpeed);
//   }
// }
// // set up text to print, each item in array is new line
// var aText2 = new Array("How ");
// var iSpeed2 = 100; // time delay of print out
// var iIndex2 = 0; // start printing array at this posision
// var iArrLength2 = aText2[0].length; // the length of the text array
// var iScrollAt2 = 20; // start scrolling up at this many lines

// var iTextPos2 = 0; // initialise text position
// var sContents2 = ""; // initialise contents variable
// var iRow2; // initialise current row
// let destination = document.getElementById("typedtext2");

// function typewriter2() {
//   setTimeout(typewriter2, 5000);
//   sContents2 = " ";
//   iRow2 = Math.max(0, iIndex2 - iScrollAt2);

//   while (iRow2 < iIndex2) {
//     sContents2 += aText2[iRow2++] + "<br />";
//   }
//   destination.innerHTML =
//     sContents2 + aText2[iIndex2].substring(0, iTextPos2) + "_";
//   if (iTextPos2++ == iArrLength2) {
//     iTextPos2 = 0;
//     iIndex2++;
//     if (iIndex2 != aText2.length) {
//       iArrLength2 = aText2[iIndex2].length;
//       setTimeout("typewriter2()", 100);
//     }
//   } else {
//     setTimeout("typewriter2()", 500);
//   }
// }

// typewriter();
// setTimeout(function () {
//   typewriter2();
// }, 4000);
// destination.addEventListener(
//   "animationend",
//   () => (target.style.opacity = "0")
// );
// // If you want to remove it from the page after the fadeout
// target.addEventListener("transitionend", () => target.remove());
