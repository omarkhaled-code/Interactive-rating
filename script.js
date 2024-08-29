let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
  showRatingScreen();
  displayRatingValue(getRatingValue);
});

const getRatingValue = () => {
  const radios = document.getElementsByName("rating");
  let radioSelectValue = 0;
  radios.forEach((radio) => {
    radio.checked ? (radioSelectValue = radio.value) : radio;
  });
  return radioSelectValue;
};

const showRatingScreen = () => {
  let thankYouContainer = document.querySelector(".thank-you");
  document.querySelector(".rating").style.display = "none";
  thankYouContainer.style.display = "flex";
  thankYouContainer.classList.add("active");
};

const displayRatingValue = () => {
  const RatingValueContainer = document.querySelector(".selected");
  RatingValueContainer.innerHTML = `You selected ${getRatingValue()} out of 5`;
};
