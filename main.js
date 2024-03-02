// active
function SendEmail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("Message").value,
  };

  emailjs
    .send("service_jk6a34f", "template_t0x3pj9", parms)
    .then(alert("Email Sent!!"));
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// mobile menu

var sideMenu = document.getElementById("sidemenu");

function openmenu() {
  sideMenu.style.right = "0";
}
function closemenu() {
  sideMenu.style.right = "-200px";
}

//using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  // questions.log(question);
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
