import React from 'react';

export default function StudentData({ std }) {
    // Ensure std is an array
    // const students = Array.isArray(std) ? std : [];

    // Inline style for the table
    const tableStyle = {
        border: '1px solid #ddd', // Add border to the table
    };

    const cellStyle = {
        border: '1px solid #ddd', // Add border to table cells
        padding: '8px',
        textAlign: 'left',
    };

    return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th style={cellStyle}>ID</th>
                    <th style={cellStyle}>Name</th>
                    <th style={cellStyle}>Age</th>
                    <th style={cellStyle}>Department</th>
                    <th style={cellStyle}>Email</th>
                </tr>
            </thead>
            <tbody>
                {std.map((student, index) => (
                    <tr key={index}>
                     <td style={cellStyle}>{student.id || 'N/A'}</td>
                        <td style={cellStyle}>{student.name || 'N/A'}</td>
                        <td style={cellStyle}>{student.age || 'N/A'}</td>
                        <td style={cellStyle}>{student.department || 'N/A'}</td>
                        <td style={cellStyle}>{student.email || 'N/A'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}   

