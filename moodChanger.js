const mood = document.querySelector("#mood");
const happyButton = document.querySelector("#happy");
const grossButton = document.querySelector("#gross");
const shookButton = document.querySelector("#shook");
const hungryButton = document.querySelector("#hungry");

happyButton.addEventListener("click", function (e) {
  store.dispatch({ type: "HAPPY" });
  const state = store.getState();
  mood.innerText = state.mood;
});

grossButton.addEventListener("click", function (e) {
  store.dispatch({ type: "GROSS" });
  const state = store.getState();
  mood.innerText = state.mood;
});
shookButton.addEventListener("click", function (e) {
  store.dispatch({ type: "SHOOK" });
  const state = store.getState();
  mood.innerText = state.mood;
});
hungryButton.addEventListener("click", function (e) {
  store.dispatch({ type: "HUNGRY" });
  const state = store.getState();
  mood.innerText = state.mood;
});
