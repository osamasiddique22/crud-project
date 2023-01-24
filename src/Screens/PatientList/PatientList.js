import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import './PatientList.css';
import { useNavigate, useLocation } from "react-router-dom";
const PatientList = () => {
    const [storedData, setStoredData] = useState([]); //set the empty array to storedData array
    const navigate = useNavigate();
    useEffect(() => {
        console.log("useEffect");
        let patientsData = JSON.parse(localStorage.getItem('patientData')); //get data from local storage and save it to the vairabe
        // console.log("itemsData[]", itemsData);

        if (patientsData) {
            setStoredData(patientsData); //condition if data available then that data stored to storedData by seStoredData function
        }
    }, []);

    const deleteHandler = (id) => {
        let filterOnStoredData = storedData.filter(element => element.id !== id); //apply filter on storedata and filter out the selected patient data and remaining data again stored in local storage
        setStoredData(filterOnStoredData)
        localStorage.setItem('patientData', JSON.stringify(filterOnStoredData))
    }
    const editHandler = (patient) => { //function calls when press the edit button
        // let elements = items.find(element => element.id === id);
        // console.log("elemets[]", item);
        navigate('/EditList', { state: { patientRecord: patient } });
    }
    const enterPatientHandler = (event) => {
        event.preventDefault()
        navigate('/', { state: { nav: true } })
    }

    return (
        <div>

            <h1 className="h1">Table List</h1>
            <div className="header">
                <button onClick={enterPatientHandler} className="button add-patient-button">Add Patient</button>
            </div>
            <div className="flex-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Disease
                            </th>
                            <th>
                                Country
                            </th>
                            <th>
                                Phone
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            storedData.map((x, i) => {
                                // console.log("x", x);
                                return (
                                    <tr key={x.id}>
                                        <td>{x.id}</td>
                                        <td>{x.name}</td>
                                        <td>{x.age}</td>
                                        <td>{x.disease}</td>
                                        <td>{x.country}</td>
                                        <td>{x.phone}</td>
                                        <td><button className="button" onClick={() => editHandler(x)}>Edit</button> / <button className="button" onClick={() => deleteHandler(x.id)}>Delete</button></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PatientList;