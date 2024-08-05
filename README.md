# URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs
- Redirect short URLs to the original URLs
- Simple front-end for URL input

## Project Structure

- `controllers/`: Handles the request logic.
- `middlewares/`: Contains middleware functions for request processing.
- `models/`: Defines the database schemas.
- `routes/`: Defines the API endpoints.
- `services/`: Contains business logic.
- `views/`: Contains the front-end views.

## Schema

The URL model includes the following fields:
- `originalUrl`: The original URL provided by the user.
- `shortUrl`: The generated short URL.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/galahad42/UrlShortner.git
    cd UrlShortner
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add your MongoDB connection string:
    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter a URL you want to shorten and submit.
3. The shortened URL will be displayed. You can use this URL to be redirected to the original URL.

## API Endpoints

- `POST /shorten`: Shorten a URL.
    - Request body:
      ```json
      {
          "originalUrl": "http://example.com"
      }
      ```

- `GET /:shortUrl`: Redirect to the original URL.


