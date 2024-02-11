import React, { useState, useEffect } from 'react';

const Faq = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://localhost:7162/api/faq');
                if (!response.ok) {
                    throw new Error('Could not fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>FAQ</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}>Pytanie</th>
                        <th style={{ textAlign: 'left' }}>Odpowiedź</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white' }}>
                            <td style={{ textAlign: 'left' }}>{item.question}</td>
                            <td style={{ textAlign: 'left' }}>{item.answer}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Faq;