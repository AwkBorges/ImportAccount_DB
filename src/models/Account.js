const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  server: String,
  username: String,
  password: String,
  level: Number,
  ea: Number,
  nickname: String,
  email: String,
  nascimento: String,
  criacao: String,
  provedor: String,
  skins: [String]
}, { collection: 'contas' });
  
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;