const currentDate = new Date();
const birthDate = new Date('2006-04-19');
const ageElement = document.getElementById('spanAge');

if (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate()) {
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    ageElement.textContent = age;
} else {
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    ageElement.textContent = age;
}