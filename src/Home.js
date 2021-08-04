import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Home() {
    const [employee, setEmployee] = useState({})
    useEffect(() => {
        oneEmployee()
        return () => {
        }
    }, [])
    const oneEmployee = () => {
        axios.get("api/employees/1") // using 10.0.2.2 instead of localhost
            .then((response) => {
                console.log("res", response.data);
                setEmployee(response.data)
            }).catch((err) => {
                console.log("error to get latest movie", err);
            })
    }
    return (
        <div>
            <h1>my name {employee.name}</h1>
        </div>
    )
}

