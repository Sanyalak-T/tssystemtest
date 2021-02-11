const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  companyname: { type: String, required: true},
  remark: { type: String, required: true}
});

module.exports = mongoose.model('Company', companySchema);
