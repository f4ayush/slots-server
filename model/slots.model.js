import mongoose from 'mongoose';

const slotSchema = mongoose.Schema({
    slot: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
})

var Slots = mongoose.model('Slots', slotSchema);

export default Slots;