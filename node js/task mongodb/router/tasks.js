const express = require('express')
const router = express.Router()

const {getalltask,createtask,gettask,deletetask,updatetask} = require('../controller/tasks')

router.route('/').get(getalltask).post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)

module.exports = router