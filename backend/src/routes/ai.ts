import { Router } from 'express';
import { verifyToken } from '../middleware/auth';
import { invokeLLM } from '../lib/ai';

const router = Router();

// POST /api/ai/invoke
router.post('/invoke', verifyToken, async (req, res) => {
    const { prompt, systemPrompt, jsonSchema } = req.body;
    const result = await invokeLLM({ prompt, systemPrompt, jsonSchema });
    res.json(result);
});

export default router;