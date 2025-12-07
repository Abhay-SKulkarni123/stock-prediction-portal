import React from 'react'
import Button from './Button.jsx'

const Main = () => {
  return (
    <>
      
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h2 className="text-light">Welcome To Stock Prediction Portal</h2>
          <p className="text-light lead">
            This Stock Prediction Portal utilizes Machine Learning Model to make
            Predictions and help the user to get Optimised and Accurate Results
          </p>
          <Button text="Explore Now" class="btn-info" url="/dashboard" />
        </div>
      </div>
    </>
  );
}

export default Main