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
    username VARCHAR(16),
    avatar VARCHAR(100)
);

CREATE TABLE EVENTS(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_name VARCHAR(50),
    address VARCHAR(255),
    description VARCHAR(500),
    photo VARCHAR(100),
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    event_tag EventTag
);

CREATE TABLE TRIPS(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    trip_name VARCHAR(50),
    start_date DATE,
    end_date DATE,
    photo VARCHAR(100)
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

