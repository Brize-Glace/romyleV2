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
let words = ['Hi I\'m Romyle', 'I\'m French (Paris)', 'I love making EDM/House music', 'My inspirations are mainly ILLENIUM, LUVIUM, Rival, Blanke'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 70;
let wordflick = function () {
        setInterval(function () {
                if (forwards) {
                        if (offset >= words[i].length) {
                                ++skip_count;
                                if (skip_count == skip_delay) {
                                        forwards = false;
                                        skip_count = 0;
                                }
                        }
                }
                else {
                        if (offset == 0) {
                                forwards = true;
                                i++;
                                offset = 0;
                                if (i >= len) {
                                        i = 0;
                                }
                        }
                }
                part = words[i].substring(0, offset);
                if (skip_count == 0) {
                        if (forwards) {
                                offset++;
                        }
                        else {
                                offset--;
                        }
                }
                document.getElementsByClassName("word")[0].innerHTML = part;
        }, speed);
};

document.addEventListener("DOMContentLoaded", function () {
        wordflick();
});