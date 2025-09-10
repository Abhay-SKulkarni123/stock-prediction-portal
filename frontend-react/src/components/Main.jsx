import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="lead text-light">
            Welcome to our AI-powered Stock Prediction Portal, a cutting-edge
            platform designed to help investors, traders, and enthusiasts make
            smarter financial decisions. Leveraging the power of machine
            learning, our portal analyzes historical stock data, market trends,
            and real-time financial indicators to provide accurate and
            actionable predictions. With an intuitive React-based interface, you
            can explore interactive charts, track your portfolio performance,
            and gain insights into potential market movements effortlessly.
            Whether you are a beginner looking to understand stock behavior or
            an experienced trader aiming to optimize your investment strategy,
            our platform combines advanced analytics, predictive modeling, and
            user-friendly design to empower you with the knowledge and
            confidence to navigate the stock market efficiently. Stay ahead of
            the market, minimize risks, and make informed investment choices
            with our seamless integration of AI, Django backend processing, and
            dynamic frontend visualization.
          </p>
          <Button text="Login" class="btn-info" />
        </div>
      </div>
    </>
  );
}

export default Main