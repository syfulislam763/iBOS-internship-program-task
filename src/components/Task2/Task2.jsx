import React, { useEffect, useState } from 'react';
import './Task2.css';
import fakeData from '../../fakeData/fakeData';
import TableData from './TableData';

function Task2() {


    const [dataset, setDataset] = useState([]);
    const [_, setUpdatetor] = useState(0)


    useEffect(() => {
        setDataset(fakeData);
    }, []);

    const handleCheck = (editableData, property) => {
        editableData[property] = !editableData[property];

        //used updatetor to rerender component after updating single element's property of dataset
        setUpdatetor(prevUpdator => prevUpdator + 1)
    }

    

    return (
        <div style={{overflowX:"auto"}}>
            <h3 className="task-header">Task 2</h3>


            <table>
                <thead>
                    <tr style={{backgroundColor:"darkgreen"}}>
                        <th>Module Name</th>
                        <th>Activity Name</th>
                        <th>Create</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Approve</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataset.map(dt => (
                            <TableData key={dt.id} data={dt} handleCheck={handleCheck}/>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}


export default Task2;
