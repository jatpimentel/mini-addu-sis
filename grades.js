const student_grades = [
    {
        Column11: "SUBJ NO",
        Column22: "DESCRIPTIVE TITLE",
        Column33: "PRELIM",
        Column44: "MIDTERM",
        Column55: "PRE-FINAL",
        Column66: "FINAL",
        Column77: "UNITS",
        Column88: "CREDIT TO"

    },
    {

        Column1: "ASF 4204",
        Column2: "SENIOR'S INTEGRATION PROGRAM",
        Column3: "A",
        Column4: "B",
        Column5: "B",
        Column6: "A",
        Column7: "2.00",
        Column8: "",
        
    },
    {
        Column1: "CS 4253",
        Column2: "SOCIAL ISSUES AND PROFESSIONAL PRACTICE",
        Column3: "A",
        Column4: "B",
        Column5: "A",
        Column6: "A",
        Column7: "3.00",
        Column8: ""

    },
    {
        Column1: "CS 4256",
        Column2: "CS ELECTIVE 4",
        Column3: "A",
        Column4: "B",
        Column5: "A",
        Column6: "A",
        Column7: "3.00",
        Column8: ""

    },
    {
        Column1: "CS 4257",
        Column2: "ARCHITECTURE AND ORGANIZATION",
        Column3: "A",
        Column4: "B",
        Column5: "A",
        Column6: "A",
        Column7: "3.00",
        Column8: ""

    },
    {
        Column1: "IT 4258",
        Column2: "INFORMATION ASSURANCE AND SECURITY 1",
        Column3: "A",
        Column4: "B",
        Column5: "A",
        Column6: "A",
        Column7: "3.00",
        Column8: ""

    }
]

const studentData = document.getElementById('student-data').getElementsByTagName('tbody')[0]

/*
for (let student of students){
    const newRow = studentData.insertRow(-1)

    const newCellName = newRow.insertCell()
    const newCellGender = newRow.insertCell()
    const newCellCourse = newRow.insertCell()

    newCellName.innerHTML = students.name
    newCellGender.innerHTML = students.gender
    newCellCourse.innerHTML = students.course
    
}
*/

for (let grades of student_grades){
    const newRow = studentData.insertRow(-1)

    for(let field in grades){
        const newCell = newRow.insertCell()

        if (field === 'Column11' || field === 'Column22' || field === 'Column33' || field === 'Column44' || field === 'Column55' || field === 'Column66' || field === 'Column77' || field === 'Column88') {
            newCell.innerHTML = "<b>" + grades[field] + "</b>";
        } else {
            newCell.innerHTML = grades[field];
        }
    }
}

/*------------------ COURSES DATA ---------------- */


