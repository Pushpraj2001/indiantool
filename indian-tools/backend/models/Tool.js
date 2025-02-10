const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true,
    enum: ['text', 'ai', 'conversion']
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true,
    unique: true
  },
  active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Tool', ToolSchema);