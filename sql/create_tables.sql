-- To run the file, use the psql command to enter the database. 
-- After use /i "FILE_PATH_HERE" with forward slashes.

-- Resetting the database
DROP TABLE IF EXISTS EVENTS;
DROP TABLE IF EXISTS TRIPS;
DROP TYPE IF EXISTS EventTag;
DROP EXTENSION IF EXISTS "uuid-ossp";
-- Database Table Creation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TYPE EventTag AS ENUM('Anime', 'Nature', 'Attractions', 'Religious Architecture', 'Food', 'Shopping');

CREATE TABLE TRIPS(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    trip_name VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    photo VARCHAR(100) NOT NULL
);

CREATE TABLE EVENTS(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    trip_id UUID REFERENCES TRIPS(id),
    event_name VARCHAR(50) NOT NULL,
    address VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    photo VARCHAR(100) NOT NULL,
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    event_tag EventTag NOT NULL
);
