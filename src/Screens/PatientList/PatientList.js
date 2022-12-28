import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const PatientList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("useEffect");
        let itemsData = JSON.parse(localStorage.getItem('patientData'));
        console.log("itemsData[]", itemsData);

        if (itemsData) {
            setItems(itemsData);
        }
    }, []);
    console.log("item length", items.length);
    console.log("item[}", items);
    // if (items.length) {
    //     console.log("here");
    return (
        <table>
            <thead>
                <tr>
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
                </tr>
            </thead>
            <tbody>
                {
                    items.map((x, i) => {
                        console.log("x", items);
                        return (
                            <tr key={x.id}>
                                <td>{x.name}</td>
                                <td>{x.age}</td>
                                <td>{x.disease}</td>
                                <td>{x.country}</td>
                                <td>{x.phone}</td>

                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    );
}
export default PatientList;