var express = require('express');
var router = express.Router();
const kittiesCtrl = require('../controllers/api/kitties')

router.get('/kitties', kittiesCtrl.index)
router.get('/kitties/:id', kittiesCtrl.show)
router.post('/kitties', kittiesCtrl.create)
router.delete('/kitties/:id', kittiesCtrl.delete)
router.put('/kitties/:id', kittiesCtrl.update)

module.exports = router
