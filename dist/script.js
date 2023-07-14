document.getElementById("input-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
  
    const playerName = document.getElementById("name-input").value;
    if (playerName.trim() !== "") {
      // Redirect to the main game page or perform any other necessary actions
      console.log("Player name:", playerName);
    }
});

function submitForm() {
    const playerName = document.getElementById("name-input").value;
    
    // Store the player name in localStorage (or you can use other methods like cookies, session storage, etc.)
    localStorage.setItem("playerName", playerName);
    
    // Redirect to the main page
    window.location.href = "quiz.html";
}
  