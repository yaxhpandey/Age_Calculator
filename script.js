// function getDOB () {
//     const DOBInput = document.getElementById('enterDOB').value;
//     const CurrentdateInput = document.getElementById("currDate").value;

//     if(DOBInput || !CurrentdateInput){
//         alert("Please enter date of birth and current date");
//         return;
//     }
// }
// const dob = new date (DOBInput);
// const currentdate = new date (CurrentdateInput);

// let age = currentdate.getfullyear() - dob.getfullyear();
// const monthdifference = currentdate.getmonth() - dob.getmonth();

// if (monthdiffernece < 0 || (monthdifference === 0 && currentdate.getdate() < dob.getdate())) {
//     age--;
// }

// document.getElementById('currentAge').textContent = `Your age is ${age} years`;

function getDOB() {
    const DOBInput = document.getElementById('enterDOB').value;
    const CurrentdateInput = document.getElementById("currDate").value;

    // Check if both dates are entered
    if (!DOBInput || !CurrentdateInput) {
        alert("Please enter date of birth and current date");
        return;
    }

    const dob = new Date(DOBInput);
    const currentdate = new Date(CurrentdateInput);

    let age = currentdate.getFullYear() - dob.getFullYear();
    const monthDifference = currentdate.getMonth() - dob.getMonth();

    // Check if birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentdate.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('currentAge').textContent = `Your age is ${age} years`;
}
