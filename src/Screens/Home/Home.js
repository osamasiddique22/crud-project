import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";
const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navi = location.state ? location.state.nav : false;
    console.log("navi", navi);

    const [enteredName, setEnteredName] = useState(''); //set the empty state of enteredName variable
    const [enteredAge, setEnteredAge] = useState(''); //set the empty state of enteredAge  variable
    const [enteredDisease, setEnteredDisease] = useState(''); //set the empty state of enteredDisease variable
    const [enteredCountry, setEnteredCountry] = useState(''); //set the empty state of enteredCountry variable
    const [enteredPhone, setEnteredPhone] = useState(''); //set the empty state of enteredPhone variable
    const [patient, setPatient] = useState([]); //set the empty array state of patient variable
    const [toPatientList, setToPatientList] = useState(navi); //set the false state of toPatientList variable


    let patientDataFromlSt = JSON.parse(localStorage.getItem('patientData'));
    console.log("toPatientList", toPatientList);
    console.log("patientDataFromlSt", patientDataFromlSt);


    useEffect(() => {
        console.log("useEffect")

        if (patientDataFromlSt.length > 0 && toPatientList === false) {
            navigate('/PatientList')
            console.log("if");
            setPatient(patientDataFromlSt)
            setToPatientList(false)
        }
        else if (patientDataFromlSt.length > 0 && toPatientList === true) {
            console.log("else");

            setPatient(patientDataFromlSt)
            setToPatientList(false)

        }

    }, []);



    const enteredNameHandler = (event) => { //function calls when we entered some data in input field
        setEnteredName(event.target.value)
    }

    const enteredAgeHandler = (event) => { //function calls when we entered some data in input field
        setEnteredAge(event.target.value)
    }

    const enteredDiseaseHandler = (event) => { //function calls when we entered some data in input field
        setEnteredDisease(event.target.value)
    }
    const enteredCountryHandler = (event) => { //function calls when we entered some data in input field
        setEnteredCountry(event.target.value)
    }
    const enteredPhoneHandler = (event) => { //function calls when we entered some data in input field
        setEnteredPhone(event.target.value)
    }

    const submitHandler = (event) => { //this function calls when we press submit button
        // console.log("submitHandler");
        if (enteredName === '' || enteredAge === '' || enteredDisease === '' || enteredCountry === '' || enteredPhone === '') return alert('Fill the all fields');
        const intialData = { // all the data that we set in the input flieds stored in this object
            name: enteredName,
            age: enteredAge,
            disease: enteredDisease,
            country: enteredCountry,
            phone: enteredPhone,
        }
        const enteredPatientsData = { //add the id to the submited data object
            ...intialData,
            id: Math.random().toString()
        }
        // navigate('./PatientList', { state: { patientsData: enteredPatientsData } })
        localStorage.setItem('patientData', JSON.stringify([...patient, enteredPatientsData])); //store the data in the local storage and also merage with the pervious data

        navigate('./PatientList') //when we press the submit button the navigate functoin is also called synchrounusly and shifed the page to Patient List
        setEnteredName(''); //after submition all the fields are clear sychrously
        setEnteredAge(0);
        setEnteredDisease('');

    }

    // console.log("patient []", patient);

    return (
        <div>
            <h1 className="h1">Enter Patient Data</h1>
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
                    <label htmlFor="country">Enter Country</label>
                    <input className="input" type="text" value={enteredCountry} onChange={enteredCountryHandler} />
                </div>
                <div>
                    <label htmlFor="cellNumber">Enter Cell Number</label>
                    <input className="input" type="tel" value={enteredPhone} onChange={enteredPhoneHandler} />
                </div>
            </div>
            <div className="button-flex">
                <button className="button" onClick={() => { submitHandler() }}> Submit</button>
            </div>
        </div >
    );
}
export default Home;