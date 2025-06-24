# File Upload Service with Node.js, Express, and Multer
Project Overview
A robust server-side file upload handler built with Express.js and Multer middleware. This application provides secure and efficient file upload capabilities, supporting single and multiple file uploads with configurable storage options.

Key Features
File Upload Handling: Processes multipart/form-data requests for file uploads

Storage Configuration:

Automatic creation of upload directories

Customizable file naming (timestamp + original name)

Disk storage with proper path resolution

Error Handling: Validates upload paths and catches filesystem errors

REST API Endpoint: /upload route for receiving files via POST requests
