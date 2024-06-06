// Personal Information

const inputName = document.querySelector("#name");
const inputTitle = document.querySelector("#title");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputBirthDate = document.querySelector("#birthdate");
const inputLinkedin = document.querySelector("#linkedin");
const btnSendInformation = document.querySelector("#send");

// Skills

const inputNameSkill = document.querySelector("#skill-name");
const inputPunctuationSkill = document.querySelector("#punctuation-skill");

// Software

const inputNameSoftware = document.querySelector("#software-name");
const inputPunctuationSoftware = document.querySelector("#software-punctuation");

// Language

const inputNameLanguage = document.querySelector("#language");
const inputPunctuationLanguage = document.querySelector("#language-punctuation");

// Summary

const inputSummary = document.querySelector("#summary");

// Job Experience

const inputJobName = document.querySelector("#job-name");
const inputStartDateJob = document.querySelector("#start-date-job");
const inputFinishDateJob = document.querySelector("#finish-date-job");

// Education 

const inputEducationName = document.querySelector("#education-name");
const inputStartDateEducation = document.querySelector("#start-date-education");
const inputFinishDateEducation = document.querySelector("#finish-date-education");

// Certification

const inputCertificationName = document.querySelector("#certification-name");
const inputStartDateProgram = document.querySelector("#start-date-program");
const inputFinishDateProgram = document.querySelector("#finish-date-program");

// buttons

const btnAddSkill = document.querySelector("#more-skill");
const btnAddSoftware = document.querySelector("#more-software");
const btnAddLanguage = document.querySelector("#more-language");
const btnAddMoreExperience = document.querySelector("#more-experience");
const btnAddMoreEducation = document.querySelector("#more-education");
const btnAddMoreCertification = document.querySelector("#more-certification");

const col = document.querySelector("#row-container");
const colInfo = document.querySelector("#col-info");
const colCV = document.querySelector("#col-cv");
const rowContainerSkill = document.querySelector("#row-container-skill")

// validate inputs

function InputValidate(input, isValid){
    const value = input.value;
    if(value == '' || value == null || value == undefined || value == 0){
        input.classList.add("message-error");
        input.classList.remove("message-success");
        input.placeholder = "you must enter a value";
        return false;
    }else{
        input.classList.add("message-success");
        input.classList.remove("message-error");
        if(!isValid){
            return false;
        }else{
            return true;
        }
    }
}

function Validate(){
    let isValid = true;
    // isValid = InputValidate(inputName, isValid);
    // isValid = InputValidate(inputTitle, isValid);
    // isValid = InputValidate(inputEmail, isValid);
    // isValid = InputValidate(inputPhone, isValid);
    // isValid = InputValidate(inputBirthDate, isValid);
    // isValid = InputValidate(inputLinkedin, isValid);
    // isValid = InputValidate(inputNameSkill, isValid);
    // isValid = InputValidate(inputPunctuationSkill, isValid);
    // isValid = InputValidate(inputNameSoftware, isValid);
    // isValid = InputValidate(inputPunctuationSoftware, isValid);
    // isValid = InputValidate(inputNameLanguage, isValid);
    // isValid = InputValidate(inputPunctuationLanguage, isValid);
    // isValid = InputValidate(inputSummary, isValid);
    // isValid = InputValidate(inputJobName, isValid);
    // isValid = InputValidate(inputStartDateJob, isValid);
    // isValid = InputValidate(inputFinishDateJob, isValid);
    // isValid = InputValidate(inputEducationName, isValid);
    // isValid = InputValidate(inputStartDateEducation, isValid);
    // isValid = InputValidate(inputFinishDateEducation, isValid);
    // isValid = InputValidate(inputCertificationName, isValid);
    // isValid = InputValidate(inputStartDateProgram, isValid);
    // isValid = InputValidate(inputFinishDateProgram, isValid);

     return isValid;
}

function Clear(){
    InputReset(inputName, inputTitle);
    InputReset(inputEmail, inputPhone);
    InputReset(inputBirthDate, inputLinkedin);
    InputReset(inputNameLanguage, inputPunctuationLanguage);
    InputReset(inputNameSoftware, inputPunctuationSoftware);
    InputReset(inputNameSkill, inputPunctuationSkill);
    InputResetTwo(inputJobName, inputStartDateJob, inputFinishDateJob);
    InputResetTwo(inputEducationName, inputStartDateEducation, inputFinishDateEducation);
    InputResetTwo(inputCertificationName, inputStartDateProgram, inputFinishDateProgram);
    InputResetThree(inputSummary);
}


btnSendInformation.addEventListener('click', () => {
    
    Validate();
    const existingCards = col.querySelectorAll(".card");
    existingCards.forEach(card => card.remove());
    CV();
    ClearInputs();
    Clear();
})

function ClearInputs() {
    while (rowContainerSkill.children.length > 2) {
        rowContainerSkill.removeChild(rowContainerSkill.children[1]);
    }
}

function CV(){

    GeneratePersonalInformation();
    GenerateSkill();
    GenerateSoftware();
    GenerateLanguage();
    GenerateSummary();
    GenerateJobExperience();
    GenerateEducation();
    GenerateCertification();
}

btnAddSkill.addEventListener('click', () =>{
    AddMoreSkill();
});

btnAddSoftware.addEventListener('click', () => {
    AddMoreSoftware();
})

btnAddLanguage.addEventListener('click', () => {
    AddMoreLanguage();
})

btnAddMoreExperience.addEventListener('click', () => {
    AddMoreJobExperience();
})

btnAddMoreEducation.addEventListener('click', () =>{
    AddMoreEducation();
})

btnAddMoreCertification.addEventListener('click', () => {
    AddMoreCertification();
})

function GeneratePersonalInformation(){

    if(!Validate()){
        return Validate();
    }else{
        const valueName = inputName.value;
        const valueTitle = inputTitle.value;
        const valueEmail = inputEmail.value;
        const valuePhone = inputPhone.value;
        const valueBirthDate = inputBirthDate.value;
        const valueLink = inputLinkedin.value;
        const infoContainer = document.querySelector("#col-info");
        const rowContainer = document.querySelector("#row-container");
        const container = document.querySelector("#container");

        // const existingCards = rowContainer.querySelectorAll(".card");
        // existingCards.forEach(card => card.remove());

        const divCredential = document.createElement("div");
        divCredential.setAttribute("class", "credential");

        const h3Name = document.createElement("h3");
        h3Name.textContent = `${valueName}`;

        const h4Title = document.createElement("h4");
        h4Title.textContent = `${valueTitle}`;

        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card m-3");

        const divCardHeader = document.createElement("div");
        divCardHeader.setAttribute("class", "card-header bg-primary text-white");

        const h6PersonalInformation = document.createElement("h6");
        h6PersonalInformation.setAttribute("class", "d-flex justify-content-center");
        h6PersonalInformation.textContent = "Personal Information";

        const divCardBody = document.createElement("div");
        divCardBody.setAttribute("class", "card-body");

        const ulInformation = document.createElement("ul");
        ulInformation.setAttribute("class", "list-group list-gropu-flush");

        const liName = document.createElement("li");
        const liTitle = document.createElement("li");
        const liEmail = document.createElement("li");
        const liPhone = document.createElement("li");
        const liBirthDate = document.createElement("li");
        const liLinkedin = document.createElement("li");


        liName.setAttribute("class", "list-group-item mb-1");
        liName.textContent = `Name: ${valueName}`;

        liTitle.setAttribute("class", "list-group-item mb-1");
        liTitle.textContent = `Title: ${valueTitle}`;

        liEmail.setAttribute("class", "list-group-item mb-1");
        liEmail.textContent = `Email: ${valueEmail}`;

        liPhone.setAttribute("class", "list-group-item mb-1");
        liPhone.textContent = `Phone: ${valuePhone}`;

        liBirthDate.setAttribute("class", "list-group-item mb-1");
        liBirthDate.textContent = `BirthDate: ${valueBirthDate}`;

        liLinkedin.setAttribute("class", "list-group-item mb-1");
        liLinkedin.textContent = `Linkedin: ${valueLink}`;
        
        divCredential.appendChild(h3Name);
        divCredential.appendChild(h4Title);

        divCardHeader.appendChild(h6PersonalInformation);
        divCardBody.appendChild(ulInformation);

        ulInformation.appendChild(liName);
        ulInformation.appendChild(liTitle);
        ulInformation.appendChild(liPhone);
        ulInformation.appendChild(liEmail);
        ulInformation.appendChild(liBirthDate);
        ulInformation.appendChild(liLinkedin);

        divCard.appendChild(divCardHeader);
        divCard.appendChild(divCardBody);
      
        infoContainer.appendChild(divCredential)
        infoContainer.appendChild(divCard);
        rowContainer.appendChild(infoContainer);
        container.appendChild(rowContainer);

    }
}

function GenerateSkill(){

    Generator("#skill-name", "#punctuation-skill", "skill");

}

function GenerateSoftware(){

    Generator("#software-name", "#software-punctuation", "software" );
}

function GenerateLanguage(){
    Generator("#language", "#language-punctuation", "language");
}

function AddMoreSkill(){
        const divRow = document.querySelector("#row-container-skill")

        const divHead = document.createElement("div");
        divHead.setAttribute("class", "mb-3 col-6");

        const inputText = document.createElement("input");
        inputText.setAttribute("class", "form-control form-control-sm");
        inputText.setAttribute("id", "skill-name");
        inputText.setAttribute("type", "text");
        inputText.placeholder = "Enter a skill"

        const divBody = document.createElement("div");
        divBody.setAttribute("class", "mb-3 col-6");

        const select = document.createElement("select");
        select.setAttribute("class", "form-select form-select-sm");
        select.setAttribute("id", "punctuation-skill");
        const numberOfOptions = 5;

        divHead.appendChild(inputText);
        divBody.appendChild(select);
        for (let i = 0; i <= numberOfOptions; i++) 
        {
            const option = document.createElement("option");
            option.setAttribute("value", i);
            if(i === 0){
                option.textContent = `Select your punctuation skill`;
            }else{
                option.textContent = `${i}`;
            }
            select.appendChild(option);
        }

        divRow.appendChild(divHead);
        divRow.appendChild(divBody);  
}

function AddMoreSoftware(){
  
    const divRow = document.querySelector("#row-container-software")

    const divHead = document.createElement("div");
    divHead.setAttribute("class", "mb-3 col-6");

    const inputText = document.createElement("input");
    inputText.setAttribute("class", "form-control form-control-sm");
    inputText.setAttribute("id", "software-name");
    inputText.setAttribute("type", "text");
    inputText.placeholder = "Enter a software"

    const divBody = document.createElement("div");
    divBody.setAttribute("class", "mb-3 col-6");

    const select = document.createElement("select");
    select.setAttribute("class", "form-select form-select-sm");
    select.setAttribute("id", "software-punctuation");
    const numberOfOptions = 5;

    divHead.appendChild(inputText);
    divBody.appendChild(select);
    for (let i = 0; i <= numberOfOptions; i++) 
    {
        const option = document.createElement("option");
        option.setAttribute("value", i);
        if(i === 0){
            option.textContent = `Select your punctuation software`;
        }else{
            option.textContent = `${i}`;
        }
        select.appendChild(option);
    }

    divRow.appendChild(divHead);
    divRow.appendChild(divBody);

}

function AddMoreLanguage(){
  
    const divRow = document.querySelector("#row-container-language");

    const divHead = document.createElement("div");
    divHead.setAttribute("class", "mb-3 col-6");

    const inputText = document.createElement("input");
    inputText.setAttribute("class", "form-control form-control-sm");
    inputText.setAttribute("id", "language");
    inputText.setAttribute("type", "text");
    inputText.placeholder = "Enter a language"

    const divBody = document.createElement("div");
    divBody.setAttribute("class", "mb-3 col-6");

    const select = document.createElement("select");
    select.setAttribute("class", "form-select form-select-sm");
    select.setAttribute("id", "language-punctuation");
    const numberOfOptions = 5;

    divHead.appendChild(inputText);
    divBody.appendChild(select);
    for (let i = 0; i <= numberOfOptions; i++) 
    {
        const option = document.createElement("option");
        option.setAttribute("value", i);
        if(i === 0){
            option.textContent = `Select your punctuation language`;
        }else{
            option.textContent = `${i}`;
        }
        select.appendChild(option);
    }

    divRow.appendChild(divHead);
    divRow.appendChild(divBody);

}

function GenerateJobExperience(){
    GenerateJobEducationCertification(inputStartDateJob, inputFinishDateJob, "#job-name", "Job Experience");
}

function GenerateEducation(){
    GenerateJobEducationCertification(inputStartDateEducation, inputFinishDateEducation, "#education-name", "Education");
}

function GenerateSummary(){
    if(!Validate()){

    }else{
        const valueSummary = inputSummary.value;
        console.log(valueSummary);
        const rowContainer = document.querySelector("#row-container");
        const container = document.querySelector("#container");
        const infoContainer = document.querySelector("#col-cv");
        
        const divCard = document.createElement("div");
        divCard.setAttribute("class", "card m-3");

        const divCardHeader = document.createElement("div");
        divCardHeader.setAttribute("class", "card-header bg-primary text-white");

        const h6 = document.createElement("h6");
        h6.setAttribute("class", "d-flex justify-content-center");
        h6.textContent = "Job Summary";

        const divCardBody = document.createElement("div");
        divCardBody.setAttribute("class", "card-body");

        const paragraph = document.createElement("p");
        paragraph.textContent = `${valueSummary}`;

        divCardBody.appendChild(paragraph);
        divCardHeader.appendChild(h6);
        divCard.appendChild(divCardHeader);
        divCard.appendChild(divCardBody);
        infoContainer.appendChild(divCard);
        rowContainer.appendChild(infoContainer);
        container.appendChild(rowContainer);
    }
}

function GenerateCertification(){
    GenerateJobEducationCertification(inputStartDateProgram, inputFinishDateProgram, "#certification-name", "Certification");
}

function Generator(id, idPunctuation, text) {


    if(!Validate()){

    }else{
    
    const rowContainer = document.querySelector("#row-container");
    const container = document.querySelector("#container");

    // const existingCards = rowContainer.querySelectorAll(".card");
    // existingCards.forEach(card => card.remove());

    const infoContainer = document.querySelector("#col-info");
  
    const divCard = document.createElement("div");
        
    const skills = []; 
    const skillsPunctuation = []

    const skillInputs = document.querySelectorAll(id);
    const skillInputsPunctuation = document.querySelectorAll(idPunctuation);
    const h6 = document.createElement("h6");


    skillInputs.forEach((input) => {
      skills.push(input.value);
    });

    skillInputsPunctuation.forEach(input => {
        skillsPunctuation.push(input.value);
    });

   
    divCard.setAttribute("class", "card m-3");

    const divCardHeader = document.createElement("div");
    divCardHeader.setAttribute("class", "card-header bg-primary text-white");

    h6.setAttribute("class", "d-flex justify-content-center");
    h6.textContent = text;

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group list-gropu-flush");

    skills.forEach((input, index) => {
        const Item = document.createElement("li");
        let info;
        Item.setAttribute("class", "list-group-item mb-1");
        const punctuation = skillsPunctuation[index] || ''; 
        info = `${input} (${punctuation}/5)`;
        Item.textContent = info;
        ul.appendChild(Item);
    });
    
    divCardHeader.appendChild(h6);
    divCardBody.appendChild(ul);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);
  
    infoContainer.appendChild(divCard);
    rowContainer.appendChild(infoContainer);
    container.appendChild(rowContainer);
}

}

function GenerateJobEducationCertification(start, finish, id, text){
    if(!Validate()){

    }else{

    
    const valueStart = start.value;
    const valueFinish = finish.value;
    const rowContainer = document.querySelector("#row-container");
    const container = document.querySelector("#container");

    const skills = []; 

    const skillInputs = document.querySelectorAll(id);
    skillInputs.forEach(input => {
      skills.push(input.value);
    });
  
    const infoContainer = document.querySelector("#col-cv");
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card m-3");

    const divCardHeader = document.createElement("div");
    divCardHeader.setAttribute("class", "card-header bg-primary text-white");

    const h6 = document.createElement("h6");
    h6.setAttribute("class", "d-flex justify-content-center");
    h6.textContent = text;

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group list-gropu-flush");

    skills.forEach(value => {
        const Item = document.createElement("li");
        Item.setAttribute("class", "list-group-item mb-1");
        Item.textContent = `${value} ${valueStart} - ${valueFinish}`;

        ul.appendChild(Item);
    });

    divCardHeader.appendChild(h6);
    divCardBody.appendChild(ul);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);
  
    infoContainer.appendChild(divCard);
    rowContainer.appendChild(infoContainer);
    container.appendChild(rowContainer);

}
}


function AddMoreJobExperience(){
    const divRow = document.querySelector("#row-experience")

    const divHead = document.createElement("div");
    divHead.setAttribute("class", "mb-3 col-4");

    const inputText = document.createElement("input");
    inputText.setAttribute("class", "form-control form-control-sm");
    inputText.setAttribute("id", "job-name");
    inputText.setAttribute("type", "text");
    inputText.placeholder = "Job";

    const inputDateStart = document.createElement("input");
    inputDateStart.setAttribute("class", "form-control form-control-sm");
    inputDateStart.setAttribute("id", "start-date-job");
    inputDateStart.setAttribute("type", "date");

    const inputDateFinish = document.createElement("input");
    inputDateFinish.setAttribute("class", "form-control form-control-sm");
    inputDateFinish.setAttribute("id", "finish-date-job");
    inputDateFinish.setAttribute("type", "date");

    const divBody = document.createElement("div");
    divBody.setAttribute("class", "mb-3 col-4");

    const divFooter = document.createElement("div");
    divFooter.setAttribute("class", "mb-3 col-4");

    divHead.appendChild(inputText);
    divBody.appendChild(inputDateStart);
    divFooter.appendChild(inputDateFinish);

    divRow.appendChild(divHead);
    divRow.appendChild(divBody);  
    divRow.appendChild(divFooter);
}


function AddMoreEducation(){
    const divRow = document.querySelector("#row-education")

    const divHead = document.createElement("div");
    divHead.setAttribute("class", "mb-3 col-4");

    const inputText = document.createElement("input");
    inputText.setAttribute("class", "form-control form-control-sm");
    inputText.setAttribute("id", "education-name");
    inputText.setAttribute("type", "text");
    inputText.placeholder = `Education`;

    const inputDateStart = document.createElement("input");
    inputDateStart.setAttribute("class", "form-control form-control-sm");
    inputDateStart.setAttribute("id", "start-date-education");
    inputDateStart.setAttribute("type", "date");

    const inputDateFinish = document.createElement("input");
    inputDateFinish.setAttribute("class", "form-control form-control-sm");
    inputDateFinish.setAttribute("id", "finish-date-education");
    inputDateFinish.setAttribute("type", "date");

    const divBody = document.createElement("div");
    divBody.setAttribute("class", "mb-3 col-4");

    const divFooter = document.createElement("div");
    divFooter.setAttribute("class", "mb-3 col-4");

    divHead.appendChild(inputText);
    divBody.appendChild(inputDateStart);
    divFooter.appendChild(inputDateFinish);

    divRow.appendChild(divHead);
    divRow.appendChild(divBody);  
    divRow.appendChild(divFooter);
}

function AddMoreCertification(){
    const divRow = document.querySelector("#row-certification")

    const divHead = document.createElement("div");
    divHead.setAttribute("class", "mb-3 col-4");

    const inputText = document.createElement("input");
    inputText.setAttribute("class", "form-control form-control-sm");
    inputText.setAttribute("id", "certification-name");
    inputText.setAttribute("type", "text");
    inputText.placeholder = `Certification`;

    const inputDateStart = document.createElement("input");
    inputDateStart.setAttribute("class", "form-control form-control-sm");
    inputDateStart.setAttribute("id", "start-date-program");
    inputDateStart.setAttribute("type", "date");

    const inputDateFinish = document.createElement("input");
    inputDateFinish.setAttribute("class", "form-control form-control-sm");
    inputDateFinish.setAttribute("id", "finish-date-program");
    inputDateFinish.setAttribute("type", "date");

    const divBody = document.createElement("div");
    divBody.setAttribute("class", "mb-3 col-4");

    const divFooter = document.createElement("div");
    divFooter.setAttribute("class", "mb-3 col-4");

    divHead.appendChild(inputText);
    divBody.appendChild(inputDateStart);
    divFooter.appendChild(inputDateFinish);

    divRow.appendChild(divHead);
    divRow.appendChild(divBody);  
    divRow.appendChild(divFooter);
}

function InputReset(valueOne, valueTwo){
    valueOne.value = "";
    valueTwo.value = "";

    // valueOne.classList.remove("message-error");
    // valueOne.classList.remove("message-success");

    // valueOne.classList.remove("message-error");
    // valueOne.classList.remove("message-success");

    // valueTwo.classList.remove("message-error");
    // valueTwo.classList.remove("message-success");
}

function InputResetTwo(valueOne, valueTwo, valueThree){
    valueOne.value = "";
    valueTwo.value = "";
    valueThree.value = "";
    // valueOne.classList.remove("message-error");
    // valueOne.classList.remove("message-success");

    // valueTwo.classList.remove("message-error");
    // valueTwo.classList.remove("message-success");

    // valueThree.classList.remove("message-error");
    // valueThree.classList.remove("message-success");
}

function InputResetThree(valueOne){
    valueOne.value = "";
    // valueOne.classList.remove("message-error");
    // valueOne.classList.remove("message-success");
}
