const express = require('express');
const router = express.Router();

const connection = require('../database');

router.post('/quality', (req, res) => {
  const { Std_ID,Param_id,Description,MinValue,MaxValue } = req.body;
    // Insert data into MySQL
    const query = 'INSERT INTO testingdb.quality VALUES(?,?,?,?,?)';
  connection.query(query, [Std_ID,Param_id,Description,MinValue,MaxValue], (err, result) => {
    if (err) {
      console.log
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  });
});

module.exports = router;