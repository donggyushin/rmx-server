import { checkMasterUser } from "../utils/master";
import { User } from "../db/sequelize";

export const provideExcelFile = async (req, res) => {
    const token = req.query.jwt;
    if (token === null || token === undefined) {
        res.json({
            what: "?"
        })
        return
    }
    const isMaster = await checkMasterUser(token);

    if (isMaster) {
        try {
            const users = await User.findAll({ attributes: ['id', 'email', 'cellphone', 'address'] })

            var jsonArr = [];
            await users.map(user => {
                jsonArr.push(user.dataValues)
            })

            res.xls('users.xlsx', jsonArr)
            return;
        } catch (err) {
            return;
        }

    } else {
        return;
    }
}

export const getUsersInfo = async (req, res) => {
    const { token } = req.headers
    const isMaster = await checkMasterUser(token)
    if (isMaster) {
        try {
            const users = await User.findAll({ attributes: ['id', 'email', 'cellphone', 'address'] })
            res.json({
                ok: true,
                error: false,
                message: null,
                users
            })
            return;
        } catch (err) {
            res.json({
                ok: false,
                error: true,
                message: '서버 에러',
                users: []
            })
            return;
        }

    } else {
        res.json({
            ok: false,
            error: true,
            message: '마스터 계정이 아닙니다. ',
            users: []
        })
        return;
    }
}