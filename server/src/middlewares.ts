import { Request, Response, NextFunction } from "express";


function checkLoggedIn(req: Request, res: Response, next: NextFunction) {
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        return res.status(401).json({
            error: 'You must log in'
        })
    }

    next();
}

export {
    checkLoggedIn
}