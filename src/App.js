import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import View from "./components/View";



function App() {
  // Initialize state to hold the image URL
  const [Nasa, setNasa] = useState({});
  useEffect(() => {
    // This axios GET request will return a single image
    // Make a request for a user with a given ID
axios.get('https://api.nasa.gov/planetary/apod?api_key=5gqjdwiBlODGJM67S6ygailhc2WVwpggPGySJDWZ')
.then(function (response) {
  // handle success
  console.log(response);
  setNasa(response.data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.finally(function () {
  // always executed
});
  }, []);

  return (
    <div className="App">
      <View 
      title={Nasa.title}
      date={Nasa.date}
      explanation={Nasa.explanation}
      url={Nasa.url}
      />
    </div>
  );
}

export default App;
