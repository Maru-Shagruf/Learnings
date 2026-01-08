import React, { useState, useEffect } from 'react';

function Dog() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDog = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogImage(data.message); 
    } catch (error) {
      console.error("Error fetching dog:", error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchDog();
  }, []); 

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h1>Random Dog Generator </h1>
      <div style={{ minHeight: "300px" }}>


        {loading ? (
          <h3 style={{ width: "400px", borderRadius: "10px",height:"400px"}}>
            Loading...
            </h3>
        ) : (
          <img 
            src={dogImage} 
            alt="A cute dog" 
            style={{ width: "400px", borderRadius: "10px",height:"400px"}} 
          />
        )}


      </div>

      <button 
        onClick={fetchDog}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", marginTop: "20px" }}>
        Fetch New Dog
      </button>
    </div>
  );
}

export default Dog;