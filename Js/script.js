let patients = JSON.parse(localStorage.getItem("patients")) || [];

displayPatients();

function addPatient(){

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const disease = document.getElementById("disease").value;

    if(name==="" || age==="" || gender==="" || disease===""){
        alert("Please fill all fields");
        return;
    }

    patients.push({
        name,
        age,
        gender,
        disease
    });

    localStorage.setItem("patients",JSON.stringify(patients));

    displayPatients();

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("gender").value="";
    document.getElementById("disease").value="";
}

function displayPatients(){

    let tbody=document.querySelector("#patientTable tbody");

    tbody.innerHTML="";

    patients.forEach((patient,index)=>{

        tbody.innerHTML += `
        <tr>

            <td>${patient.name}</td>

            <td>${patient.age}</td>

            <td>${patient.gender}</td>

            <td>${patient.disease}</td>

            <td>

                <button class="action-btn edit" onclick="editPatient(${index})">
                    Edit
                </button>

                <button class="action-btn delete" onclick="deletePatient(${index})">
                    Delete
                </button>

            </td>

        </tr>
        `;

    });

}

function deletePatient(index){

    patients.splice(index,1);

    localStorage.setItem("patients",JSON.stringify(patients));

    displayPatients();

}

function editPatient(index){

    let patient = patients[index];

    document.getElementById("name").value=patient.name;
    document.getElementById("age").value=patient.age;
    document.getElementById("gender").value=patient.gender;
    document.getElementById("disease").value=patient.disease;

    patients.splice(index,1);

    localStorage.setItem("patients",JSON.stringify(patients));

    displayPatients();

}

function searchPatient(){

    let input=document.getElementById("search").value.toLowerCase();

    let rows=document.querySelectorAll("#patientTable tbody tr");

    rows.forEach(row=>{

        let name=row.cells[0].textContent.toLowerCase();

        if(name.includes(input)){
            row.style.display="";
        }
        else{
            row.style.display="none";
        }

    });

}

// ==================== DOCTORS ====================

let doctors = JSON.parse(localStorage.getItem("doctors")) || [];

if(document.getElementById("doctorTable")){
    displayDoctors();
}

function addDoctor(){

    const name=document.getElementById("doctorName").value;
    const specialization=document.getElementById("specialization").value;
    const phone=document.getElementById("phone").value;
    const experience=document.getElementById("experience").value;

    if(name==="" || specialization==="" || phone==="" || experience===""){
        alert("Please fill all fields");
        return;
    }

    doctors.push({
        name,
        specialization,
        phone,
        experience
    });

    localStorage.setItem("doctors",JSON.stringify(doctors));

    displayDoctors();

    document.getElementById("doctorName").value="";
    document.getElementById("specialization").value="";
    document.getElementById("phone").value="";
    document.getElementById("experience").value="";
}

function displayDoctors(){

    let tbody=document.querySelector("#doctorTable tbody");

    tbody.innerHTML="";

    doctors.forEach((doctor,index)=>{

        tbody.innerHTML+=`

        <tr>

        <td>${doctor.name}</td>

        <td>${doctor.specialization}</td>

        <td>${doctor.phone}</td>

        <td>${doctor.experience} Years</td>

        <td>

        <button class="action-btn edit"
        onclick="editDoctor(${index})">
        Edit
        </button>

        <button class="action-btn delete"
        onclick="deleteDoctor(${index})">
        Delete
        </button>

        </td>

        </tr>

        `;

    });

}

function deleteDoctor(index){

    doctors.splice(index,1);

    localStorage.setItem("doctors",JSON.stringify(doctors));

    displayDoctors();

}

function editDoctor(index){

    let doctor=doctors[index];

    document.getElementById("doctorName").value=doctor.name;
    document.getElementById("specialization").value=doctor.specialization;
    document.getElementById("phone").value=doctor.phone;
    document.getElementById("experience").value=doctor.experience;

    doctors.splice(index,1);

    localStorage.setItem("doctors",JSON.stringify(doctors));

    displayDoctors();

}

function searchDoctor(){

    let input=document.getElementById("doctorSearch").value.toLowerCase();

    let rows=document.querySelectorAll("#doctorTable tbody tr");

    rows.forEach(row=>{

        let name=row.cells[0].textContent.toLowerCase();

        if(name.includes(input))
            row.style.display="";
        else
            row.style.display="none";

    });

}

// ================= APPOINTMENTS =================

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

if(document.getElementById("appointmentTable")){
    displayAppointments();
}

function addAppointment(){

    const patient=document.getElementById("patientName").value;
    const doctor=document.getElementById("doctorNameApp").value;
    const date=document.getElementById("appointmentDate").value;
    const time=document.getElementById("appointmentTime").value;

    if(patient===""||doctor===""||date===""||time===""){
        alert("Fill all fields");
        return;
    }

    appointments.push({
        patient,
        doctor,
        date,
        time
    });

    localStorage.setItem("appointments",JSON.stringify(appointments));

    displayAppointments();

    document.getElementById("patientName").value="";
    document.getElementById("doctorNameApp").value="";
    document.getElementById("appointmentDate").value="";
    document.getElementById("appointmentTime").value="";
}

function displayAppointments(){

    let tbody=document.querySelector("#appointmentTable tbody");

    tbody.innerHTML="";

    appointments.forEach((app,index)=>{

        tbody.innerHTML+=`

        <tr>

        <td>${app.patient}</td>

        <td>${app.doctor}</td>

        <td>${app.date}</td>

        <td>${app.time}</td>

        <td>

        <button class="action-btn edit"
        onclick="editAppointment(${index})">
        Edit
        </button>

        <button class="action-btn delete"
        onclick="deleteAppointment(${index})">
        Delete
        </button>

        </td>

        </tr>

        `;

    });

}

function deleteAppointment(index){

    appointments.splice(index,1);

    localStorage.setItem("appointments",JSON.stringify(appointments));

    displayAppointments();

}

function editAppointment(index){

    let app=appointments[index];

    document.getElementById("patientName").value=app.patient;
    document.getElementById("doctorNameApp").value=app.doctor;
    document.getElementById("appointmentDate").value=app.date;
    document.getElementById("appointmentTime").value=app.time;

    appointments.splice(index,1);

    localStorage.setItem("appointments",JSON.stringify(appointments));

    displayAppointments();

}

function searchAppointment(){

    let input=document.getElementById("appointmentSearch").value.toLowerCase();

    let rows=document.querySelectorAll("#appointmentTable tbody tr");

    rows.forEach(row=>{

        let patient=row.cells[0].textContent.toLowerCase();

        if(patient.includes(input))
            row.style.display="";
        else
            row.style.display="none";

    });

}

// ================= BILLING =================

function generateBill(){

    const patient=document.getElementById("billPatient").value;

    const consultation=Number(document.getElementById("consultation").value);

    const medicine=Number(document.getElementById("medicine").value);

    const room=Number(document.getElementById("room").value);

    const tests=Number(document.getElementById("tests").value);

    if(patient===""){

        alert("Enter patient name");

        return;

    }

    let total=consultation+medicine+room+tests;

    document.getElementById("patientDisplay").innerHTML=patient;

    document.getElementById("totalBill").innerHTML=total;

}