const menuHamburger = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const wordDiv = document.querySelector(".word");
const btnHeaderDiv = document.querySelector(".btnHeader");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
    if (navLinks.classList.contains('mobile-menu')) {
        wordDiv.style.display = 'none';
        btnHeaderDiv.style.display = 'none';
    } else {
        setTimeout(() => {
        wordDiv.style.display = 'block';
        btnHeaderDiv.style.display = 'block';
        }, 250);
    }
});

const songsButtons = document.querySelector(".myMusicBtn");
const selectionedPlaylistButton = document.querySelector(".selectionedPlaylistsBtn");
const songsDiv = document.querySelector(".mysongs");
const playlistsDiv = document.querySelector(".selectionedPlaylists");
const transitionDuration = 200; 

songsButtons.addEventListener('click', () => {
    songsButtons.classList.add('selected');
    selectionedPlaylistButton.classList.remove('selected');
    songsDiv.style.display = 'block';
    playlistsDiv.style.display = 'none';
    songsDiv.style.opacity = '0'; 
    songsDiv.style.transition = `opacity ${transitionDuration}ms ease-in-out`; 
    setTimeout(() => {
        songsDiv.style.opacity = '1'; 
    }, transitionDuration);
});

selectionedPlaylistButton.addEventListener('click', () => {
    selectionedPlaylistButton.classList.add('selected');
    songsButtons.classList.remove('selected');
    songsDiv.style.display = 'none';
    playlistsDiv.style.display = 'block';
    playlistsDiv.style.opacity = '0';
    playlistsDiv.style.transition = `opacity ${transitionDuration}ms ease-in-out`;
    setTimeout(() => {
        playlistsDiv.style.opacity = '1'; 
    }, transitionDuration);
});
