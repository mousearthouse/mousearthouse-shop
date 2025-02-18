const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');


const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Shop',
  password: 'helpme',
  port: 5432,
});

app.use(cors());

app.get('/api/category', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/category/:categoryId/items', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM items WHERE category_id = $1', [categoryId]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No items found for this category' });
    }
    res.json({ items: result.rows });

  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/item/:itemId', async (req, res) => {
  const { itemId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM items WHERE id = $1', [itemId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ item: result.rows[0]});
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
