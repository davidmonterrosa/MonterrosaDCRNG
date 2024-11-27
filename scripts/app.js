// Id Section
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let codestackEmail = document.getElementById("codestackEmail");
let email = document.getElementById("email");
let firstNameP1 = document.getElementById("firstNameP1");
let lastNameP1 = document.getElementById("lastNameP1");
let firstNameP2 = document.getElementById("firstNameP2");
let lastNameP2 = document.getElementById("lastNameP2");
let firstNameP3 = document.getElementById("firstNameP3");
let lastNameP3 = document.getElementById("lastNameP3");
let firstNameP4 = document.getElementById("firstNameP4");
let lastNameP4 = document.getElementById("lastNameP4");
let firstNameP5 = document.getElementById("firstNameP5");
let lastNameP5 = document.getElementById("lastNameP5");

let randomNameBtn = document.getElementById("randomNameBtn");

// Variables Section
let pastFirstNamesArray = [];
let pastLastNamesArray = [];

function apiCall() {
    return fetch('../data/data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        return data.codestack;
    })
}

apiCall();

function generateChampion(codestack) {
    let randomIndex = Math.floor(Math.random() * codestack.length);
    console.log(codestack[randomIndex]);
    return codestack[randomIndex];
}

randomNameBtn.addEventListener('click', function(){
    apiCall().then(codestack => {
        let latestChampion = generateChampion(codestack);
        console.log(latestChampion);

        firstName.textContent = latestChampion.firstName;
        pastFirstNamesArray.unshift(latestChampion.firstName);
        lastName.textContent = latestChampion.lastName;
        pastLastNamesArray.unshift(latestChampion.lastName);

        codestackEmail.textContent = latestChampion.codeStackEmail;
        email.textContent = latestChampion.email;

        firstNameP1.textContent = pastFirstNamesArray[1];
        firstNameP2.textContent = pastFirstNamesArray[2];
        firstNameP3.textContent = pastFirstNamesArray[3];
        firstNameP4.textContent = pastFirstNamesArray[4];
        firstNameP5.textContent = pastFirstNamesArray[5];

        lastNameP1.textContent = pastLastNamesArray[1];
        lastNameP2.textContent = pastLastNamesArray[2];
        lastNameP3.textContent = pastLastNamesArray[3];
        lastNameP4.textContent = pastLastNamesArray[4];
        lastNameP5.textContent = pastLastNamesArray[5];
    })
})