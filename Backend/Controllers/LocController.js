const express = require('express');
const router = express.Router();

const connection = require('../database');

router.post('/location', (req, res) => {
    const { LocID, lat,long,LocName } = req.body;
    // Insert data into MySQL
    const query = 'INSERT INTO testingdb.location VALUES(?,?,?,?)';
    connection.query(query, [LocID, lat,long,LocName], (err, result) => {
      if (err) {
        console.error('Error inserting data into MySQL:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      console.log('Data inserted successfully');
      res.status(200).send('Data inserted successfully');
    });
  });

module.exports = router;