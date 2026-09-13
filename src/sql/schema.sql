-- =========================================================
-- Organization Management System — Database Schema
-- PostgreSQL 14+
-- Do NOT modify this schema. Your application adapts to it.
-- =========================================================


-- =========================================================
-- Organizations (top level)
-- =========================================================

CREATE TABLE organizations (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    code       VARCHAR(20)  NOT NULL UNIQUE,
    status     VARCHAR(10)  NOT NULL DEFAULT 'ACTIVE'
               CHECK (status IN ('ACTIVE', 'INACTIVE')),
    created_at TIMESTAMPTZ  NOT NULL DEFAULT now()
);


-- =========================================================
-- Subsidiaries belong to an organization
-- =========================================================

CREATE TABLE subsidiaries (
    id              SERIAL PRIMARY KEY,
    organization_id INT
                    NOT NULL REFERENCES organizations(id),
    name            VARCHAR(255) NOT NULL,
    code            VARCHAR(20)  NOT NULL,
    country         VARCHAR(100),
    status          VARCHAR(10)  NOT NULL DEFAULT 'ACTIVE'
                    CHECK (status IN ('ACTIVE', 'INACTIVE')),
    created_at      TIMESTAMPTZ  NOT NULL DEFAULT now(),

    -- code unique within its organization
    UNIQUE (organization_id, code)
);


-- =========================================================
-- Users belong to exactly one subsidiary
-- (and therefore to one organization)
-- =========================================================

CREATE TABLE users (
    id            SERIAL PRIMARY KEY,
    subsidiary_id INT
                  NOT NULL REFERENCES subsidiaries(id),
    email         VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name     VARCHAR(255) NOT NULL,
    role          VARCHAR(20) NOT NULL DEFAULT 'MEMBER'
                  CHECK (role IN ('SUPER_ADMIN', 'ORG_ADMIN', 'MEMBER')),
    status        VARCHAR(10) NOT NULL DEFAULT 'ACTIVE'
                  CHECK (status IN ('ACTIVE', 'INACTIVE')),
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);


-- =========================================================
-- Indexes for the queries you will write constantly
-- =========================================================

CREATE INDEX idx_subsidiaries_org
    ON subsidiaries (organization_id);

CREATE INDEX idx_users_subsidiary
    ON users (subsidiary_id);

CREATE INDEX idx_users_email
    ON users (email);
