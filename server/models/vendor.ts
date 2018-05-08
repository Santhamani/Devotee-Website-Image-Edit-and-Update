
import * as mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
    vendortype: String,
    vendorname: String,
    shoplocation: String,
    shopaddress: String,
    shopcontactnumber:String
});

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;