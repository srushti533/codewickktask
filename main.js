const navBtn = document.querySelector("#icon");
const navLink = document.querySelector("#links-container");

navBtn.addEventListener("click", () => {
  navLink.classList.toggle("hide");
  console.log("btn-clicked");
});
