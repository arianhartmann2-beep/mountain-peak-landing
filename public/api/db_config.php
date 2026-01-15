<?php
/**
 * Mountain SMP - Database Configuration for Strato Hosting
 * 
 * This file provides the database connection for fetching news entries.
 * Replace the placeholder values with your actual Strato MySQL credentials.
 */

// Database credentials (update these with your Strato MySQL details)
define('DB_HOST', 'rdbms.strato.de'); // Strato's MySQL host
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
define('DB_CHARSET', 'utf8mb4');

/**
 * Get database connection
 * @return PDO|null Returns PDO instance or null on failure
 */
function getDbConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];
        return new PDO($dsn, DB_USER, DB_PASS, $options);
    } catch (PDOException $e) {
        error_log("Database connection failed: " . $e->getMessage());
        return null;
    }
}

/*
 * SQL to create the news table:
 * 
 * CREATE TABLE news (
 *     id INT AUTO_INCREMENT PRIMARY KEY,
 *     title VARCHAR(255) NOT NULL,
 *     content TEXT NOT NULL,
 *     category VARCHAR(50) DEFAULT 'Update',
 *     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 *     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
 * ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 */
?>