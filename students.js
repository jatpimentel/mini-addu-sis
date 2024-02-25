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
    {   sRGC: "",
        sRGCDesc: "",
        sAnnualQPI: "Annual QPI:",
        sAnnuaQPIDesc: "3.900",
        sAcademicPeriod: "",
        sAcademicPeriodDesc: "",
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

const another_table_data2 = [
    {
        SUBJ: "SUBJ NO.",
        DESC: "DESCRIPTIVE TITLE",
        P: "PRELIM",
        M: "MIDTERM",
        PREF: "PRE-FINAL",
        FIN: "FINAL",
        UN: "UNITS",
        CRE: "CREDIT TO",
    },
    {
        Column1: "ASF 4204<br>(16-7109)",
        Column2: "SENIOR'S INTEGRATION PROGRAM<br>(* 1:30P-3:30P F505 SA *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: "CS 4253<br>(4-321)",
        Column2: "SOCIAL ISSUES AND PROFESSIONAL PRACTICE<br>(* 9:00A-12:00P B200 SA *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: "CS 4-256<br>(4-312)",
        Column2: "CS ELECTIVE 4<br>(* 11:10A-12:40P F607B TTH SA * 1:00P-3:00P F607B F *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: "CS 4-257<br>(4-319)",
        Column2: "ARCHITECTURE AND ORGANIZATION<br>(* 1:30P-3:00P RTBA MW *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: "IT 4258<br>(4-320)",
        Column2: "INFORAMATION ASSURANCE AND SECURITY 1<br>(* 5:40P - 8:10P F612 TH *)",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        Column7: "3.00",
        Column8: "",
    },
    {
        Column1: " ",
        DESC: "Quality Point Index (Q.P.I)<br>or Weighted Percentage Average (W.P.A) =",
        Column3: "",
        Column4: "",
        Column5: "",
        Column6: "",
        UN: "0",
        Column8: "",
    },
    // Add more rows as needed
];

const anotherTable2 = document.getElementById('another-table2').getElementsByTagName('tbody')[0];

for (let rowData of another_table_data2) {
    const newRow = anotherTable2.insertRow(-1);

    for (let field in rowData) {
        const newCell = newRow.insertCell();

        if (field === 'SUBJ'|| field === 'DESC'|| field === 'P'|| field === 'M'|| field === 'PREF'||
        field === 'FIN'|| field === 'UN'|| field === 'CRE'){
            newCell.innerHTML = "<b>" + rowData[field] + "</b>";
        } else {
            newCell.innerHTML = rowData[field];
        }
    }
}


