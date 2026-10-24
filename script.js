let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let course = document.getElementById("course").value;

    if (!name || !roll || !course) {
        alert("Fill all fields");
        return;
    }

    students.push(name + " - " + roll + " - " + course);

    document.getElementById("result").innerHTML =
        students.join("<br>");

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("course").value = "";
}