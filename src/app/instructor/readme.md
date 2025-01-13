How to Run the Project
Follow these steps to set up and run the project:

Prerequisites
Ensure you have the following installed on your machine:

Node.js (with npm)
JSON Server (Install globally if not installed: npm install -g json-server)
Steps to Run the Code
Install Dependencies
Run the following command to install all required packages:

bash
Copy code
npm install
Start the Application
Start the development server using:

bash
Copy code
npm start
Start the JSON Server
To serve the database, run:

bash
Copy code
json-server --watch src/app/instructor/assets/db.json
Access the Application
Open your browser and navigate to:

Home Page: http://localhost:4200/
Applicants Details (Instructor): http://localhost:4200/applicants-details
Available Tutors (After Shortlisting): http://localhost:4200/available-tutors