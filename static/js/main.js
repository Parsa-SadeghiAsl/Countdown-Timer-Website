// Global variable for the countdown interval
let countdownInterval;

function updateCountdown() {
    const targetDate = new Date(targetDateTime).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    console.log(distance);
    if (distance <= 0) {
        clearInterval(countdownInterval);
        handleCountdownComplete();
    }
}

function handleCountdownComplete() {
    // Create a centered container for the celebration content
    const celebrationContainer = document.createElement("div");
    celebrationContainer.className = "celebration-container";
    celebrationContainer.innerHTML = `
        <h1 class="celebration-title">Time's up!</h1>
        <div class="video-container">
            <video id="celebrationVideo" controls>
                <source src="static/celebration.mp4" type="video/mp4">
                Your browser does not support the video element.
            </video>
        </div>
    `;
    
    // Clear the main container
    document.querySelector(".container").innerHTML = "";
    
    // Remove map container
    const mapContainer = document.querySelector(".map-container");
    if (mapContainer) {
        mapContainer.remove();
    }

    // Remove audio controls
    const audioControls = document.querySelector(".audio-controls");
    if (audioControls) {
        audioControls.remove();
    }

    // Stop and remove background music
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.remove();
    }

    // Add the celebration container to the main container
    document.querySelector(".container").appendChild(celebrationContainer);

    // Play the video
    const video = document.getElementById("celebrationVideo");
    video.play().catch(function(error) {
        console.log("Video play failed:", error);
    });
}

// Initialize audio functionality
function initAudio() {
    const audio = document.getElementById('bgMusic');
    
    // Try to play audio when user interacts with the page
    document.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log("Audio play failed:", error);
        });
    }, { once: true });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start the countdown
    countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // Initialize audio
    initAudio();
}); 