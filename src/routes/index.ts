import express from 'express'
import { PingController } from '../controller/ping.controller';
import { PromptController } from '../controller/prompt.controller';
import { UserController } from '../controller/user.controller';

const router = express.Router();

router.use("/ping", PingController.ping);

//Prompt Response
router.post('/prompt/response', PromptController.fetchPromptResponse);


//User
router.post('/user', UserController.createUser);

export default router;
