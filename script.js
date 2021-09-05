function init () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    alert("baba booey");
  })

}

window.addEventListener("load", init);