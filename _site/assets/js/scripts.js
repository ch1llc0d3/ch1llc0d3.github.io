const hoverAudio = document.getElementById('hover-audio');

function playAudio() {
    hoverAudio.currentTime = 0; // Reset the audio to the start
    hoverAudio.play();
}

// Add hover effect to the image
const profileImage = document.getElementById('profile-image');
profileImage.addEventListener('mouseenter', playAudio);

// Add hover effect to all links
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', playAudio);
});
