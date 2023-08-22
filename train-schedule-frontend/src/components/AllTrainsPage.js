import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrainCard from './TrainCard';
import './AllTrainsPage.css';


function AllTrainsPage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3000/trains/');
        setTrains(response.data);
      } catch (error) {
        console.error("Error fetching train data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="allTrainsContainer">
        {trains.map(train => <TrainCard key={train.trainNumber} train={train} />)}
    </div>
);

}

export default AllTrainsPage;
