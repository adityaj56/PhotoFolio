const express = require('express');
const router = express.Router();

const userApi = require('../../controllers/v1/userApi');

router.post('/sign-up', userApi.signUp);
router.post('/create-session', userApi.createSession);

module.exports = router;