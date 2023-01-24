import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import "./Edit.css"
const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { patientRecord } = location?.state ? location.state : {} // if location.state have some data stored in patientRecord if not then stored the empty object
    console.log("data", location)
    console.log("id", patientRecord);
    const [enteredName, setEnteredName] = useState(patientRecord.name);
    const [enteredAge, setEnteredAge] = useState(patientRecord.age);
    const [enteredDisease, setEnteredDisease] = useState(patientRecord.disease);
    const [enteredCountry, setEnteredCountry] = useState(patientRecord.country);
    const [enteredPhone, setEnteredPhone] = useState(patientRecord.phone);
    const [patient, setPatient] = useState({});

    let patientDataEditFrm = JSON.parse(localStorage.getItem('patientData'));

    const enteredNameHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const enteredAgeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const enteredDiseaseHandler = (event) => {
        setEnteredDisease(event.target.value)
    }
    const enteredCountryHandler = (event) => {
        setEnteredCountry(event.target.value)
    }
    const enteredPhoneHandler = (event) => {
        setEnteredPhone(event.target.value)
    }


    const submitHandler = (event) => {
        console.log("submitHandler");
        const enteredPatientsData = {
            name: enteredName,
            age: enteredAge,
            disease: enteredDisease,
            country: enteredCountry,
            phone: enteredPhone,
        }
        const editedData = {
            ...enteredPatientsData,
            id: Math.random().toString()
        }
        let updatedList = patientDataEditFrm.map((val) => { //apply map on the data that we get from the local stroage and compare the id of each object that we get to the id of the object that navigate through patientRecord

            if (val.id === patientRecord.id) return { ...editedData } //if id matches then return the edited object on the same id and after that returne the map array
            return val

        })

        localStorage.setItem('patientData', JSON.stringify(updatedList))// stored the updated list

        navigate('/PatientList') //and navigate to Patients list

    }

    return (
        <div>
            <h1 className="h1">Edit Patient Data</h1>
            <div className="flex-container">
                <div>
                    <label>Enter Name</label>
                    <input className="input" type="text" value={enteredName} onChange={enteredNameHandler} />
                </div>
                <div>
                    <label>Enter Age</label>
                    <input className="input" type="text" value={enteredAge} onChange={enteredAgeHandler} />
                </div>
                <div>
                    <label>Enter Disease</label>
                    <input className="input" type="text" value={enteredDisease} onChange={enteredDiseaseHandler} />
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <input className="input" type="text" value={enteredCountry} onChange={enteredCountryHandler} />
                </div>
                <div>
                    <label htmlFor="cellNumber">Cell Number</label>
                    <input className="input" type="tel" value={enteredPhone} onChange={enteredPhoneHandler} />
                </div>
            </div>
            <div className="button-flex">
                <button className="button" onClick={() => { submitHandler() }}> Submit</button>
            </div>
        </div >
    );
}
export default Edit;