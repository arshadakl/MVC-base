const express = require('express')
const router = express()
const bodyParser = require("body-parser")

router.set('view engine', 'ejs');
router.set('views','./views/user/')



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:true}))


module.exports = router