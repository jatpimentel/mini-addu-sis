const students_data = [
    {
        sCode1: "Code",
        sNum: "12673",
        sCourse: "Course:",
        sCourseDesc:"BS-COMPSCI",
        sYear:"Year:",
        sYearNum:"4"
    },
    {
        sName: "Student Name:",
        sNameDesc: "DE JESUS, DWIGHT IAN MAGNO",
        sDivision: "Division:",
        sDivisionDesc: "CS",
        sSection:"Section:",
        sSectionDesc:"Comsc 4-A",
    },
    {
        sRGC: "RGC No:",
        sRGCDesc: "155448349",
        sAcademicPeriod: "Academic Period:",
        sAcademicPeriodDesc: "2nd Semester, 2021-2022",
        sStatus:"Status:",
        sStatusDesc:"Regular",
    },
    {
        sAnnualQPI: "Annual QPI:",
        sAnnuaQPIDesc: "3.900",
    }
]

const studentsData = document.getElementById('students-data').getElementsByTagName('tbody')[0];

for (let student of students_data){
    const newRow = studentsData.insertRow(-1);

    for(let field in student){
        const newCell = newRow.insertCell();

        if (field === 'sCode1' || field === 'sCourse' || field === 'sYear' || field === 'sName' || field === 'sDivision' || field === 'sSection' || field === 'sRGC'
        || field === 'sAcademicPeriod' || field === 'sStatus' || field === 'sAnnualQPI') {
            newCell.innerHTML = "<b>" + student[field] + "</b>";
        } else {
            newCell.innerHTML = student[field];
        }
    }
}


