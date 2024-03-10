const express = require('express');
const router = express.Router();

const connection = require('../database');

router.post('/measurement', (req, res) => {
    const { Measure_ID, Sample_id,Param_id,TimeStamp,Value } = req.body;
    // Insert data into MySQL
    const query = 'INSERT INTO testingdb.measurement VALUES(?,?,?,?,?)';
    connection.query(query, [Measure_ID, Sample_id,Param_id,TimeStamp,Value], (err, result) => {
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