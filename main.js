const ratingBtn = document.querySelectorAll(".btn");

ratingBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
  });
});
