const mongoose = require('mongoose');

const McuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        debutFilm: {
            type: String,
        },
        debutYear: {
            type: Number
        }
    }
)

const Mcu = mongoose.model('Mcu', McuSchema);

module.exports = Mcu;