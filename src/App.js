import React, { useState, useEffect } from 'react';
import './style.css';
import { ref, onValue, db, get, child } from './firebase';
export default function App() {
  const [entries, setEntry] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, 'Sensor/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setEntry(Object.values(snapshot.val()));
      console.log(data);
    });
  }, ['']);
  return (
    <div>
      <h1>Device Data</h1>
      <p>The data is being fetched from the firebase :)</p>

      <table width="100%">
        <tr>
          <th>Device Name</th>
          <th>Water Level</th>
          <th>Battery Level</th>
        </tr>

        <tbody>
          {entries.map((elem) => {
            return (
              <tr>
                <td>{elem['Device Name']}</td>
                <td>{elem['Water Level']}</td>
                <td>{elem['Bateery Level']}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
