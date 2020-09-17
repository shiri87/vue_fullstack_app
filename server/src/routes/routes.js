const express = require('express')
const router = express.Router()
const meController = require('../controllers/meController')
//routes
router.get('/me', meController.getMe
)
router.post('/me', meController.postMe
)
router.put('/me', meController.putMe
)
router.delete('/me', meController.deleteMe
)

module.exports = router