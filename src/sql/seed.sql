-- =========================================================
-- Seed Organizations
-- 3 organizations
-- =========================================================

INSERT INTO organizations (name, code)
VALUES
    ('Acme Group',     'ACME'),
    ('Nordic Travel',  'NORD'),
    ('Sunrise Corp',   'SUNR');


-- =========================================================
-- Seed Subsidiaries
-- ~7 subsidiaries across the organizations
-- =========================================================

INSERT INTO subsidiaries (
    organization_id,
    name,
    code,
    country
)
VALUES
    (1, 'Acme Vietnam',     'ACME-VN', 'Vietnam'),
    (1, 'Acme Singapore',  'ACME-SG', 'Singapore'),
    (1, 'Acme Thailand',   'ACME-TH', 'Thailand'),
    (2, 'Nordic Finland',   'NORD-FI', 'Finland'),
    (2, 'Nordic Sweden',    'NORD-SE', 'Sweden'),
    (3, 'Sunrise Japan',    'SUNR-JP', 'Japan'),
    (3, 'Sunrise Korea',    'SUNR-KR', 'South Korea');
