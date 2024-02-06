import React, { useState } from 'react';

function Students() {
    const [students, setStudents] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const age = new Date().getFullYear() - new Date(dob).getFullYear();

        if (firstName && familyName && dob && age >= 10) {
            const newStudent = { firstName, familyName, dob };
            setStudents([...students, newStudent]);
            setFirstName('');
            setFamilyName('');
            setDob('');
            alert('New student added!');
        } else {
            alert('Please fill all fields and ensure student is at least 10 years old.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="text" placeholder="Family Name" value={familyName} onChange={(e) => setFamilyName(e.target.value)} required />
                <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Family Name</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.familyName}</td>
                            <td>{student.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Students;