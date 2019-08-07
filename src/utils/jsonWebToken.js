import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
    const token = jwt.sign({ id }, 'shhhh')
    return token;
}

export const decodeToken = (token) => {
    const decoded = jwt.verify(token, 'shhhh')

    if (decoded === null || decoded === undefined) {
        return null;
    }

    return decoded.id;
}