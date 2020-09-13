# Fullstack Technical Test - ContactBook-App

## Specifications

- We want a React + Ruby on Rails application that allows you to create, read, update and delete a list of contacts.  
- Each contact will have: First name, Last name, Email, and phone number. 
- All the fields are mandatory and there can’t be two contacts with the same email.  
- The contacts will be persisted in the database.

## Technologies

- React JS (Frontend)
- Ruby on Rails (Backend)

## API Endpoints

| Name                   | Description              | Methods        |
|------------------------|--------------------------|----------------|
| `/api/v1/contacts`     | Add and Get contacts     | `GET` `POST`   |
| `/api/v1/contacts/:id` | Edit and Delete contacts | `PUT` `DELETE` |  

## Schemas

### Contacts

| Name            | Type       | 
|-----------------|------------|
| `firstName`     | `string`   |
| `lastName`      | `string`   |
| `email`         | `string`   |
| `phone`         | `string`   |
| `created_at`    | `datetime` |
| `updated_at`    | `datetime` |


## Installation

```sh
yarn install
```

Then replace paths `https://contactbook-app.herokuapp.com` to `http://localhost:3000` on the next files:

```
app/javascript/components/Main.js
app/javascript/components/ContactList.js
```

## Run
```
rails s
```

Finally visit http://localhost:3000. :)

## Demo

https://contactbook-app.herokuapp.com/

![Screenshot](https://i.imgur.com/NP4EfRX.png)

