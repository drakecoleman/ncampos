/*===================================================  
             Top Lists Animation
===================================================== */
let listName = document.querySelectorAll(".listname");
let hoverList = document.querySelectorAll(".hoverlist");
let hoverListItems = document.querySelectorAll(".listItem");
let liA = document.querySelectorAll(".liA");
let liB = document.querySelectorAll(".liB");
let liC = document.querySelectorAll(".liC");
let liD = document.querySelectorAll(".liD");
let liE = document.querySelectorAll(".liE");

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
/*===================================================  
             HeadShot Carosel
===================================================== */
let arrow = document.querySelectorAll(".arrow");
let yeet = document.querySelectorAll(".yeet");
let allSlides = document.querySelectorAll(".slide");
let aye = 0;
let currentSlide = allSlides[aye];
let headX = document.querySelector(".headshotX");
let headshotTab = document.querySelector(".headerHead");
let headShots = document.querySelector(".headShotDiv");

headshotTab.addEventListener("click", () => {
  headShots.style.transform = "translate(0)";
});

headX.addEventListener("click", () => {
  headShots.style.transform = "translate(-100%)";
});

arrow.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("fa-arrow-circle-right")) {
      right();
    } else if (item.classList.contains("fa-arrow-circle-left")) {
      left();
    }
  });
});

let right = () => {
  if (aye < 4) {
    allSlides[aye].style.transform = "translate(300%)";
    aye++;
    allSlides[aye].style.transform = "translate(0)";
    return aye;
  } else {
    console.log("end of carosel");
  }
};
let left = () => {
  if (aye > 0) {
    allSlides[aye].style.transform = "translate(-200%)";
    aye--;
    allSlides[aye].style.transform = "translate(0)";
  } else {
    console.log("end of carosel");
  }
};
