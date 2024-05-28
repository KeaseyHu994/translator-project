//Hunter Keasey
//5/24/24
//Transator Project

function checkLang(){
    let language = document.querySelector("#lang").value.toLowerCase();

    switch(language){
        case "french":
            document.querySelector("#translation").innerHTML = "'Bonjour!' means hello in French.";
            break;
        case "german":
            document.querySelector("#translation").innerHTML = "'Guten Tag!' means hello in German.";
            break;
        case "dutch":
            document.querySelector("#translation").innerHTML = "'Goededag!'means hello in Dutch.";
            break;
        default:
            document.querySelector("#translation").innerHTML = "Sorry, but we don't teach that language at your school!";
    }
}

document.querySelector('#resetAll').addEventListener('click', () => {
    document.querySelector("#translation").innerHTML = "";
    document.querySelector("#lang").value = "";
});

document.querySelector('#check').addEventListener('click', checkLang);

let instructions = "Which language do you want to learn?";
let student = "by Hunter Keasey";
let project = "Switch Statement Translator Project";

document.querySelector("#directions").innerHTML = instructions;
document.querySelector("#student").innerHTML = student;
document.querySelector("#project").innerHTML = project;