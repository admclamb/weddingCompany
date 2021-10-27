"strict mode";

// Contact Form
const add = document.querySelector("#add");
const nameEl = document.querySelector("#inputName");
const emailEl = document.querySelector("#inputEmail");
const phoneEl = document.querySelector("#inputPhone");
const questionEl = document.querySelector("#inputQuestion");

add.addEventListener("click", function () {
  alert("we been pressed");

  const name = nameEl.value;
  const email = emailEl.value;
  const phone = phoneEl.value;
  const question = questionEl.value;
});
