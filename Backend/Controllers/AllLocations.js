const express = require('express');
const router = express.Router();

const connection = require('../database');

router.get('/quality/locations', (req, res) => {
    let sql = `SELECT
    loc.Loc_name,
    loc.Link,
    loc.Loc_ID,
    loc.Percentage_Purity,
    loc.Water_Purity_Status
    FROM (
        SELECT
            l.Loc_name,
            l.Link,
            sp.Loc_ID,
            CONCAT(ROUND((SUM(CASE WHEN m.value >= q.MinValue AND m.value <= q.MaxValue THEN 1 ELSE 0 END) / COUNT(*)) * 100, 2), '%') AS Percentage_Purity,
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
                l.Loc_name, sp.Loc_ID
        ) AS loc
    ORDER BY
        CASE WHEN loc.Water_Purity_Status = 'Pure' THEN 0 ELSE 1 END, loc.Percentage_Purity DESC
    LIMIT 6;`;

    connection.query(sql, (err, data) => {
        if (err) return res.json(err);
        else return res.json(data);
    });
})


module.exports = router