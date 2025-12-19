let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Enter student name");
        return;
    }

    students.push({ name: name, status: "Absent" });
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("name").value = "";
    displayStudents();
}

function markAttendance(index) {
    students[index].status =
        students[index].status === "Present" ? "Absent" : "Present";

    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td class="${student.status === "Present" ? "present" : "absent"}">
                    ${student.status}
                </td>
                <td>
                    <button onclick="markAttendance(${index})">
                        Mark ${student.status === "Present" ? "Absent" : "Present"}
                    </button>
                </td>
            </tr>
        `;
    });
}

displayStudents();
