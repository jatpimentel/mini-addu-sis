const student_grades = [
    {

        Column1: "ASF 4204",
        Column2: "SENIOR'S INTEGRATION PROGRAM",
        Column3: "A",
        Column4: "B",
        Column5: "B",
        Column6: "A",
        Column7: "3.00",
        Column8: "",
        
    },
    {
        Column1: "SUBJ NO",
        Column2: "DESCRIPTIVE TITLE",
        Column3: "PRELIM",
        Column4: "MIDTERM",
        Column5: "PRE-FINAL",
        Column6: "FINAL",
        Column7: "UNITS",
        Column8: "CREDIT TO"

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
    const newRow = studentData.insertRow(0)

    for(let field in grades){
        const newCell = newRow.insertCell()

        newCell.innerHTML = grades[field]
    }
}

/*------------------ COURSES DATA ---------------- */


const courses = [
    {

        Column1: "ASF 4204",
        Column2: "SENIOR'S INTEGRATION PROGRAM",
        Column3: "A",
        Column4: "B",
        Column5: "B",
        Column6: "A",
        Column7: "3.00",
        Column8: "",
        
    },
    {
        Column1: "SUBJ NO",
        Column2: "DESCRIPTIVE TITLE",
        Column3: "PRELIM",
        Column4: "MIDTERM",
        Column5: "PRE-FINAL",
        Column6: "FINAL",
        Column7: "UNITS",
        Column8: "CREDIT TO"

    }
]


const courseData = document.getElementById('course-data').getElementsByTagName('tbody')[0]

for (let course of courses){
    const newRow = courseData.insertRow(0)

    for(let field in course){
        const newCell = newRow.insertCell()

        newCell.innerHTML = course[field]
    }
}
