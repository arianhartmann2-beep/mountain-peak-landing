<?php
/**
 * Mountain SMP - News API Endpoint
 * 
 * GET /api/news.php - Returns all news entries as JSON
 * 
 * Usage on Strato hosting:
 * 1. Upload this file and db_config.php to your /api folder
 * 2. Update db_config.php with your Strato MySQL credentials
 * 3. Create the news table using the SQL in db_config.php
 * 4. Access via: https://yourdomain.com/api/news.php
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'db_config.php';

try {
    $db = getDbConnection();
    
    if (!$db) {
        throw new Exception('Database connection failed');
    }
    
    $stmt = $db->prepare("SELECT id, title, content, category, created_at as date FROM news ORDER BY created_at DESC LIMIT 20");
    $stmt->execute();
    $news = $stmt->fetchAll();
    
    // Format dates for frontend
    foreach ($news as &$item) {
        $item['date'] = date('Y-m-d', strtotime($item['date']));
    }
    
    echo json_encode([
        'success' => true,
        'data' => $news
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to fetch news',
        'message' => $e->getMessage()
    ]);
}
?>