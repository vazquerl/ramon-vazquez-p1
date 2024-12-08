# Web Application Project

This project is a web application that allows users to create, manage, and interact with items (e.g., posts/products) through a user-friendly interface. Users can register, log in, and perform CRUD operations on items, as well as interact through comments and ratings.

## Features
- User Registration and Authentication
- Profile Management
- CRUD Functionality for Items
- Search and Filtering
- Comments and Ratings
- Real-Time Notifications
- Admin Dashboard
- Responsive Design
- API Documentation
- User Feedback Mechanism

---

## Feature Implementation Details

### User Registration and Authentication
- Set up user schema in MongoDB.
- Implement registration (`POST`) and login (`POST`) endpoints.
- Use `bcrypt` for password hashing.
- Implement JWT for user authentication.
- Optional: Add email verification.

### Profile Management
- Create a profile schema in MongoDB.
- Add endpoints to retrieve (`GET`) and update (`PUT`) user profiles.
- Optional: Allow profile picture uploads.

### CRUD Functionality for Items
- Create an item schema in MongoDB.
- Add endpoints for:
  - Create an item (`POST`).
  - Retrieve all items (`GET`).
  - Retrieve a single item (`GET`).
  - Update an item (`PUT`).
  - Delete an item (`DELETE`).

### Search and Filtering
- Implement search functionality in the items endpoint.
- Enable filtering by categories or tags using query parameters.

### Comments and Ratings
- Create schemas for comments and ratings in MongoDB.
- Add endpoints to:
  - Add a comment (`POST`).
  - Retrieve comments for an item (`GET`).
  - Add a rating (`POST`).

### Real-Time Notifications
- Create a notifications schema in MongoDB.
- Generate notifications for actions like new comments.
- Add an endpoint to retrieve notifications (`GET`).

### Admin Dashboard
- Create an admin role in the user schema.
- Add endpoints to:
  - Retrieve all users (`GET`).
  - Delete inappropriate content (`DELETE`).
  - Ban users (`PUT`).

### Responsive Design
- Use frameworks like Bootstrap or Tailwind CSS for styling.
- Test the design on various devices and screen sizes.

### API Documentation
- Document the API using Swagger or Postman.
- Provide detailed examples for all endpoints.

### User Feedback Mechanism
- Create a feedback schema in MongoDB.
- Add endpoints to:
  - Submit feedback (`POST`).
  - Retrieve all feedback for admin review (`GET`).

---

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vazquerl/ramon-vazquez-p1.git
