const express = require('express');
const router = express.Router();

const connection = require('../database');

router.get('/quality/locations', (req, res) => {
    let sql = `SELECT
    l.Loc_name,
    sp.Loc_ID,
    CASE
        WHEN COUNT(*) = 0 THEN 'No Measurements'
        ELSE
            CONCAT(ROUND((SUM(CASE WHEN m.value >= q.MinValue AND m.value <= q.MaxValue THEN 1 ELSE 0 END) / COUNT(*)) * 100, 2), '%')
    END AS Percentage_Purity,
    CASE
        WHEN COUNT(*) = SUM(CASE WHEN m.value >= q.MinValue AND m.value <= q.MaxValue THEN 1 ELSE 0 END) THEN 'Pure'
        ELSE 'Not Pure'
    END AS Water_Purity_Status
    FROM
        testingdb.location l
    INNER JOIN
        testingdb.sampling_point sp ON l.Loc_ID = sp.Loc_ID
    INNER JOIN
        testingdb.measurement m ON sp.Samp_ID = m.Sample_id
    INNER JOIN
        testingdb.quality q ON m.Param_id = q.Param_ID
    GROUP BY
    l.Loc_name, sp.Loc_ID;`;

    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else return res.json(data);
    });
})


module.exports = router