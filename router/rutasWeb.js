const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render("inicio", {titulo: "Mi titulo dinámico"})
})

module.exports = router
