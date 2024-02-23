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
        Slots: "45",
        Slots_remained: "10",
        Start_Time:"10:00 AM",
        End_Time:"1:00 PM",
        Day:"MW"
    },
    {
        CourseCode: "CS 2135",
        CourseName: "DATA STRUCTURES AND ALGORITHMS",
        Slots: "45",
        Slots_remained: "21",
        Start_Time:"7:40 AM",
        End_Time:"9:40 PKM",
        Day:"TTh"
    },
    {
        CourseCode: "IT 2239",
        CourseName: "FUNDAMENTALS OF DATABASE SYSTEMS",
        Slots: "45",
        Slots_remained: "7",
        Start_Time:"6:00 PM",
        End_Time:"7:30 PM",
        Day:"MW"
    },
    {
        CourseCode: "IT 2242",
        CourseName: "STATISTICS FOR RESEARCH",
        Slots: "35",
        Slots_remained: "1",
        Start_Time:"9:20 AM",
        End_Time:"10:50 AM",
        Day:"TTh"
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