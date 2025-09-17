# 🧙‍♂️🪄Welcome to Hogwarts! 🧙‍♂️🪄

Welcome to Hogwarts! This project is simple Node.js and Express server application that allows you to manage **Harry Potter characters, houses, and spells** through a RESTful API and interactive HTML forms.

## **Project Overview**

This application demonstrates the use of:

- Node.js and Express for building a server.
- RESTful API principles.
- Custom and error-handling middleware.
- Template engines (EJS) for rendering dynamic HTML views.
- Forms for client interaction with the API.
- Query parameters and route parameters for data filtering.
- Static CSS for basic styling.

The theme of the project is **Harry Potter**, featuring data categories:

1. **Characters** – e.g., Harry Potter, Hermione Granger, Draco Malfoy.  
2. **Houses** – e.g., Gryffindor, Slytherin, Hufflepuff, Ravenclaw.  
3. **Spells** – e.g., Expelliarmus, Lumos, Avada Kedavra.

## **Features**

- Full CRUD (Create, Read, Update, Delete) operations for all data categories.
- Query filtering:
  - Characters by house.
  - Spells by type (Charm, Curse, etc.).
- Route parameters to access data by ID.
- Custom middleware:
  - `logger.mjs` – logs every request method and URL.
  - `requestTimer.mjs` – logs the timestamp of each request.
- Global error-handling middleware: `errorHandler.mjs`.
- Interactive EJS views for all data categories with forms to add new items.
- Simple CSS styling served from `/public/style.css`.
