# A Sports Blog Platform

## Description
Sporty is a full-stack web application that serves as a sports blog platform. It allows users to create, read, update, and delete blog posts related to various sports topics. The application features a user-friendly interface and is built using modern web technologies.


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Technologies Used](#technologies)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)
- [Deployment](#deployed)

## Installation

Clone the repository: `git clone https://github.com/jakepears/sportsBlog
Navigate to the project directory: `cd sportsblog`
Install dependencies: `npm install`
Create a .env file in the project root and add your environment variables (e.g., database credentials, API keys).
Start the development server: `npm start`

## Technologies Used

Node.js: A JavaScript runtime for building server-side applications.
Express.js: A web application framework for Node.js, used to create the RESTful API.
Handlebars.js: A popular template engine for rendering dynamic views.
MySQL: A relational database management system for storing application data.
Sequelize: An Object-Relational Mapping (ORM) library for MySQL, simplifying database operations.
Tailwind CSS: A utility-first CSS framework for building responsive and stylish user interfaces.
express-session: A middleware for managing user sessions and authentication in Express.js applications.
dotenv: A module for loading environment variables from a .env file, used to protect sensitive information like API keys.

## Features

RESTful API: The application provides a RESTful API for interacting with blog posts, allowing users to retrieve, create, update, and delete posts.
Handlebars Templates: Handlebars.js is used as the template engine for rendering dynamic views on the server-side.
Database Integration: MySQL and the Sequelize ORM are used for storing and managing blog post data.
User Authentication: Users can create accounts, log in, and log out using express-session and cookies for authentication.
Responsive Design: The user interface is built with Tailwind CSS, ensuring a responsive and visually appealing experience across various devices.
Interactive UI: The application provides an interactive user interface that responds to user input, allowing users to easily create, read, update, and delete blog posts.
Environment Variables: Sensitive information like database credentials and API keys are stored in environment variables using the dotenv module, enhancing security.
Deployment: The application is deployed on Heroku, a cloud platform for hosting web applications, ensuring accessibility from anywhere.


## Usage

Open your web browser and navigate to http://localhost:3000.
Create a new account or log in with an existing one.
Explore the blog posts, create new posts, update existing ones, or delete them as desired.
Interact with the application by leaving comments, liking posts, or following other users (depending on the implemented features).

## Contributing

Contributions are closed!

## License
This project is licensed under the MIT License.

## Screenshots

<img src='./public/imgs/sporty.png' />

## Deployed Application
You can access the deployed version of Sporty at https://sport-blog-48839df84095.herokuapp.com/.
