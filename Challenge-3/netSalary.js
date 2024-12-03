// Function to calculate net salary
function netSalaryCalculator() {
    // Get user input for basic salary and benefits
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    const benefits = parseFloat(prompt("Enter benefits:"));
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate deductions
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNhif(grossSalary);
    const nssf = calculateNssf(grossSalary);
  
    // Calculate net salary
    const netSalary = grossSalary - (payee + nhif + nssf);
  
    // Output the results to the user
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${payee}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
  }
  
  // Function to calculate PAYE (income tax) based on salary ranges
  function calculatePayee(salary) {
    if (salary <= 24000) return salary * 0.10;
    if (salary <= 32333) return salary * 0.25;
    if (salary <= 500000) return salary * 0.30;
    if (salary <= 800000) return salary * 0.325;
    return salary * 0.35;
  }
  
  // Function to calculate NHIF deduction based on salary
  function calculateNhif(salary) {
    if (salary <= 5999) return 150;
    if (salary <= 7999) return 300;
    if (salary <= 11999) return 400;
    if (salary <= 14999) return 500;
    if (salary <= 19999) return 600;
    if (salary <= 24999) return 750;
    if (salary <= 29999) return 850;
    if (salary <= 34999) return 900;
    if (salary <= 39999) return 950;
    if (salary <= 44999) return 1000;
    if (salary <= 49999) return 1100;
    if (salary <= 59999) return 1200;
    if (salary <= 69999) return 1300;
    if (salary <= 79999) return 1400;
    if (salary <= 89999) return 1500;
    if (salary <= 99999) return 1600;
    return 1700;
  }
  
  // Function to calculate NSSF deduction based on salary
  function calculateNssf(salary) {
    if (salary <= 7000) return salary * 0.06; // Tier I
    if (salary <= 36000) return salary * 0.06; // Tier II
    return 1800; // Maximum limit for Tier II
  }
  
  // Call the function 
  netSalaryCalculator();
  