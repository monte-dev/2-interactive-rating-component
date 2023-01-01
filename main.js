// select all elements with a class .btn in the HTML, these are stored in a NodeList object ~ similar to array
const ratingBtn = document.querySelectorAll(".btn");
// Initialize previousBtn as undefined this will be used to track previously clicked button
let previousBtn;
// using forEach loop to go through items in ratingBtn NodeList(array), takes callback function as an argument, callback function uses argument btn to select item from NodeList
ratingBtn.forEach((btn) => {
  // this line adds a click event listener to current .btn
  btn.addEventListener("click", () => {
    // this line checks if previousBtn is defined, and if so removes a class .clicked from it
    if (previousBtn) {
      previousBtn.classList.remove("clicked");
    }
    // This line adds .clicked class to current .btn  and assigns it to previous button to track the state for next iteration of the loop
    btn.classList.add("clicked");
    previousBtn = btn;
// assign a value of clicked btn to ratingValue variable
    let ratingValue = btn.innerHTML;
    const submitBtn = document.querySelector("#submit");

    submitBtn.addEventListener("click", () => {
      const thankYouState = document.querySelector(".thank-you");
      const ratingState = document.querySelector(".rating");
      const ratingResult = document.querySelector(".rating-result");
    //   hide and show different states
      ratingState.style.display = "none";
      thankYouState.style.display = "flex";
// fill in the text of paragraph with users selected rating using template literal
      ratingResult.innerHTML = `You selected ${ratingValue} out of 5`;
    });
  });
});
