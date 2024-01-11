// StudentTable.js
import React, { useEffect, useState } from 'react';
import connection from 'C:\\Users\\hp\\Desktop\\attendora-dashboard\\home.js'; 

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rows] = await connection.query('select NumeroCarteRFID, Prenom_etd, Nom_etd from Etudiant where filiere = "MTI"');
        setStudents(rows);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Student Table</h2>
      <table>
        <thead>
          <tr>
            <th>NumeroCarteRFID</th>
            <th>Prenom_etd</th>
            <th>Nom_etd</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.NumeroCarteRFID}</td>
              <td>{student.Prenom_etd}</td>
              <td>{student.Nom_etd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
