const fs = require('fs');
const path = require('path');
const Account = require('../models/Account');
const filePath = path.join(__dirname, '../database/importar.txt');

const insertAccounts = async () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');

    for (const line of lines) {
      const [
        server,
        username,
        password,
        level,
        ea,
        nickname,
        email,
        nascimento,
        criacao,
        provedor,
        skinsStr
      ] = line.split('#');

      const skins = skinsStr.split('-');

      const account = new Account({
        server,
        username,
        password,
        level: parseInt(level),
        ea: parseInt(ea),
        nickname,
        email,
        nascimento,
        criacao,
        provedor,
        skins
      });

      const savedAccount = await account.save();
      console.log('Conta inserida com sucesso:', savedAccount);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  insertAccounts
};
