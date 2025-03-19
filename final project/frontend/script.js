// Sound library data with real URLs
const soundsData = [
    { 
        id: 'rain', 
        name: 'Rain', 
        icon: '🌧️',  
    },
    { 
        id: 'thunder', 
        name: 'Thunder', 
        icon: '⚡', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/thunder.mp3' 
    },
    { 
        id: 'forest', 
        name: 'Forest', 
        icon: '🌲', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/forest.mp3' 
    },
    { 
        id: 'waves', 
        name: 'Ocean Waves', 
        icon: '🌊', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/waves.mp3' 
    },
    { 
        id: 'fire', 
        name: 'Fireplace', 
        icon: '🔥', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/fire.mp3' 
    },
    { 
        id: 'birds', 
        name: 'Birds', 
        icon: '🐦', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/birds.mp3'
    },
    { 
        id: 'wind', 
        name: 'Wind', 
        icon: '💨', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/wind.mp3' 
    },
    { 
        id: 'creek', 
        name: 'Creek', 
        icon: '💦', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/creek.mp3' 
    },
    { 
        id: 'cafe', 
        name: 'Cafe', 
        icon: '☕', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/cafe.mp3' 
    },
    { 
        id: 'whitenoise', 
        name: 'White Noise', 
        icon: '📻', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/whitenoise.mp3' 
    },
    { 
        id: 'night', 
        name: 'Night', 
        icon: '🌙', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/night.mp3' 
    },
    { 
        id: 'underwater', 
        name: 'Underwater', 
        icon: '🐠', 
        audioSrc: 'https://relaxing-sounds.s3.amazonaws.com/underwater.mp3' 
    }
];

// Audio context and nodes storage
let audioContext;
const audioElements = {};
const gainNodes = {};
let activeAudios = {};
let isInitialized = false;

// DOM elements
const soundLibrary = document.getElementById('sound-library');
const playAllBtn = document.getElementById('play-all');
const pauseAllBtn = document.getElementById('pause-all');
const saveComboBtn = document.getElementById('save-combo');
const resetAllBtn = document.getElementById('reset-all');
const saveModal = document.getElementById('save-modal');
const closeModal = document.getElementById('close-modal');
const confirmSaveBtn = document.getElementById('confirm-save');
const combinationNameInput = document.getElementById('combination-name');
const combinationList = document.getElementById('combination-list');

// Initialize the app
function initApp() {
    // Create sound cards
    createSoundCards();
    
    // Load saved combinations from localStorage
    loadSavedCombinations();
    
    // Event listeners
    playAllBtn.addEventListener('click', playAll);
    pauseAllBtn.addEventListener('click', pauseAll);
    saveComboBtn.addEventListener('click', openSaveModal);
    resetAllBtn.addEventListener('click', resetAll);
    closeModal.addEventListener('click', closeModalFunc);
    confirmSaveBtn.addEventListener('click', saveCombination);
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === saveModal) {
            closeModalFunc();
        }
    });
}

// Create sound cards
function createSoundCards() {
    soundsData.forEach(sound => {
        const cardElement = document.createElement('div');
        cardElement.className = 'sound-card';
        cardElement.setAttribute('data-sound-id', sound.id);
        
        cardElement.innerHTML = `
            <div class="sound-icon">${sound.icon}</div>
            <div class="sound-name">${sound.name}</div>
            <div class="volume-control">
                <input type="range" min="0" max="100" value="70" class="volume-slider" data-sound-id="${sound.id}">
            </div>
        `;
        
        // Create audio element
        const audio = new Audio();
        audio.src = sound.audioSrc;
        audio.loop = true;
        audio.preload = 'auto';
        audioElements[sound.id] = audio;
        
        // Add click event to toggle play/pause
        cardElement.addEventListener('click', (e) => {
            // Don't trigger if clicking on the volume slider
            if (e.target.classList.contains('volume-slider')) {
                return;
            }
            
            toggleSound(sound.id, cardElement);
        });
        
        soundLibrary.appendChild(cardElement);
        
        // Set up volume control
        const volumeSlider = cardElement.querySelector('.volume-slider');
        volumeSlider.addEventListener('input', (e) => {
            const volume = e.target.value / 100;
            setVolume(sound.id, volume);
        });
    });
}

// Initialize Web Audio API
function initializeAudio() {
    if (isInitialized) return;
    
    // Create audio context
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Set up audio nodes for each sound
    Object.keys(audioElements).forEach(id => {
        const source = audioContext.createMediaElementSource(audioElements[id]);
        const gainNode = audioContext.createGain();
        
        // Connect nodes
        source.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Store gain node for volume control
        gainNodes[id] = gainNode;
        
        // Set initial volume
        gainNode.gain.value = 0.7;
    });
    
    isInitialized = true;
}

// Toggle sound play/pause
function toggleSound(id, cardElement) {
    try {
        // Initialize audio context if not already done
        if (!isInitialized) {
            initializeAudio();
        }
        
        const audio = audioElements[id];
        
        if (audio.paused) {
            audio.play().then(() => {
                cardElement.classList.add('active');
                activeAudios[id] = true;
            }).catch(err => {
                console.error('Error playing audio:', err);
            });
        } else {
            audio.pause();
            cardElement.classList.remove('active');
            delete activeAudios[id];
        }
    } catch (err) {
        console.error('Error toggling sound:', err);
    }
}

// Set volume for a sound
function setVolume(id, volume) {
    if (!isInitialized) {
        // If audio not initialized yet, store the volume to apply later
        audioElements[id].volume = volume;
        return;
    }
    
    if (gainNodes[id]) {
        gainNodes[id].gain.value = volume;
    }
}

// Play all active sounds
function playAll() {
    if (!isInitialized) {
        initializeAudio();
    }
    
    soundsData.forEach(sound => {
        const cardElement = document.querySelector(`.sound-card[data-sound-id="${sound.id}"]`);
        const audio = audioElements[sound.id];
        
        if (cardElement.classList.contains('active') || activeAudios[sound.id]) {
            audio.play().catch(err => console.error('Error playing audio:', err));
        }
    });
}

// Pause all sounds
function pauseAll() {
    soundsData.forEach(sound => {
        const audio = audioElements[sound.id];
        audio.pause();
    });
}

// Reset all sounds
function resetAll() {
    soundsData.forEach(sound => {
        const cardElement = document.querySelector(`.sound-card[data-sound-id="${sound.id}"]`);
        const audio = audioElements[sound.id];
        const volumeSlider = document.querySelector(`.volume-slider[data-sound-id="${sound.id}"]`);
        
        // Reset audio
        audio.pause();
        audio.currentTime = 0;
        
        // Reset UI
        cardElement.classList.remove('active');
        volumeSlider.value = 70;
        
        // Reset volume
        setVolume(sound.id, 0.7);
        
        // Clean up active audios
        delete activeAudios[sound.id];
    });
}

// Open save modal
function openSaveModal() {
    saveModal.style.display = 'flex';
    combinationNameInput.focus();
}

// Close modal
function closeModalFunc() {
    saveModal.style.display = 'none';
    combinationNameInput.value = '';
}

// Save current combination
function saveCombination() {
    const name = combinationNameInput.value.trim();
    
    if (!name) {
        alert('Please enter a name for your combination.');
        return;
    }
    
    // Get current state of all sounds
    const combination = {};
    
    soundsData.forEach(sound => {
        const volumeSlider = document.querySelector(`.volume-slider[data-sound-id="${sound.id}"]`);
        const isActive = document.querySelector(`.sound-card[data-sound-id="${sound.id}"]`).classList.contains('active');
        
        combination[sound.id] = {
            active: isActive || activeAudios[sound.id] || false,
            volume: parseInt(volumeSlider.value)
        };
    });
    
    // Save to localStorage
    let savedCombinations = JSON.parse(localStorage.getItem('soundCombinations')) || {};
    savedCombinations[name] = combination;
    localStorage.setItem('soundCombinations', JSON.stringify(savedCombinations));
    
    // Update UI
    closeModalFunc();
    loadSavedCombinations();
}

// Load saved combinations from localStorage
function loadSavedCombinations() {
    const savedCombinations = JSON.parse(localStorage.getItem('soundCombinations')) || {};
    combinationList.innerHTML = '';
    
    Object.keys(savedCombinations).forEach(name => {
        const combinationItem = document.createElement('div');
        combinationItem.className = 'combination-item';
        combinationItem.innerText = name;
        
        // Add click event to load combination
        combinationItem.addEventListener('click', () => {
            loadCombination(name, savedCombinations[name]);
        });
        
        // Add delete button
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.style.float = 'right';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCombination(name);
        });
        
        combinationItem.appendChild(deleteBtn);
        combinationList.appendChild(combinationItem);
    });
}

// Load a saved combination
function loadCombination(name, combination) {
    // Reset all sounds first
    resetAll();
    
    // Initialize audio if needed
    if (!isInitialized) {
        initializeAudio();
    }
    
    // Apply the saved combination
    Object.keys(combination).forEach(soundId => {
        const soundData = combination[soundId];
        const cardElement = document.querySelector(`.sound-card[data-sound-id="${soundId}"]`);
        const volumeSlider = document.querySelector(`.volume-slider[data-sound-id="${soundId}"]`);
        
        // Set volume
        volumeSlider.value = soundData.volume;
        setVolume(soundId, soundData.volume / 100);
        
        // Play if active
        if (soundData.active) {
            const audio = audioElements[soundId];
            audio.play().then(() => {
                cardElement.classList.add('active');
                activeAudios[soundId] = true;
            }).catch(err => console.error('Error playing audio:', err));
        }
    });
}

// Delete a saved combination
function deleteCombination(name) {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
        let savedCombinations = JSON.parse(localStorage.getItem('soundCombinations')) || {};
        delete savedCombinations[name];
        localStorage.setItem('soundCombinations', JSON.stringify(savedCombinations));
        loadSavedCombinations();
    }
}

// Add admin functionality to add new sound categories
function addNewSoundCategory(id, name, icon, audioSrc) {
    // Only allow if user is admin
    if (!isAdmin()) return;
    
    // Add to soundsData
    soundsData.push({ id, name, icon, audioSrc });
    
    // Clear and recreate sound cards
    soundLibrary.innerHTML = '';
    createSoundCards();
    
    // Reinitialize audio
    isInitialized = false;
    initializeAudio();
}

// Check if user is admin
function isAdmin() {
    // This would need to be implemented based on your authentication system
    // For now, return false
    return false;
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);