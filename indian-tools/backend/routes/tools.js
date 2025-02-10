const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
  getTools,
  getToolById,
  createTool,
  updateTool,
  deleteTool
} = require('../controllers/toolsController');

router.get('/', getTools);
router.get('/:id', getToolById);
router.post('/', auth, createTool);
router.put('/:id', auth, updateTool);
router.delete('/:id', auth, deleteTool);

module.exports = router;