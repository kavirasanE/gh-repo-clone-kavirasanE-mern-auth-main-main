import React from 'react'

const About = () => {
  return (
    <div> <p className="text-lg leading-7 text-gray-700">
    <strong className="text-2xl text-blue-600">Frontend Technologies:</strong>
    <ul className="list-disc pl-6">
      <li>Utilizes React for building interactive and dynamic user interfaces.</li>
      <li>Implements React Router for efficient client-side navigation.</li>
      <li>Employs Redux and the Redux Toolkit for centralized state management.</li>
    </ul>
  
    <strong className="text-2xl text-green-600">Backend Technologies:</strong>
    <ul className="list-disc pl-6">
      <li>Uses Express.js as the server framework for a robust backend.</li>
      <li>Leverages MongoDB and Mongoose for efficient data storage and retrieval.</li>
      <li>Implements bcryptjs for secure password encryption.</li>
      <li>Utilizes JSON Web Tokens (JWT) for secure user authentication.</li>
      <li>Implements CORS support for seamless cross-origin resource sharing.</li>
    </ul>
  
    <strong className="text-2xl text-purple-600">Data Handling:</strong>
    <ul className="list-disc pl-6">
      <li>Integrates with Firebase for real-time data handling and authentication.</li>
    </ul>
  
    <strong className="text-2xl text-yellow-600">HTTP Requests:</strong>
    <ul className="list-disc pl-6">
      <li>Utilizes Axios for making HTTP requests, ensuring efficient communication with backend services.</li>
    </ul>
  
    <strong className="text-2xl text-red-600">State Persistence:</strong>
    <ul className="list-disc pl-6">
      <li>Implements Redux Persist to ensure persistent storage of user data.</li>
    </ul>
  
    <strong className="text-2xl text-orange-600">Development Workflow:</strong>
    <ul className="list-disc pl-6">
      <li>Incorporates environment variables through dotenv, enhancing configuration flexibility.</li>
      <li>Uses nodemon to automate the development workflow by restarting the server upon code changes.</li>
    </ul>
  
    <strong className="text-2xl text-teal-600">Development Stack:</strong>
    <ul className="list-disc pl-6">
      <li>React, Redux, React Router, Axios on the frontend.</li>
      <li>Express.js, MongoDB, Mongoose, bcryptjs, JWT on the backend.</li>
      <li>Firebase for real-time data and authentication.</li>
    </ul>
  </p>
  
    </div>
  )
}

export default About