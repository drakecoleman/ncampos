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

let test = () => {
  hoverList.forEach((item) => {
    item.addEventListener("mouseover", () => {
      if (item.innerText === "Mind") {
        hover(liA);
        trans(liA);
        item.addEventListener("mouseleave", () => {
          liA.forEach((ite) => {
            ite.style.transition = ".4s";
            ite.style.transform = "translate(-100%)";
            ite.style.opacity = "0";
            trans(liA);
            setTimeout(() => {
              ite.style.display = "none";
            }, 400);
            ite.setTime;
          });
        });
      } else if (item.innerText === "Body") {
        hover(liB);
        trans(liB);
        item.addEventListener("mouseleave", () => {
          liB.forEach((ite) => {
            ite.style.transition = ".4s";
            ite.style.transform = "translate(-100%)";
            ite.style.opacity = "0";
            trans(liB);
            setTimeout(() => {
              ite.style.display = "none";
            }, 400);
            ite.setTime;
          });
        });
      } else if (item.innerText === "Art") {
        hover(liC);
        trans(liC);
        item.addEventListener("mouseleave", () => {
          liC.forEach((ite) => {
            ite.style.transition = ".4s";
            ite.style.transform = "translate(-100%)";
            ite.style.opacity = "0";
            trans(liC);
            setTimeout(() => {
              ite.style.display = "none";
            }, 400);
            ite.setTime;
          });
        });
      } else if (item.innerText === "About Me") {
        hover(liD);
        trans(liD);
        item.addEventListener("mouseleave", () => {
          liD.forEach((ite) => {
            ite.style.transition = ".4s";
            ite.style.transform = "translate(-100%)";
            ite.style.opacity = "0";
            trans(liD);
            setTimeout(() => {
              ite.style.display = "none";
            }, 400);
            ite.setTime;
          });
        });
      } else if (item.innerText === "Head Shots") {
        hover(liE);
        trans(liE);
        item.addEventListener("mouseleave", () => {
          liE.forEach((ite) => {
            ite.style.transition = ".4s";
            ite.style.transform = "translate(-100%)";
            ite.style.opacity = "0";
            trans(liE);
            setTimeout(() => {
              ite.style.display = "none";
            }, 400);
            ite.setTime;
          });
        });
      }
    });
  });
};

test();

let hover = (e) => {
  e.forEach((item) => {
    item.style.opacity = "1";
    item.style.display = "block";
    item.style.transition = ".5s";
    setTimeout(() => {
      item.style.transform = "translate(0)";
    }, 50);
  });
};
let trans = (e) => {
  e.forEach((item) => {
    for (i = 0; i <= e.length; i++) {
      if (i === 0) {
        // e[i].style.transitionDelay = ".1s";
        // console.log(e[i].style.transitionDelay);
      }
      if (i === 1) {
        e[i].style.transitionDelay = " .1s";
      }
      if (i === 2) {
        e[i].style.transitionDelay = ".15s";
      }
      if (i === 3) {
        e[i].style.transitionDelay = ".2s";
      }
      if (i === 4) {
        e[i].style.transitionDelay = ".25s";
      }
    }
  });
};
