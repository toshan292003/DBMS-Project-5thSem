const express = require('express');
const router = express.Router();

const connection = require('../database');

router.post('/measurement', (req, res) => {
  const { Measure_ID, Sample_id, Param_id, Value } = req.body;
  const now = new Date();

  // Get the current hour, minute, and second
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Format the time as a string
  const TimeStamp = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;

    // Insert data into MySQL
    const query = 'INSERT INTO testingdb.measurement VALUES(?,?,?,?,?)';
  connection.query(query, [Measure_ID, Sample_id, Param_id, TimeStamp, Value], (err, result) => {
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