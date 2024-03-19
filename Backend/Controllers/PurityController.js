const express = require('express');
const router = express.Router();

const connection = require('../database');

router.post('/queries/location',(req,res)=>{
    const location = req.body.location;
    const parameter = req.body.parameter;
    console.log(location);
    console.log(parameter);
    
    let sql = ``;

    if(`${location}`=="All" && `${parameter}` == "All Parameters"){
        sql = `SELECT
        l.Loc_name,
        p.ParamName AS Parameter_Name,
        AVG(m.value) AS Readings,
        CONCAT(q.MinValue, ' - ', q.MaxValue) AS Standard_Values,
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
        INNER JOIN
            testingdb.parameter p ON q.Param_id = p.Param_id
        GROUP BY
            l.Loc_name, p.ParamName, CONCAT(q.MinValue, ' - ', q.MaxValue);`;
    }

    else if(`${location}` == "All"){
        sql = `SELECT
        l.Loc_name,
        p.ParamName AS Parameter_Name,
        AVG(m.value) AS Readings,
        CONCAT(q.MinValue, ' - ', q.MaxValue) AS Standard_Values,
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
        INNER JOIN
            testingdb.parameter p ON q.Param_id = p.Param_id
        WHERE
            p.ParamName = '${parameter}'
        GROUP BY
            l.Loc_name, p.ParamName, CONCAT(q.MinValue, ' - ', q.MaxValue);`;
    }

    else if(`${parameter}` == 'All Parameters'){
        sql = `SELECT
        l.Loc_name,
        p.ParamName AS Parameter_Name,
        AVG(m.value) AS Readings,
        CONCAT(q.MinValue, ' - ', q.MaxValue) AS Standard_Values,
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
        INNER JOIN
            testingdb.parameter p ON q.Param_id = p.Param_id
        WHERE
            l.Loc_name = '${location}'
        GROUP BY
            l.Loc_name, p.ParamName, CONCAT(q.MinValue, ' - ', q.MaxValue);`;
    }

    else{
        sql = `SELECT
            l.Loc_name,
            p.ParamName AS Parameter_Name,
            AVG(m.value) AS Readings,
            CONCAT(q.MinValue, ' - ', q.MaxValue) AS Standard_Values,
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
            INNER JOIN
                testingdb.parameter p ON q.Param_id = p.Param_id
            WHERE
                l.Loc_name = '${location}'
                AND p.ParamName = '${parameter}'
            GROUP BY
                l.Loc_name, p.ParamName, CONCAT(q.MinValue, ' - ', q.MaxValue);`;
    }

    connection.query(sql,(err,data)=>{
        if(err) return res.json(err);
        else{
            console.log(data);
            return res.json(data);
        } 
    });
});

module.exports = router