-- To run the file, use the psql command to enter the database. 
-- After use \i "FILE_PATH_HERE" with forward slashes.

-- Resetting the database
DROP TABLE IF EXISTS USER_EVENTS;
DROP TABLE IF EXISTS TRIP_EVENTS;
DROP TABLE IF EXISTS TRIP_USERS;
DROP TABLE IF EXISTS USERS;
DROP TABLE IF EXISTS EVENTS;
DROP TABLE IF EXISTS TRIPS;
DROP TYPE IF EXISTS EventTag;
DROP EXTENSION IF EXISTS "uuid-ossp";
-- Database Table Creation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE EventTag AS ENUM('Anime', 'Nature', 'Attractions', 'Religious Architecture', 'Food', 'Shopping');

CREATE TABLE USERS(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    avatar VARCHAR(100) NOT NULL
);

CREATE TABLE EVENTS(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    photo VARCHAR(100) NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    event_tag EventTag NOT NULL
);

CREATE TABLE TRIPS(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    trip_name VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    photo VARCHAR(100) NOT NULL
);

CREATE TABLE USER_EVENTS(
    user_id UUID REFERENCES USERS(id),
    event_id UUID REFERENCES EVENTS(id),
    PRIMARY KEY (user_id, event_id)
);

CREATE TABLE TRIP_EVENTS(
    trip_id UUID REFERENCES TRIPS(id),
    event_id UUID REFERENCES EVENTS(id),
    PRIMARY KEY (trip_id, event_id)
);

CREATE TABLE TRIP_USERS(
    trip_id UUID REFERENCES TRIPS(id),
    user_id UUID REFERENCES USERS(id),
    PRIMARY KEY (trip_id, user_id)
);

