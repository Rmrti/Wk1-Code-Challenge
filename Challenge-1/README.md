Student Grade Calculator

This is a simple JavaScript program to determine a student's grade based on their marks. The program prompts the user to input a score between 0 and 100 and then displays the appropriate grade.
How to Run the Program

This program is designed to run in PlayCode.io, a browser-based JavaScript playground, and not in Node.js. Follow these steps to run it:

    1.Open your browser and go to PlayCode.io.
    2.Copy and paste the code into the editor on the left-hand side.
    3.Click the "Run" button to execute the program.
    4.Enter the student's marks in the prompt box that appears, then press "OK."
    5.View the result in the console on the right-hand side.
    
    Functionality

    1.The program begins by asking the user to input a student's marks using prompt().
    2.It then evaluates the input and determines the grade based on predefined ranges:
        80 - 100: Grade A
        60 - 79: Grade B
        50 - 59: Grade C
        40 - 49: Grade D
        0 - 39: Grade E
    3.If the input is invalid (e.g., not a number or outside the range 0 - 100), the program outputs an error message: "input is invalid".
    The calculated grade or error message is displayed in the browser console using console.log().
