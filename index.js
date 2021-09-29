console.clear()
const { prompt } = require('inquirer')
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees'
    },
    console.log('Connected to the employee database.')
);

console.promise().query("SELECT 1")
    .then( ([rows,fields]) => {
        console.log(rows);

    })
    .catch(console.log)
    .then( () => console.timeEnd());

// GIVEN a command-line application that accepts user input
// WHEN I start the application

// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

const selection = [
    {
        type: 'list', 
        name: 'menu',
        message: "",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
        ]
    }
]
    

function init () {
    prompt(selection).then(data => {
        console.log(data)
    });
}
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewHandler() {
    switch (key) {
        case "View All Departments":

            break;

        case "View All Roles":

            break;

        case "View All Employees":

            break;

        default:

            break;
    }
    }
    
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function addHandler() {
    switch (key) {
        case "Add a Department": 
        prompt(addDepartment)
        
            
            break;
            case "Add a Role":
        
            
            break;
            case "Add an Employee":
        
            
            break;
    
        default:
            break;
    }
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to


// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
const addDepartment = [
    {
        type: "text",
        name: "Department",
        message: "What is the name of the department?",
    },
]

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = [
    {
        type: "text",
        name: "Role",
        message: "What is the name of the role?",
    },
    {
        type: "text",
        name: "Salary",
        message: "What is the salary of the role?",
        number: "",
    },
    {
        type: "text",
        name: "Department",
        message: "What is the department for the role?",
    },
]

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const employeeId = [
    {
        type: "text",
        name: "Employee's First Name",
        message: "What is the employee's first name?",
    },
    {
        type: "text",
        name: "Employee's Last Name",
        message: "What is the employee's last name?",
    },
    {
        type: "text",
        name: "Employee's Role",
        message: "What is the employee's role?",
    },
    {
        type: "text",
        name: "Employee's Manager",
        message: "Who is the employee's manager?"
    }
]

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 



init();