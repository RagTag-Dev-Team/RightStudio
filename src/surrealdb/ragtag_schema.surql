-- ------------------------------
-- OPTION
-- ------------------------------

OPTION IMPORT;

-- ------------------------------
-- TABLE: account
-- ------------------------------

DEFINE TABLE account SCHEMAFULL PERMISSIONS NONE;

DEFINE FIELD wallet_address ON account TYPE string;
DEFINE FIELD role ON account TYPE string;
DEFINE FIELD firstname ON account TYPE option<string>;
DEFINE FIELD lastname ON account TYPE option<string>;
DEFINE FIELD email ON account TYPE option<string>;
DEFINE FIELD accessToken ON account TYPE object;
DEFINE FIELD created_date ON account TYPE datetime;

-- ------------------------------
-- TABLE: catalog
-- ------------------------------

DEFINE TABLE catalog SCHEMAFULL PERMISSIONS NONE;

DEFINE FIELD id ON catalog TYPE string ;
DEFINE FIELD owner_id ON catalog TYPE string;
DEFINE FIELD total_assets ON catalog TYPE decimal;
DEFINE FIELD value ON catalog TYPE decimal;
DEFINE FIELD created_date ON catalog TYPE datetime;


-- ------------------------------
-- TABLE: album
-- ------------------------------

DEFINE TABLE album SCHEMAFULL PERMISSIONS NONE;


DEFINE FIELD id ON album TYPE string ;
DEFINE FIELD owner_id ON album TYPE string;
DEFINE FIELD ragtag_id ON album TYPE string;
DEFINE FIELD metadata ON album TYPE object;
DEFINE FIELD rights ON album TYPE object;
DEFINE FIELD licenses ON album TYPE object;
DEFINE FIELD name ON album TYPE string;
DEFINE FIELD type ON album TYPE string;
DEFINE FIELD size ON album TYPE number;
DEFINE FIELD created_date ON album TYPE datetime;


-- ------------------------------
-- TABLE: single_track
-- ------------------------------

DEFINE TABLE single_track SCHEMAFULL PERMISSIONS NONE;

DEFINE FIELD id ON single_track TYPE string ;
DEFINE FIELD owner_id ON single_track TYPE string;
DEFINE FIELD ragtag_id ON single_track TYPE string;
DEFINE FIELD metadata ON single_track TYPE object;
DEFINE FIELD rights ON single_track TYPE object;
DEFINE FIELD licenses ON single_track TYPE object;
DEFINE FIELD name ON single_track TYPE string;
DEFINE FIELD type ON single_track TYPE string;
DEFINE FIELD size ON single_track TYPE number;

-- ------------------------------
-- TABLE: stem
-- ------------------------------

DEFINE TABLE stem SCHEMAFULL PERMISSIONS NONE;

DEFINE FIELD id ON stem TYPE string ;
DEFINE FIELD owner_id ON stem TYPE string;
DEFINE FIELD ragtag_id ON stem TYPE string;
DEFINE FIELD metadata ON stem TYPE object;
DEFINE FIELD rights ON stem TYPE object;
DEFINE FIELD licenses ON stem TYPE object;
DEFINE FIELD name ON stem TYPE string;
DEFINE FIELD type ON stem TYPE string;
DEFINE FIELD size ON stem TYPE number;



-- ------------------------------
-- TABLE: metadata
-- ------------------------------

DEFINE TABLE metadata SCHEMAFULL PERMISSIONS NONE;
DEFINE FIELD id ON metadata TYPE string ;
DEFINE FIELD ragtag_id ON metadata TYPE string;
DEFINE FIELD track_id ON metadata TYPE string;
DEFINE FIELD common ON metadata TYPE object;
DEFINE FIELD format ON metadata TYPE object;
DEFINE FIELD native ON metadata TYPE object;


-- ------------------------------
-- TABLE: right
-- ------------------------------
DEFINE TABLE right SCHEMALESS PERMISSIONS NONE;
DEFINE FIELD ragtag_id ON right TYPE string;
DEFINE FIELD owner_id ON right TYPE string;
DEFINE FIELD contract_id ON right TYPE string;


-- ------------------------------
-- TABLE: license
-- ------------------------------
DEFINE TABLE license SCHEMALESS PERMISSIONS NONE;
DEFINE FIELD ragtag_id ON license TYPE string;
DEFINE FIELD owner_id ON license TYPE string;
DEFINE FIELD contract_id ON license TYPE string;
DEFINE FIELD issuer_id ON license TYPE string;
DEFINE FIELD created_date ON license TYPE datetime;
DEFINE FIELD expiration_date ON license TYPE string;
DEFINE FIELD type ON license TYPE string;


-- ------------------------------
-- TABLE: contract
-- ------------------------------
DEFINE TABLE license SCHEMALESS PERMISSIONS NONE;
DEFINE FIELD id ON contract TYPE string;
DEFINE FIELD owner_id ON license TYPE string;
DEFINE FIELD ragtag_id ON license TYPE string;



-- ------------------------------
-- TRANSACTION
-- ------------------------------

BEGIN TRANSACTION;

-- ------------------------------
-- TABLE DATA: account
-- ------------------------------

-- UPDATE artist:00b2pg847d7b8r08t08t CONTENT { address: { address_line_1: '816 Cravenny', address_line_2: NONE, city: 'Malvern', coordinates: [9.854998, -0.731803], country: 'England', post_code: 'HO1D 8WY' }, company_name: NONE, email: 'acute2086@protonmail.com', first_name: 'Lasonya', id: artist:00b2pg847d7b8r08t08t, last_name: 'Spears', name: 'Lasonya Spears', phone: '0800 085411' };

-- ------------------------------
-- TABLE DATA: catalog
-- ------------------------------

-- UPDATE avg_product_review:026qhtw3r8lhjhj7gc8q CONTENT { avg_review: 5, id: avg_product_review:026qhtw3r8lhjhj7gc8q, number_of_reviews: 1, product: 'miscellaneous phone' };

-- ------------------------------
-- TABLE DATA: album
-- ------------------------------

-- RELATE artist:70l5ea927k8g0d98p54d -> create:00b3fs963m5j0a12q44w -> product:49y6hz025a6q7b34f12z CONTENT { __: true, id: create:00b3fs963m5j0a12q44w, in: artist:70l5ea927k8g0d98p54d, out: product:49y6hz025a6q7b34f12z, product_name: 'utilities seen sh secure', quantity: 3 };

-- ------------------------------
-- TABLE DATA: single_track
-- ------------------------------

-- UPDATE daily_sales:009lql0imrsh94fb8h2s CONTENT { currency: '£', day: '2023-11-28', id: daily_sales:009lql0imrsh94fb8h2s, number_of_orders: 28, sum_sales: 558374.63 };

-- ------------------------------
-- TABLE DATA: stem
-- ------------------------------

-- RELATE person:24y4fj273i6u1h70m77d -> order:['England', '2023-01-01T03:43:28.580549'] -> product:09k0lq881w5a6m57l55n CONTENT { __: true, currency: '£', discount: NONE, id: order:['England', '2023-01-01T03:43:28.580549'], in: person:24y4fj273i6u1h70m77d, order_date: '2023-01-01T03:43:28.580549', order_status: 'pending', out: product:09k0lq881w5a6m57l55n, payment_method: 'PayPal', price: 24694.42, product_name: 'football metabolism', quantity: 2, shipping_address: { address_line_1: '358 Glenhill', address_line_2: NONE, city: 'Barrhead', coordinates: [51.279445, 96.974605], country: 'England', post_code: 'UI1F 5MZ' } };

-- ------------------------------
-- TABLE DATA: metadata
-- ------------------------------

-- UPDATE product:00a2xf120s1z7q52f69z CONTENT { category: 'oil paint', currency: '£', description: 'refer whom dodge kb bike sponsors ct integration clips columbia crystal bottle del epson more', discount: 0.4, id: product:00a2xf120s1z7q52f69z, image_url: 'https://source.unsplash.com/1920x1080?', name: 'oct viagra below', price: 16944.01, quantity: 8 };

-- ------------------------------
-- TABLE DATA: right
-- ------------------------------

UPDATE review:00a0ic854u4j7z02s00v CONTENT { artist: artist:73z6oc419v1c5v34j20x, id: review:00a0ic854u4j7z02s00v, person: person:67s8cp304i4p6p83q02d, product: product:41v2qv923h3o7s55e96l, rating: 3, review_text: 'repeat languages tr rest hospital consulting infrastructure melissa proposal singing finally hey eggs left market title yards identify movement themselves existing lake questions exchange meter strip up archive interview rather mostly transit stuff attitude fundamental palestinian estate cast yours eye lawyer academy sunset holy gang' };

-- ------------------------------
-- TABLE DATA: license
-- ------------------------------

UPDATE review:00a0ic854u4j7z02s00v CONTENT { artist: artist:73z6oc419v1c5v34j20x, id: review:00a0ic854u4j7z02s00v, person: person:67s8cp304i4p6p83q02d, product: product:41v2qv923h3o7s55e96l, rating: 3, review_text: 'repeat languages tr rest hospital consulting infrastructure melissa proposal singing finally hey eggs left market title yards identify movement themselves existing lake questions exchange meter strip up archive interview rather mostly transit stuff attitude fundamental palestinian estate cast yours eye lawyer academy sunset holy gang' };

-- ------------------------------
-- TRANSACTION
-- ------------------------------

COMMIT TRANSACTION;

