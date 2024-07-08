// src/App.js
import React from "react";
import centerImage from ".//Final-Small-Logo.png"; // Import the image

function App() {
  const appStyle = {
    textAlign: "center",
  };

  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  };

  const imageStyle = {
    marginTop: "20px",
    width: "20%",
    marginBottom: "20px",
  };

  return (
    <div style={appStyle}>
      <header style={headerStyle}>
        <img src={centerImage} alt="Center" style={imageStyle} />
        <h1>In development...</h1>
        <h3>Coming late 2024</h3>
      </header>
    </div>
  );
}

export default App;
