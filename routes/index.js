const express = require('express')

const router = express.Router();
const dogsRoutes = require('./dogs')

router.use('/api', dogsRoutes)

module.exports = router
