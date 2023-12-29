const importService = require('../services/importService');

const importAccounts = async (req, res) => {
  try {
    await importService.insertAccounts();
    res.status(200).json({ message: 'Contas importadas com sucesso.' });
  } catch (error) {
    console.error('Erro ao importar contas:', error);
    res.status(500).json({ error: 'Erro ao importar contas' });
  }
};

module.exports = {
  importAccounts
};
