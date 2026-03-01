import { Router } from 'express';
import { verifyToken } from '../middleware/auth';
import { sendEmail } from '../lib/email';

const router = Router();

// POST /api/email/send
router.post('/send', verifyToken, async (req, res) => {
    const { to, subject, html } = req.body;
    await sendEmail({ to, subject, html });
    res.json({ message: 'Email sent.' });
});

export default router;