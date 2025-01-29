let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
let birthYear = prompt("Please enter your birth year:");


if (firstName && lastName && birthYear) {
    const currentYear = new Date().getFullYear();
    let age = currentYear - Number(birthYear); // Fixed variable name

    let greeting = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;

    

    document.body.innerHTML += `<h1>${greeting}</h1>`;
}
