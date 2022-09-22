const { Router } = require('express');
const { isAuth } = require('../middlewares/isAuth');
const router = Router();

const ReceitasController = require('./controller');
const controller = new ReceitasController();

router.post('/', isAuth, (req, res) => controller.create(req, res));
router.get('/list', (req, res) => controller.list(req, res));
router.get('/:id', (req, res) => controller.detail(req, res));

module.exports = router;