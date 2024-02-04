document.getElementById("calculateButton").addEventListener("click", function() {
    
    var totalClasses = parseInt(document.getElementById("totalClasses").value);
    var desiredPercentage = parseInt(document.getElementById("desiredPercentage").value);

   
    if (isNaN(totalClasses) || isNaN(desiredPercentage)) {
        alert("Please enter valid numbers.");
        return;
    }

    
    var requiredPercentage = (desiredPercentage * totalClasses) / 100;

    
    if (requiredPercentage > 100) {
        document.getElementById("resultDisplay").innerHTML = "You can't achieve the desired percentage by bunking.😞";
    } else {
        
        var bunksAvailable = Math.ceil(totalClasses - requiredPercentage);
        
        document.getElementById("resultDisplay").innerHTML = "🎉🎉🎉You can bunk " + bunksAvailable + " classes to maintain " + desiredPercentage + "%!!!🎉🎉🎉";
    }

    
    document.querySelector(".calculatorContainer").style.display = "none";

    document.getElementById("resultSection").style.display = "block";
});
