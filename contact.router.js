import express from 'express'
import { queryGet, querySubmit } from './contact.controller.js';
const router = express.Router();

router.post('/submit',querySubmit);
router.get('/get',queryGet);

export default router;