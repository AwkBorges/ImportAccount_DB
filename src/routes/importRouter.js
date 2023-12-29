const express = require('express');
const router = express.Router();
const importController = require('../controllers/importController');

// Rota para conversão do arquivo TXT e salvar no MongoDB
router.post('/convert', importController.importAccounts);

module.exports = router;
