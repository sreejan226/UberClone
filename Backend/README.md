# Backend API Documentation

## Endpoints

### POST /users/registor

Registers a new user.

#### Request

-   **URL**: `/users/registor`
-   **Method**: `POST`
-   **Headers**:
    -   `Content-Type: application/json`
-   **Body**:

    ```json
    {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "password123"
    }
    ```

#### Response

-   **Success**:
    -   **Status Code**: `201 Created`
    -   **Body**:

        ```json
        {
            "token": "jwt_token",
            "user": {
                "_id": "user_id",
                "fullname": {
                    "firstname": "John",
                    "lastname": "Doe"
                },
                "email": "john.doe@example.com",
                "socketId": null
            }
        }
        ```

-   **Validation Errors**:
    -   **Status Code**: `400 Bad Request`
    -   **Body**:

        ```json
        {
            "errors": [
                {
                    "msg": "Invalid Email",
                    "param": "email",
                    "location": "body"
                },
                {
                    "msg": "First name must be atleast 3 characteras long",
                    "param": "fullname.firstname",
                    "location": "body"
                },
                {
                    "msg": "Password must be six characters long",
                    "param": "password",
                    "location": "body"
                }
            ]
        }
        ```

-   **Missing Fields**:
    -   **Status Code**: `400 Bad Request`
    -   **Body**:

        ```json
        {
            "errors": [
                {
                    "msg": "All fields are required"
                }
            ]
        }
        ```

## Setup

1.  Clone the repository.
2.  Install dependencies:

    ```sh
    npm install
    ```
3.  Create a [.env](http://_vscodecontentref_/0) file with the following content:

    ```
    DB_CONNECT = mongodb://0.0.0.0/uber-video
    JWT_SECRET = uber-video-secret
    ```
4.  Start the server:

    ```sh
    npm start
    ```

## Dependencies

-   bcrypt
-   cors
-   dotenv
-   express
-   express-validator
-   jsonwebtoken
-   mongoose