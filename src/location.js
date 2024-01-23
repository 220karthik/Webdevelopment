import React, { useState, useEffect } from 'react';
import './location.css';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, []);

  return (
    
    <div>
      
      {latitude && longitude ? (
        <div>

        <p className='the'> 
          <p>Latitude: {latitude}</p>
          <li> 
          <p>Longitude: {longitude}</p>
          </li>
          </p>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
        
      ) : (
        <p>Fetching location...</p>
      )}
      
    </div>
  
  );
};

export default LocationComponent;
