// function to determine student's grade based on marks
function studentGrade() {
    // asks user to enter student's marks which is a number between 0-100
    const marks = prompt("Enter student marks (0-100)");

    //check if the marks are within their respective ranges. And if true, the respective grades to be printed 
    if (marks > 79 && marks <= 100) {
        console.log("Grade A");
    }
    else if (marks >=60 && marks <=79) {
        console.log("Grade B");
    }
    else if (marks >=50 && marks <=59) {
        console.log("Grade C");
    }
    else if (marks >=40 && marks <=49) {
        console.log("Grade D");
    }
    else if (marks >=0 && marks < 40) {
        console.log("Grade E");
    }
    // If none of the above conditions are true, the input is invalid
    else {
        console.log("input is invalid")
    }
}
//calling the function
studentGrade();

