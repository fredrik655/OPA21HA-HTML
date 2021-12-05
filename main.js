
const approvedJobTitles = ["C# Developer", "Frontend Developer", "CEO"];
const approvedLocation = ["Halmstad"];
const minSalary = 50000;

const form = document.querySelector("form");
const container = document.getElementById("job-form-container");
const formBtn = form.querySelector("button");
const submittedText = document.querySelector(".job-submitted-disabled");
console.log(submittedText);

// check if input title is in approved title list
function checkIfTitleMatch(title) {
    let found = false;
    approvedJobTitles.forEach(t => {
        if(t.toLocaleLowerCase() === title.toLocaleLowerCase()){
            found = true;
        }
    });
    return found;
}

// check if input location is in approved location list
function checkIfLocationMatch(location) {
    let found = false;
    approvedLocation.forEach(l => {
        if(l.toLocaleLowerCase() === location.toLocaleLowerCase()){
            found = true;
        }
    });
    return found;
}

// check if is over minimum
function checkIfMinSalary(salary) {
    if(salary >= minSalary){
        return true;
    }
    return false;
}


formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = form["title-input"];
    const location = form["city-input"];
    const salary = form["salary-input"];
    const email = form["email-input"];

    const titleError = !checkIfTitleMatch(title.value);
    const locationError = !checkIfLocationMatch(location.value);
    const salaryError = !checkIfMinSalary(salary.value);
    const emailError = email.validity.typeMismatch || (email.value.length <= 0);

    console.log(salaryError);

    if(titleError || locationError || salaryError || emailError) {
        if(titleError) {
            title.classList.add("input-error");
        }
        if(locationError) {
            location.classList.add("input-error");
        }
        if(salaryError) {
            salary.classList.add("input-error");
        }
        if(emailError) {
            email.classList.add("input-error");
        }
        setTimeout(() => {
            title.classList.remove("input-error");
            location.classList.remove("input-error");
            salary.classList.remove("input-error");
            email.classList.remove("input-error");
        }, 2000);
    }
    else {
        form.classList.add("form-disabled");
        submittedText.classList.remove("job-submitted-disabled");
        submittedText.classList.add("job-submitted-container");
        const texts = submittedText.querySelectorAll("p");
        texts[0].textContent = title.value;
        texts[1].textContent = location.value;
        texts[2].textContent = salary.value;
        texts[3].textContent = email.value;
    }
    
});

