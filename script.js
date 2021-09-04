function init () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    alert("submit")
  })

}

window.addEventListener("load", init);