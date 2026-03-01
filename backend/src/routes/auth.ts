import prisma from '../lib/prisma'; // Fix applied
import { verifyJwt } from '../lib/jwt'; // Fix applied

// Other imports and logic

export const refresh = async (req, res) => { 
    const { refreshToken } = req.body;
    try {
        const userPayload = verifyJwt(refreshToken);
        // Logic using userPayload
    } catch (error) {
        res.sendStatus(401);
    }
};