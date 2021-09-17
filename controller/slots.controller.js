import express from 'express';
import Slots from '../model/slots.model.js';

const router = express.Router();

export const getSlots = async (req, res) => {
    try {
        const slots = await Slots.find();
        if (slots.length <= 0) {
            // create dummy slots
            let dummySlots = [
                { slot: 9, firstName: "", lastName: "", phone: "" },
                { slot: 10, firstName: "", lastName: "", phone: "" },
                { slot: 11, firstName: "", lastName: "", phone: "" },
                { slot: 12, firstName: "", lastName: "", phone: "" },
                { slot: 1, firstName: "", lastName: "", phone: "" },
                { slot: 2, firstName: "", lastName: "", phone: "" },
                { slot: 3, firstName: "", lastName: "", phone: "" },
                { slot: 4, firstName: "", lastName: "", phone: "" },
                { slot: 5, firstName: "", lastName: "", phone: "" }
            ];

            // save multiple documents to the collection referenced by Book Model
            Slots.collection.insert(dummySlots, function (err, docs) {
                if (err) {
                    return console.error(err);
                } else {
                    res.status(200).json(docs);
                    return
                }
            });

        }
        res.status(200).json(slots);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const setSlot = async (req, res) => {
    const slotDetails = req.body;
    try {
        await Slots.findByIdAndUpdate(slotDetails._id, slotDetails)

        res.status(200).json({ message: "Slot updated" })
        // console.log(slots)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message });
    }
}
export default router;