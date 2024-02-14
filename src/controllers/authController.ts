import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password } = req.body;
        const user = new User(username, email, password);
        await user.save();
        res.status(201).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear usuario' });
    }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const user = await User.findByUsername(username);
        if (!user) {
            res.status(401).json({ message: 'Usuario no encontrado' });
            return;
        }
        const passwordMatch = await user.comparePassword(password);
        if (!passwordMatch) {
            res.status(401).json({ message: 'Credenciales inválidas' });
            return;
        }
        const token = jwt.sign({ username }, 'tu_secreto', { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error' });
    }
};

