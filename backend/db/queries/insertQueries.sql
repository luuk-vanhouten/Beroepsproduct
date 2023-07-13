// Hier staan de SQL statements die gebruikt zijn voor het vullen van de database.
// Deze staan hier alleen voor eigen gebruik, mocht er later iets mis gaan met de database.

INSERT INTO customer (first_name, last_name, email, phone_number, address, city, state, zip_code, country) 
VALUES 
    ("John", "Doe", "johndoe@real.com", "wachtwoord123", "0612345678", "Handelskade 75", "Deventer", "Overijssel", "7417 DH", "Nederland"),
    ("Jane", "Doe", "janedoe@real.com", "wachtwoord123", "0687654321","Handelskade 75", "Deventer", "Overijssel", "7417 DH", "Nederland");

INSERT INTO category (category_name)
VALUES 
    ("Motorblok onderdelen"),
    ("Versnellingsbak onderdelen"),
    ("Uitlaat"),
    ("Remmen"),
    ("Ophanging"),
    ("Velgen"),
    ("Banden"),
    ("Interieur"),
    ("Exterieur"),
    ("Electronica"),
    ("Accessoires");


INSERT INTO product (name, description, price, category_id)
VALUES 
    ("Honda B16B", "Dit is een Honda B16B motorblok uit het jaar 1998.", 1000.00, 1),
    ("Honda S4C", "Dit is een Honda S4C versnellingsbak uit het jaar 1998.", 2000.00, 2),
    ("Exedy Stage 1 koppelingsset", "Dit is een Exedy Stage 1 koppelingsset.", 3000.00, 2),
    ("SRS 4-2-1 Spruitstuk", "Dit is een SRS 4-2-1 spruitstuk.", 3000.00, 3),
    ("SRS Catback uitlaat", "Dit is een SRS Catback uitlaat systeem.", 3000.00, 3),
    ("EBC Redstuff remblokken", "Dit zijn EBC remblokken.", 4000.00, 4),
    ("EBC GD Series remschijven", "Dit zijn EBC remschijven.", 4000.00, 4),
    ("BC Racing A-03-RH Schroefset ", "Dit is een BC Racing schroefset.", 5000.00, 5),
    ("Enkei RPF1 velgen", "Dit zijn Enkei RPF1 velgen.", 6000.00, 6),
    ("Nankang NS-R2 semi-slick banden", "Dit zijn Nankang NS-2R semi-slick banden.", 7000.00, 7),
    ("Momo stuur", "Dit is een Momo stuur.", 8000.00, 8),
    ("Bomex Type-R Spoiler", "Dit is een Bomex Type-R spoiler.", 9000.00, 9),
    ("OEM Honda blackhousing koplampen", "Dit zijn OEM Honda blackhousing koplampen.", 10000.00, 10),
    ("Luchtverfrisser", "Dit is een luchtverfrisser.", 11000.00, 11);


INSERT INTO orders (customer_id, order_date, order_total) 
VALUES 
    (1, "2023-01-01", 100.00),
    (1, "2023-01-02", 200.00),
    (2, "2023-01-03", 300.00),
    (2, "2023-01-04", 400.00);

INSERT INTO order_product (order_id, product_id, quantity)
VALUES
    (1, 1, 1),
    (1, 2, 2),
    (2, 3, 3),
    (2, 4, 4),
    (3, 5, 5),
    (3, 6, 6),
    (4, 7, 7),
    (4, 8, 8);