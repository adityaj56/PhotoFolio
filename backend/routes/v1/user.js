const express = require('express');
const router = express.Router();

const userApi = require('../../controllers/v1/userApi');

router.post('/sign-up', userApi.signUp);

module.exports = router;