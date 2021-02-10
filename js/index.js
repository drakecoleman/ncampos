let listName = document.querySelectorAll(".listname");
let hoverList = document.querySelectorAll(".hoverlist");
let hoverListItems = document.querySelectorAll(".listItem");
let ae = document.querySelector(".A");
let be = document.querySelector(".B");
let ce = document.querySelector(".C");
let de = document.querySelector(".D");
let ee = document.querySelector(".E");
listName.forEach((item) => {
  item.addEventListener("mouseover", () => {
    if (item.innerText === "Mind") {
      ae.style.display = "block";
      opac();
    } else if (item.innerText === "Body") {
      be.style.display = "block";
      console.log(hoverListItems);
    }
  });
});

// hoverList.style.display = "block";
// hoverListItems.style.opacity = "1";
let opac = function () {
  hoverListItems.forEach((item) => {
    item.classList.add("opac");
  });
};
let opac2 = function () {
  hoverListItems.forEach((item) => {
    item.classList.delete("opac");
  });
};
