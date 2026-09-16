-- database.queries.sql

CREATE DATABASE quality_tracker;

CREATE SCHEMA arvind;

CREATE TABLE arvind.inspections (
    id BIGSERIAL PRIMARY KEY,
    inspection_date DATE NOT NULL,
    machine_id character varying(100) NOT NULL,
    defect_type character varying(50) NOT NULL,
    severity character varying(50) NOT NULL,
    remarks TEXT,
    status character varying(15) DEFAULT 'Open',
    resolution_note TEXT,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITHOUT TIME ZONE
);

