# Fullstack Technical Test - ContactBook-App-v2

Note: This version is a refactor of [**ContactBook-App v.1.0**](https://github.com/SoyDiego/ContactBook-App/tree/v1.0) separating frontend and backend.

## Specifications

-   We want a React + Ruby on Rails application that allows you to create, read,
    update and delete a list of contacts.
-   Each contact will have: First name, Last name, Email, and phone number.
-   All the fields are mandatory and there can’t be two contacts with the same
    email.
-   The contacts will be persisted in the database.

## Technologies

-   React JS (Frontend)
-   Ruby on Rails (Backend)

## API Endpoints

| Name                   | Description              | Methods        |
| ---------------------- | ------------------------ | -------------- |
| `/api/v1/contacts`     | Add and Get contacts     | `GET` `POST`   |
| `/api/v1/contacts/:id` | Edit and Delete contacts | `PUT` `DELETE` |

## Schemas

### Contacts

| Name         | Type       |
| ------------ | ---------- |
| `firstName`  | `string`   |
| `lastName`   | `string`   |
| `email`      | `string`   |
| `phone`      | `string`   |
| `created_at` | `datetime` |
| `updated_at` | `datetime` |

## Installation

### Frontend

```
yarn install
```

Then replace paths `process.env.REACT_APP_API_URL` to `http://127.0.0.1:4000` on the next files:

```
src/components/Main.js
src/components/ContactList.js
```

Or create a file `.env.development` in the **root folder** with the next line:

```
REACT_APP_API_URL=http://127.0.0.1:4000
```

### Backend

```
cd backend
yarn install
```

## Run

```
rails s -p 4000
```

Finally visit http://localhost:3000. :)

## Demo

https://contactbook-app-v2.netlify.app/

![Screenshot](https://i.imgur.com/NP4EfRX.png)
