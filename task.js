const moongose = require('mongoose');

const taskSchema = new moongose.Schema({
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
});

module.exports = moongose.model('Task', taskSchema);
