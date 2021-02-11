let listName = document.querySelectorAll(".listname");
let hoverList = document.querySelectorAll(".hoverlist");
let hoverListItems = document.querySelectorAll(".listItem");
let liA = document.querySelectorAll(".liA");
let liB = document.querySelectorAll(".liB");
let liC = document.querySelectorAll(".liC");
let liD = document.querySelectorAll(".liD");
let liE = document.querySelectorAll(".liE");

let ae = document.querySelector(".A");
let be = document.querySelector(".B");
let ce = document.querySelector(".C");
let de = document.querySelector(".D");
let ee = document.querySelector(".E");
// listName.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     if (item.innerText === "Mind") {
//       ae.style.display = "flex";
//       opac(liA);
//     } else if (item.innerText === "Body") {
//       be.style.display = "flex";
//       opac(liB);
//     } else if (item.innerText === "Art") {
//       ce.style.display = "flex";
//       opac(liC);
//     } else if (item.innerText === "About Me") {
//       de.style.display = "flex";
//       opac(liD);
//     } else if (item.innerText === "Head Shots") {
//       ee.style.display = "flex";
//       opac(liE);
//     }
//   });
// });
// listName.forEach((item) => {
//   item.addEventListener("mouseleave", () => {
//     if (item.innerText === "Mind") {
//       opac2(liA);
//     } else if (item.innerText === "Body") {
//       opac2(liB);
//     } else if (item.innerText === "Art") {
//       opac2(liC);
//     } else if (item.innerText === "About Me") {
//       opac2(liD);
//     } else if (item.innerText === "Head Shots") {
//       opac2(liE);
//     }
//   });
// });

// let opac = function (e) {
//   for (i = 0; i <= e.length; i++) {
//     e[i].style.transform = "translate(0)";
//     e[i].style.opacity = "1";
//     e[i].style.display = "block";
//   }
// };

// let opac2 = function (e) {
//   for (i = 0; i <= e.length; i++) {
//     e[i].style.transform = "translate(-100%)";
//     e[i].style.opacity = "0";
//   }
// };

let test = () => {
  hoverList.forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (item.innerText === "Mind") {
        hover(liA);
        item.addEventListener("mouseleave", () => {
          liA.forEach((ite) => {
            ite.style.transition = ".5s";
            ite.style.transform = "translate(-100%)";
            // ite.style.opacity = "0";
            setTimeout(() => {
              ite.style.display = "none";
            }, 500);
            ite.setTime;
          });
        });
      }
    });
  });
};
// } else if (item.innerText === "Body") {
//   hover(liB);
//   test2();
// } else if (item.innerText === "Art") {
//   hover(liC);
//   test2();
// } else if (item.innerText === "About Me") {
//   hover(liD);
//   test2();
// } else if (item.innerText === "Head Shots") {
//   hover(liE);
//   test2();

// let test2 = () => {
//   hoverList.forEach((item) => {
//     item.addEventListener("mouseleave", () => {
//       if ((item.innerText.includes = "Mind")) {
//         alert("check");
//       } else if ((item.innerText.includes = "Body")) {
//         alert("check check");
//       } else if (item.innerText === "Art") {
//         over(liC);
//       } else if (item.innerText === "About Me") {
//         over(liD);
//       } else if (item.innerText === "Head Shots") {
//         over(liE);
//       }
//     });
//   });
// };
// let test2 = item.addEventListener("mouseleave", () => {
//   if ((item.innerText.includes = "Mind")) {
//     alert("check");
//   } else if ((item.innerText.includes = "Body")) {
//     alert("check check");
//   } else if (item.innerText === "Art") {
//     over(liC);
//   } else if (item.innerText === "About Me") {
//     over(liD);
//   } else if (item.innerText === "Head Shots") {
//     over(liE);
//   }
// });
// test2();
test();

// let hovertime = hoverListItems.forEach((item) => {
//   item.addEventListener("animationend", () => {
//     if ((item.classList.includes = "opa2")) {
//       subtract;
//     } else {
//       add;
//     }
//   });
// });
// let add = hoverListItems.forEach((item) => {
//   item.classList.add("opa");
//   item.classList.remove("opa2");
// });
// let subtract = hoverListItems.forEach((item) => {
//   item.classList.remove("opa");
//   item.classList.add("opa2");
// });

let hover = (e) => {
  e.forEach((item) => {
    item.style.display = "block";
    item.style.transition = ".5s";
    setTimeout(() => {
      item.style.transform = "translate(0)";
    }, 500);
  });
};
// let over = (e) => {
//   e.forEach((item) => {
//     item.classList.remove("opa");
//     item.classList.add("opa2");
//     item.addEventListener("animationend", () => {
//       // item.style.display = "none";
//     });
//   });
// };
