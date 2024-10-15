import express from 'express';

import {saveUser} from '../controllers/CreateUserAccount.js'

const router = express.Router();

router.post('/', saveUser);

export default router;