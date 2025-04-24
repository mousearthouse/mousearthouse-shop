const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

app.get('/api/category', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    res.json({ categories: result.rows });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/category/:categoryId/items', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM items WHERE category_id = $1', [categoryId]);
    const categoryResult = await pool.query('SELECT * FROM categories WHERE id = $1', [categoryId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No items found for this category' });
    }

    const categoryName = categoryResult.rows.length > 0 ? categoryResult.rows[0].name : null;

    res.json({ categoryName, items: result.rows });

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

app.post('/api/favorites', async (req, res) => {
  const { ids } = req.body;
  console.log(ids)
  if (ids.length === 0) {
      return res.json([]);
  }

  try {
      const result = await pool.query(
          'SELECT * FROM items WHERE id = ANY($1)', [ids]
      );
      res.json({ items: result.rows} );
      console.log(result.rows)
  } catch (error) {
      console.error('Error fetching favorite items:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
