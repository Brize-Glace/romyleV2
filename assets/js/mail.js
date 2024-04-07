const emailBtn = document.querySelector(".mailButton");
const mailLink = document.querySelector(".mailLink");

emailBtn.addEventListener('click', () => {
    mailLink.style.display = 'block';
    emailBtn.style.display = 'none';
});