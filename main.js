let preloader = document.getElementById("preload");
window.onload = function () {
  preloader.style.display = "block";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 4000);
};
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

let newpost = document.getElementById("newpost");
let create = document.querySelector(".create");
let posts = document.querySelector(".posts");
let box = document.querySelector(".box");

create.addEventListener("click", function () {
  let posting = `<div class="box mb-2 m-auto p-2">
  <div class="head d-flex align-items-center">
    <img class="ms-2 rounded-circle" src="imgs/story1.jpeg" alt="s">
    <div class="content ms-2">
      <span>${newpost.value}</span>
      <small class="d-block text-black-50">ismailia 10min ago</small>
    </div>
  </div>
  <div class="image ">
    <img class="mt-2 mb-2 rounded" src="imgs/post1.jpg" alt="s">
  </div>
  <div class="footer">
    <div class="iocns mb-2 d-flex align-items-center justify-content-around">
      <i class="fa-solid fa-heart icon1"></i>
      <i class="fa-solid fa-comment-dots icon2"></i>
      <i class="fa-solid fa-share-nodes icon3"></i>
      <i class="fa-solid fa-bookmark d-flex justify-content-end icon4"></i>
    </div>
    <div class="kalam d-flex align-items-center">
      <img src="imgs/story1.jpeg " alt="">
      <img src="imgs/story2.jpeg " alt="">
      <img src="imgs/story3.jpeg " alt="">
      <span >liked by <small class="fw-bold">${newpost.value}</small> and 2.444 folowers <br><small class="fw-bold">lesa rayan</small> Lorem ipsum dolor.</span>
    </div>
  </div>
  </div>`;
  posts.innerHTML += posting;
  boxmessages.style.marginTop += `-385px`;
});
