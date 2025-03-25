const playlists = {
    sleep: [
        { url: 'https://www.bensound.com/bensound-music/bensound-relaxing.mp3', name: 'Relaxing Melody' },
        { url: 'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', name: 'Slow Motion' },
        { url: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3', name: 'Tenderness' },
        { url: 'https://www.bensound.com/bensound-music/bensound-softsoothing.mp3', name: 'Soft Soothing' }
    ],
    productivity: [
        { url: 'https://www.bensound.com/bensound-music/bensound-energy.mp3', name: 'Energy Track' },
        { url: 'https://www.bensound.com/bensound-music/bensound-motivation.mp3', name: 'Motivation Boost' },
        { url: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3', name: 'Happy Rock' },
        { url: 'https://www.bensound.com/bensound-music/bensound-actionable.mp3', name: 'Actionable' }
    ],
    random: [
        { url: 'https://www.bensound.com/bensound-music/bensound-cute.mp3', name: 'Cute Theme' },
        { url: 'https://www.bensound.com/bensound-music/bensound-summer.mp3', name: 'Summer Vibes' },
        { url: 'https://www.bensound.com/bensound-music/bensound-funday.mp3', name: 'Fun Day' },
        { url: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3', name: 'Buddy' }
    ],
    relax: [
        { url: 'https://www.bensound.com/bensound-music/bensound-india.mp3', name: 'Indian Calm' },
        { url: 'https://www.bensound.com/bensound-music/bensound-littlelight.mp3', name: 'Little Light' },
        { url: 'https://www.bensound.com/bensound-music/bensound-memories.mp3', name: 'Memories' },
        { url: 'https://www.bensound.com/bensound-music/bensound-newdawn.mp3', name: 'New Dawn' }
    ],
    'noise-blocker': [
        { url: 'https://www.bensound.com/bensound-music/bensound-pianomoment.mp3', name: 'Piano Moment' },
        { url: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3', name: 'Dreams Soundtrack' },
        { url: 'https://www.bensound.com/bensound-music/bensound-photoalbum.mp3', name: 'Photo Album' },
        { url: 'https://www.bensound.com/bensound-music/bensound-love.mp3', name: 'Love Melody' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const playlistButton = document.querySelector('.playlist-button');
    const playlistOptions = document.querySelector('.playlist-options');
    const audioPlayer = document.getElementById('audioPlayer');
    const currentTrackDisplay = document.querySelector('.current-track');
    const options = document.querySelectorAll('.option');

    // Toggle playlist options
    playlistButton.addEventListener('click', (event) => {
        event.stopPropagation();
        playlistOptions.classList.toggle('show');
    });

    // Play music when an option is clicked
    options.forEach(option => {
        option.addEventListener('click', (event) => {
            const playlistType = option.getAttribute('data-playlist');
            const currentPlaylist = playlists[playlistType];

            // Randomly select a song from the playlist
            const randomSong = currentPlaylist[Math.floor(Math.random() * currentPlaylist.length)];

            // Remove focused class from all options
            options.forEach(opt => opt.classList.remove('focused'));
            
            // Add focused class to clicked option
            option.classList.add('focused');

            // Play the selected song
            audioPlayer.src = randomSong.url;
            audioPlayer.play().catch(error => {
                console.error('Error playing audio:', error);
                currentTrackDisplay.textContent = 'Error playing track';
            });

            // Update current track display
            currentTrackDisplay.textContent = `Now Playing: ${randomSong.name}`;

            // Do NOT hide playlist options
        });
    });


    // Prevent playlist options from hiding when clicking inside them
    playlistOptions.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    console.log('Music from Bensound.com - Royalty Free Music');
});

// Add this CSS to your existing styles
const additionalStyles = `
<style>
.playlist-options {
    // display: none;
}

.playlist-options.show {
    display: flex;
}

.option {
    transition: all 0.3s ease;
}

.option.focused {
    background-color: #007bff;
    color:red
    color: white;
    transform: scale(1.05);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
`;
document.head.insertAdjacentHTML('beforeend', additionalStyles);

