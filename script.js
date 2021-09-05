function init () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    let testName = document.querySelector("input[name=testName]");
    let testDate = document.querySelector("input[name=testDate]");
    let rocketType = document.querySelector("input[name=rocketType]");

    let boosterCount = document.querySelector("input[name=boosterCount]");
    let windRating = document.querySelector("input[name=windRating]");
    let productionServers = document.querySelector("input[name=productionServers]");
    
    console.log(typeof rocketType.value)
    event.preventDefault(); 
    let submissionValidation = [testName.value, testDate.value, rocketType.value, boosterCount.value, windRating.value, productionServers.value];
    console.log(submissionValidation)
    exit()
    
    let isEmpty = false;
    
    alert("Fill in the blanks muthafucka");
    
    
    
    
  })

}

window.addEventListener("load", init);