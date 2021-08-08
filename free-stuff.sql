DROP DATABASE IF EXISTS free_stuff;

CREATE DATABASE free_stuff;

\c free_stuff;

DROP TABLE IF EXISTS potential_clients, email_address;

CREATE TABLE potential_clients (
    id serial PRIMARY KEY, 
    full_name TEXT NOT NULL,
    phone_number INTEGER,
    email TEXT NOT NULL,
    comments TEXT
);

-- email is not FK just in case the user wants to use another email (point is capturing emails)
CREATE TABLE email_address (
    id serial PRIMARY KEY,
    email TEXT
);

