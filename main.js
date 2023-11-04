let notificationspopup = document.querySelector(".noti");
let iconNotifications = document.querySelector(".notiicon");

iconNotifications.onclick = function () {
  notificationspopup.classList.toggle("block");
};

let theme = document.querySelector(".themes");
let overlay = document.querySelector(".overlay");
let popuptheme = document.querySelector(".theme");
theme.addEventListener("click", function () {
  overlay.classList.add("block");
  popuptheme.classList.add("block");
});
function del() {
  overlay.classList.remove("block");
  popuptheme.classList.remove("block");
}

let ball = document.querySelectorAll(".ball");
ball.forEach((item) => {
  item.addEventListener("click", function () {
    item.parentElement
      .getElementsByClassName("active")[0]
      .classList.remove("active");
    item.classList.add("active");
    document.documentElement.style.setProperty(
      "--main-color",
      item.dataset.color
    );
    localStorage.setItem("color", item.dataset.color);
  });
});
if (localStorage.length > 0) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
  // remove active class from all again to equal with item which in local storage
  document.querySelectorAll(".ball").forEach((eo) => {
    eo.classList.remove("active");
    // put active in item in local storage
    if (eo.dataset.color === localStorage.getItem("color")) {
      eo.classList.add("active");
    }
  });
}
let body = document.querySelector("body");
let header = document.querySelector(".header");
let profilebox = document.querySelector(".profile-box");
let sidebox = document.querySelector(".side-box");
let dark = document.querySelector("#dark");
let light = document.querySelector("#light");
let logo = document.querySelector(".logo");
dark.onclick = function () {
  body.classList.add("dark");
  header.classList.add("dark");
  logo.style.color = "white";
};

light.onclick = function () {
  body.classList.remove("dark");
  header.classList.remove("dark");
  logo.style.color = "black";
};
let up = document.getElementById("up");
window.addEventListener("scroll", function () {
  if (scrollY >= 500) {
    up.classList.add("block");
  } else {
    up.classList.remove("block");
  }
});
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

let boxmessages = document.querySelector(".box-messages");
let messageicon = document.querySelector(".messageicon");
messageicon.onclick = function () {
  boxmessages.style.boxShadow = "0 0 1rem #777";
  setTimeout(() => {
    boxmessages.style.boxShadow = "none";
  }, 2000);
};
