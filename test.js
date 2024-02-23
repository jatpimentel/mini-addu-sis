const courses_data = [
    {
        CourseCode1: "Course Code",
        CourseName1: "Course Name",
        Slots1: "# Slots",
        Slots_remained1: "# Slots Remained",
        Start_Time1:"Start Time",
        End_Time1:"End Time",
        Day1:"Days"
    },
    {
        CourseCode: "ASF 1203",
        CourseName: "NATIONAL SERVICE TRAINING PROGRAM - CIVIC WELFARE TRAINING SERVICE 2",
        Slots: "# Slots",
        Slots_remained: "# Slots Remained",
        Start_Time:"Start Time",
        End_Time:"End Time",
        Day:"Days"
    },
    {
        CourseCode: "Course Code",
        CourseName: "Course Name",
        Slots: "# Slots",
        Slots_remained: "# Slots Remained",
        Start_Time:"Start Time",
        End_Time:"End Time",
        Day:"Days"
    },
    {
        CourseCode: "Course Code",
        CourseName: "Course Name",
        Slots: "# Slots",
        Slots_remained: "# Slots Remained",
        Start_Time:"Start Time",
        End_Time:"End Time",
        Day:"Days"
    },
    {
        CourseCode: "Course Code",
        CourseName: "Course Name",
        Slots: "# Slots",
        Slots_remained: "# Slots Remained",
        Start_Time:"Start Time",
        End_Time:"End Time",
        Day:"Days"
    }
]

const coursesData = document.getElementById('courses-data').getElementsByTagName('tbody')[0];

for (let course of courses_data){
    const newRow = coursesData.insertRow(-1);

    for(let field in course){
        const newCell = newRow.insertCell();

        if (field === 'CourseCode1' || field === 'CourseName1' || field === 'Slots1' || field === 'Slots_remained1' || field === 'Start_Time1' || field === 'End_Time1' || field === 'Day1') {
            newCell.innerHTML = "<b>" + course[field] + "</b>";
        } else {
            newCell.innerHTML = course[field];
        }
    }
}