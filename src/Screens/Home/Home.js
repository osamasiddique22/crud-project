import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState(0);
    const [enteredDisease, setEnteredDisease] = useState('');
    const [enteredCountry, setEnteredCountry] = useState('');
    const [enteredPhone, setEnteredPhone] = useState(0);
    const [patient, setPatient] = useState([]);

    let patientDataFromlSt = JSON.parse(localStorage.getItem('patientData'));
    let array = patient.concat(patientDataFromlSt);
    console.log("array", array);
    useEffect(() => {
        console.log("itemsData[]", patientDataFromlSt);

        if (patientDataFromlSt) {
            setPatient(array)
        }
    }, []);
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

        const intialData = {
            name: enteredName,
            age: enteredAge,
            disease: enteredDisease,
            country: enteredCountry,
            phone: enteredPhone,
        }
        const enteredPatientsData = {
            ...intialData,
            id: Math.random().toString()
        }
        // navigate('./PatientList', { state: { patientsData: enteredPatientsData } })
        localStorage.setItem('patientData', JSON.stringify([...patient, enteredPatientsData]));

        navigate('./PatientList',)
        setEnteredName('');
        setEnteredAge(0);
        setEnteredDisease('');
    }



    return (
        <div>
            <h1>My Projects home</h1>

            <div>
                <label>Enter Name</label>
                <input type="text" value={enteredName} onChange={enteredNameHandler} />
            </div>
            <div>
                <label>Enter Age</label>
                <input type="Number" value={enteredAge} onChange={enteredAgeHandler} />
            </div>
            <div>
                <label>Enter Disease</label>
                <input type="text" value={enteredDisease} onChange={enteredDiseaseHandler} />
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <input type="text" value={enteredCountry} onChange={enteredCountryHandler} />
            </div>
            <div>
                <label htmlFor="cellNumber">Cell Number</label>
                <input type="number" value={enteredPhone} onChange={enteredPhoneHandler} />
            </div>
            <button onClick={() => { submitHandler() }}> Submit</button>

        </div >
    );
}
export default Home;