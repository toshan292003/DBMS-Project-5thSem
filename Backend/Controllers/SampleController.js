const express = require('express');
const router = express.Router();

const connection = require('../database');

router.post('/sample', (req, res) => {
  const { Samp_ID, Loc_ID ,latitude,longitude} = req.body;
  const query = 'INSERT INTO testingdb.sampling_point VALUES(?,?,?,?)';
  connection.query(query, [Samp_ID, latitude, longitude, Loc_ID], (err, result) => {
    if (err) {
      console.log(err)
      console.error('Error inserting data into MySQL:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).send('Data inserted successfully');
  });
});

module.exports = router;