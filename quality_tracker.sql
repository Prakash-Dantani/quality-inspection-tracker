CREATE DATABASE quality_tracker;
ALTER DATABASE quality_tracker OWNER TO postgres;

CREATE SCHEMA arvind;
ALTER SCHEMA arvind OWNER TO postgres;


CREATE TYPE public.inspection_defect_type AS ENUM (
    'Weave Defect',
    'Shade Variation',
    'Hole/Tear',
    'Count Deviation',
    'Other'
);
ALTER TYPE public.inspection_defect_type OWNER TO postgres;


CREATE TYPE public.inspection_severity AS ENUM (
    'Critical',
    'Major',
    'Minor'
);
ALTER TYPE public.inspection_severity OWNER TO postgres;


CREATE TYPE public.inspection_status AS ENUM (
    'Open',
    'Resolved'
);


ALTER TYPE public.inspection_status OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

CREATE TABLE arvind.inspections (
    id integer NOT NULL,
    inspection_date date NOT NULL,
    machine_id character varying(100) NOT NULL,
    defect_type character varying(50) NOT NULL,
    severity character varying(50) NOT NULL,
    remarks text,
    status character varying(15) DEFAULT 'Open'::character varying,
    resolution_note text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE arvind.inspections OWNER TO postgres;

CREATE SEQUENCE arvind.inspections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE arvind.inspections_id_seq OWNER TO postgres;

ALTER SEQUENCE arvind.inspections_id_seq OWNED BY arvind.inspections.id;


ALTER TABLE ONLY arvind.inspections ALTER COLUMN id SET DEFAULT nextval('arvind.inspections_id_seq'::regclass);


INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (3, '2026-08-12', 'LINE-01', 'Hole/Tear', 'Major', 'Fabric damaged near edge', 'Open', NULL, '2026-09-15 17:34:13.496611', NULL);
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (6, '2026-09-02', 'LINE-15', 'Hole/Tear', 'Minor', 'Fabric damaged near edge', 'Open', NULL, '2026-09-15 17:34:50.591453', NULL);
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (2, '2026-09-16', 'LINE-01', 'Hole/Tear', 'Major', 'Fabric damaged near edge', 'Open', NULL, '2026-09-15 17:34:04.59933', NULL);
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (1, '2026-09-15', 'LINE-01', 'Hole/Tear', 'Critical', 'Fabric damaged near edge', 'Resolved', 'Machine repaired and tested successfully.', '2026-09-15 17:33:56.668408', '2026-09-15 18:04:44.880781');
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (7, '2026-09-16', 'MACHINE-01', 'Hole/Tear', 'Minor', 'Rotation not working', 'Open', NULL, '2026-09-16 08:32:19.317875', NULL);
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (9, '2026-09-03', 'MACHINE-11', 'Hole/Tear', 'Major', 'Not working machine', 'Open', NULL, '2026-09-16 10:09:32.510588', NULL);
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (10, '2026-07-31', 'MACHINE-01', 'Hole/Tear', 'Major', 'Hangging Machine', 'Open', NULL, '2026-09-16 10:11:51.086444', NULL);
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (12, '2026-07-02', 'MACHINE-01', 'Hole/Tear', 'Minor', 'service', 'Open', NULL, '2026-09-16 10:16:25.540537', NULL);
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (11, '2026-09-06', 'MACHINE-12', 'Hole/Tear', 'Critical', 'Need to replace needle', 'Resolved', 'machine is working', '2026-09-16 10:12:30.059011', '2026-09-16 11:07:28.736283');
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (8, '2026-09-10', 'MACHINE-11', 'Hole/Tear', 'Critical', 'Power Supply issue', 'Resolved', 'issue solved', '2026-09-16 09:56:43.915047', '2026-09-16 11:07:43.51316');
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (5, '2026-08-26', 'LINE-15', 'Hole/Tear', 'Critical', 'Fabric damaged near edge', 'Resolved', 'Test done', '2026-09-15 17:34:37.672207', '2026-09-16 11:20:32.557385');
INSERT INTO arvind.inspections (id, inspection_date, machine_id, defect_type, severity, remarks, status, resolution_note, created_at, updated_at) VALUES (4, '2026-08-18', 'LINE-11', 'Hole/Tear', 'Major', 'Fabric damaged near edge', 'Resolved', 'Machine repaired and tested and work successfully. No more issue found in the machine. due to high power compressor make faulty we had replace it and machine is working fine.', '2026-09-15 17:34:23.168373', '2026-09-15 18:09:10.737906');


SELECT pg_catalog.setval('arvind.inspections_id_seq', 12, true);

ALTER TABLE ONLY arvind.inspections
    ADD CONSTRAINT inspections_pkey PRIMARY KEY (id);
