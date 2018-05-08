import * as mongoose from 'mongoose';

const vendorbankSchema = new mongoose.Schema({
    vendorid: String,
    vendorbankname: String,
    vendorbankaccno: String,
    ifsccode: String
});

const VendorBank = mongoose.model('VendorBank', vendorbankSchema);

export default VendorBank;