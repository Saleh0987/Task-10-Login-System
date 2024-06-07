
const signInOverelay = document.getElementById("signInOverelay");
const signUpOverelay = document.getElementById("signUpOverelay");
const container = document.getElementById("container");


signUpOverelay.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});


signInOverelay.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});