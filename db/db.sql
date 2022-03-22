CREATE DATABASE appform_db;

use appform_db;

CREATE TABLE customer {
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
};

SHOW TABLES;

describe customer;
