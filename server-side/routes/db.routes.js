const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/:name', (req, res) => {
    const { name } = req.params;
    const obj = Object.keys(req.body).length ? req.body : [];
    fs.writeFileSync(`database/${name}.json`, JSON.stringify(obj, null, 2));
    res.send('ok');
})

router.get('/:name', (req, res) => {
    const { name } = req.params;
    const content = fs.readFileSync(`database/${name}.json`, 'utf-8');
    res.send(JSON.parse(content));
})

module.exports = router;