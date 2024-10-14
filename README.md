# FED2, JS-2 CA

This project is a social media-like web application built using Vite for the frontend and a pre-existing API for handling posts. The app allows users to view, create, edit, and delete posts in a paginated feed. API authentication is handled through an API Key and Bearer Token, and the app uses standard HTTP methods (GET, POST, PUT, DELETE) to interact with the API.

## Table of Contents

- Features
- Prerequisites
- Installation
    - Running the Server
- Project Structure
- API Integration
- Technologies Used

---

## Features

- User Authentication: Uses Bearer Token and API Key to interact with a secure API.
- Social Media Style Feed: Displays posts in a paginated format, allowing users to navigate between pages.
- CRUD Operations: Supports creating, reading, updating, and deleting posts.
- Routing with Vite: Dynamic routing for different pages (e.g., view post, edit post).
- Pagination: Posts are displayed with pagination to control the number of posts per page.

---

## Prerequisites

Before setting up this project, ensure you have the following installed:

- Node.js (v14 or higher)
- Vite (for fast development and building)

---

## Installation

1. Clone the repository to your local machine:
    
    ```bash
    git clone https://github.com/AnnaSkudsveen/fed2-js2-ca-AnnaSkudsveen

    ```
    
2. Navigate to the project folder:
    
    ```bash
    cd fed2-js2-ca-AnnaSkudsveen
    ```
    
3. Install the required dependencies:
    
    ```bash
    npm install
    ```
    

---

### Running the Server

1. Start the server:
    
    ```bash
    npm start
    ```
    
    Alternatively, if you want to use **nodemon** for auto-reloading on code changes (install if necessary):
    
    ```bash
    npm install -g nodemon
    nodemon server.js
    ```
    
2. Open a browser and go to:
    
    ```bash
    http://localhost:5173
    ```
    

---

## Project Structure

```go
├── auth/
│   ├── login/
│   ├── register/
|   └── index.html
├── post/
│   ├── create/
|   ├── edit/
|   └── index.html
├── profile/
│   ├── index.html
├── public/
|   └── images/
└── src
    ├── css/
    └── js/
        ├── api/
        ├── router/
        ├── ui/
        ├── utilities/
        └── app.js


```

- `auth/` - Handles all authentication-related functionality
- `post/` - This directory handles the posts section of the social media-like application.
- `profile/` - This directory is for managing user profiles.
- `public` - This directory contains static assets that are publicly accessible.
- `src` - This is where most of the core application logic resides. With communication with api, routing via vite, javascript for user interface and utility functions.

---

## API Integration

The app uses a pre-existing API to manage posts, requiring a Bearer Token and API Key for authentication. The token is stored in localStorage and passed in API requests.

---

## Technologies Used

- **Node.js** 
- **HTML, CSS, JS** 
- **Vite**

---

## **Contributing**

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-new-feature`.
5. Submit a pull request.

---

## **Author**

- **Anna Skudsveen**
- **GitHub** - [@Annaskudsveen](https://github.com/Annaskudsveen)
