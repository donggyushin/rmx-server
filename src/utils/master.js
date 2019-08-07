import { User } from '../db/sequelize';
import { decodeToken } from './jsonWebToken';

export const checkMasterUser = async (token) => {
    const id = decodeToken(token);
    try {

        const user = await User.findByPk(id)
        return user.master
    } catch (err) {
        console.log(err)
        return false
    }

}

export const getUserByToken = async (token) => {
    const id = decodeToken(token);
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (err) {
        console.log(err)
        return null
    }

}