const express = require('express');
const router = express.Router();

const connection = require('../database');

router.post('/parameter', (req, res) => {
    const { paramID, unit, name } = req.body;
    // Insert data into MySQL
    const query = 'INSERT INTO testingdb.parameter VALUES(?,?,?)';
    connection.query(query, [ paramID, unit,name ], (err, result) => {
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