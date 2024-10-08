import React from 'react';
import './help.css'; // Import the CSS for styling

function Help() {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>
      <p>If you have any questions or need assistance, please refer to the information below or contact us at:</p>
      
      <h2>Contact Information</h2>
      <p>Email: support@testcompany.com</p>
      <p>Emergency Email: urgent@testcompany.com</p>
      <p>Please allow us 24-48 hours to respond to your inquiries.</p>

      <h2>Frequently Asked Questions</h2>
      <h3>1. How do I create an account?</h3>
      <p>To create an account, click on the 'Register' button at the top right corner of the page and fill in the required information.</p>
      
      <h3>2. How can I reset my password?</h3>
      <p>If you forgot your password, click on the 'Forgot Password' link on the login page and follow the instructions to reset it.</p>
      
      <h3>3. What should I do if I encounter an error?</h3>
      <p>If you encounter an error, please take a screenshot of the error message and contact us at support@yourcompany.com with the details.</p>
      
      <h3>4. How can I upgrade my subscription?</h3>
      <p>To upgrade your subscription, go to your account settings and select the 'Upgrade' option. Follow the instructions to complete the process.</p>
      
      <h3>5. Can I use the generated images for commercial purposes?</h3>
      <p>Yes, you can use the generated images for commercial purposes. Please refer to our Terms of Service for more information.</p>
      
      <h2>Additional Resources</h2>
      <p>For more detailed guides and tutorials, please visit our <a href="#">Help Center</a>.</p>
    </div>
  );
}

export default Help;
