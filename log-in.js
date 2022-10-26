const logInForm = document.querySelector("#log-in-form");
// const btn = document.querySelector("#btn-submit");

// btn.addEventListener("click", function () {
//   window.location.href = "/index.html";
// });
logInForm.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "/index.html";
});
