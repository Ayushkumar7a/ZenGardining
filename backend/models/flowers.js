const { Schema, model } = require('mongoose');

const flowerSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = model("flowerSchema", flowerSchema);