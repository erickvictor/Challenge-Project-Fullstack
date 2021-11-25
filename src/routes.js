const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const budgetController = require('./controllers/budgetController');

router.get('/', homeController.indexView);
router.post('/save', budgetController.createBudget);

module.exports = router;
