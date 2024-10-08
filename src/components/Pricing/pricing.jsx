import React from 'react';
import './pricing.css'; // Import the CSS

const Pricing = () => {
    return (
        <div className="pricing-container">
            <h2>Pricing</h2>
            <div className="pricing-boxes">
                <div className="pricing-box">
                    <h3>Basic</h3>
                    <p>$10/month</p>
                    <ul>
                        <li>Generate up to 100 images per month</li>
                        <li>Access to basic image styles</li>
                        <li>Email support</li>
                    </ul>
                    <button>Choose</button>
                </div>
                <div className="pricing-box">
                    <h3>Pro</h3>
                    <p>$20/month</p>
                    <ul>
                        <li>Generate up to 500 images per month</li>
                        <li>Access to all image styles</li>
                        <li>Priority email support</li>
                        <li>Custom image resolutions</li>
                    </ul>
                    <button>Choose</button>
                </div>
                <div className="pricing-box">
                    <h3>Premium</h3>
                    <p>$30/month</p>
                    <ul>
                        <li>Generate unlimited images per month</li>
                        <li>Access to all image styles</li>
                        <li>Priority email and chat support</li>
                        <li>Custom image resolutions</li>
                        <li>Exclusive early access to new features</li>
                    </ul>
                    <button>Choose</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
