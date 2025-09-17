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


Reflection (Optional)

1. What could you have done differently during the planning stages of your project to make the execution easier? 

During the planning stages, I could have mapped out the folder structure and routes more clearly before coding, which would have made integrating middleware and views smoother.

2. Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects? 

Implementing query parameters for filtering was a bit tricky at first, but breaking it down into small conditional checks made it manageable; in future projects, planning data filters ahead of time would simplify this.

3. What would you add to or change about your application if given more time? 

If given more time, I would add persistent storage with a database, more detailed character and house profiles, and additional interactive features like sorting or search.

4. Use this space to make notes for your future self about anything that you think is important to remember about this process or that may aid you when attempting something similar.

Always start with a clear project structure, define your API endpoints early, and build CRUD functionality incrementally while frequently testing in Postman to catch errors early.