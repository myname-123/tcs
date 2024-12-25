function getAge() {
    const dobField = document.getElementById('dob');
    const dob = new Date(dobField.value); // Get the selected DOB
    const result = document.getElementById('showresults');
    
    const today = new Date();
    const birthYear = dob.getFullYear();
    const currentYear = today.getFullYear();

    // Validate input year
    if (isNaN(birthYear) || birthYear >= currentYear) {
        result.textContent = "Wrong date!";
        return false; // Prevent form submission
    }

    const age = currentYear - birthYear;
    result.textContent = `You are ${age} year(s) old!!`;

    return false; // Prevent form submission to stay on the page
}
