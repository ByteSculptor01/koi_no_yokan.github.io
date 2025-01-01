// JavaScript to reveal the proposal message
document.getElementById('showProposalBtn').addEventListener('click', function() {
    // Hide the button and message
    document.getElementById('proposal').classList.add('hidden');
    // Reveal the big question
    document.getElementById('big-question').classList.remove('hidden');
});

// Handle "Yes" button click
document.getElementById('yesBtn').addEventListener('click', function() {
    // Show the red heart popup
    document.getElementById('heartPopup').classList.add('show');
    setTimeout(function() {
        alert("Yay! I’m so happy you said yes! 💖");
        document.getElementById('heartPopup').classList.remove('show'); // Hide the hearts after a moment
    }, 2000); // Hearts will stay for 2 seconds before the alert appears
});

// Handle "No" button click
document.getElementById('noBtn').addEventListener('click', function() {
    alert("That’s okay, we can always be happy together in our own way. 💖");
});
