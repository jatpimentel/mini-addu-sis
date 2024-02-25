const student_grades = [
    {
        Column11: "CODE",
        Column22: "STUDENT NAME",
        Column33: "FINAL",
        Column44: "GRD.TYPE",
        Column555: "YEAR LVL",
        Column66: "ACAD.STATUS",
        Column77: "YR. OF ENTRY",
        Column88: "ENTER YR LVL"
    },
    {
        Column1: "CS 2135",
        Column2: "JOB AARON T. PIMENTEL",
        Final: "",
        Column3: "NEW",
        Column4: "D",
        Column5: "A", // Dropdown value will be inserted here
        Column7: "3.00",
        Column8: ""
    },
    {
        Column1: "ASF 4204",
        Column2: "BEATRICE JAN ARAPOC",
        Final: "",
        Column3: "NEW",
        Column4: "C",
        Column5: "A", // Dropdown value will be inserted here
        Column7: "2.00",
        Column8: ""
    },
    {
        Column1: "CS 2137",
        Column2: "KARL JUSTIN NATIVIDAD",
        Final: "",
        Column3: "NEW",
        Column4: "B",
        Column6: "A", // Dropdown value will be inserted here
        Column7: "2.00",
        Column8: ""
    },
    {
        Column1: "GE 1107",
        Column2: "KENT AGAD",
        Final: "",
        Column3: "NEW",
        Column4: "B",
        Column5: "A", // Dropdown value will be inserted here
        Column7: "2.00",
        Column8: ""
    },
    {
        Column1: "GE 1109",
        Column2: "ISIAH VENERACION",
        Final: "",
        Column3: "NEW",
        Column4: "B",
        Column5: "A", // Dropdown value will be inserted here
        Column7: "3.00",
        Column8: ""
    },
    {
        Column1: "GE 3118",
        Column2: "ALTHEA CZEREIN DELAROSA",
        Final: "",
        Column3: "NEW",
        Column4: "B",
        Column5: "A", // Dropdown value will be inserted here
 
        Column7: "2.00",
        Column8: ""
    },{
        Column1: "IT 2136",
        Column2: "HANNAH BEA ALCAIDE",
        Final: "",

        Column3: "NEW",
        Column4: "B",
        Column5: "A", // Dropdown value will be inserted here
        Column7: "2.00",
        Column8: ""
    },
    {
        Column1: "ASF 4204",
        Column2: "BOSSING",
        Final: "",

        Column3: "NEW",
        Column4: "B",
        Column5: "B", // Dropdown value will be inserted here
        Column7: "2.00",
        Column8: ""
    },
    {
        Column1: "IT 2138",
        Column2: "DUMMY",
        Final: "",

        Column3: "NEW",
        Column4: "B",
        Column5: "A", // Dropdown value will be inserted here
  
        Column7: "2.00",
        Column8: ""
    }

    // More student data here...
];

const studentData = document.getElementById('student-data').getElementsByTagName('tbody')[0];

for (let grades of student_grades){
    const newRow = studentData.insertRow(-1);

    for(let field in grades){
        const newCell = newRow.insertCell();

        if (field === 'Final') {
            newCell.innerHTML = `<select class="grade-dropdown" onchange="updateGrade(this)">
                                    <option value="">Select Grade</option>
                                    <option value="A">A</option>
                                    <option value="B">B+</option>
                                    <option value="C">B</option>
                                    <option value="A">C+</option>
                                    <option value="B">C</option>
                                    <option value="C">D</option>
                                    <option value="B">F</option>
                                    <option value="C">D</option>
                                    <!-- Add more options as needed -->
                                 </select>`;
        } else if (field === 'Column11' || field === 'Column22' || field === 'Column33' || field === 'Column44' || field === 'Column555' || field === 'Column66' || field === 'Column77' || field === 'Column88') {
            newCell.innerHTML = "<b>" + grades[field] + "</b>";
        } else {
            newCell.innerHTML = grades[field];
        }
    }
}

const another_table_data = [
    {
        Column111: "Code/Subject:",
        Column2: "4-114/IT 2241 - EVENT DRIVEN PROGRAMMING",
    },
    {
        Column111: "Schedule:",
        Column2: "*2:05P-4:35P F605 TTh",
    },
    {
        Column111: "Academic Period:",
        Column2: "2nd Semester 2023-2024",
    },
    {
        Column111: "Grading Period:",
        Column2: "Final",
    },
    // Add more rows as needed
];

const anotherTable = document.getElementById('another-table2').getElementsByTagName('tbody')[0];

for (let rowData of another_table_data) {
    const newRow = anotherTable.insertRow(-1);

    for (let field in rowData) {
        const newCell = newRow.insertCell();

        if (field === 'Column111'){
            newCell.innerHTML = "<b>" + rowData[field] + "</b>";
        } else {
            newCell.innerHTML = rowData[field];
        }
    }
}
