import { User } from "../db/sequelize";
import { sendMessage } from "../utils/sendingSMS";
import { generateToken } from "../utils/jsonWebToken";

export const login = (req, res) => {
    const { id, password } = req.body;
    User.findByPk(id)
        .then(user => {
            if (user === null) {
                res.json({
                    ok: false,
                    error: true,
                    message: '로그인에 실패하였습니다. ',
                    token: null
                })
                return
            } else {

                const userPassword = user.password;
                if (userPassword === password) {
                    // Make json web token
                    const token = generateToken(id);
                    res.json({
                        ok: true,
                        error: false,
                        message: null,
                        token
                    })
                    return
                } else {
                    res.json({
                        ok: false,
                        error: true,
                        message: '로그인에 실패하였습니다. ',
                        token: null
                    })
                    return;
                }


            }
        })
}

export const doubleCheck = (req, res) => {
    const { id } = req.body;
    User.findByPk(id)
        .then(user => {
            if (user === null) {
                res.json({
                    ok: true,
                    error: null,
                    message: '사용 가능한 아이디입니다. '
                })
                return;
            } else {
                res.json({
                    ok: false,
                    error: true,
                    message: '사용 불가능한 아이디입니다. '
                })
                return
            }
        })
}

export const newAccount = (req, res) => {
    const { id, password, email, address, cellphone } = req.body;
    try {
        User.findOrCreate({
            where: {
                id
            },
            defaults: {
                password,
                email,
                address,
                cellphone
            }
        })
            .then(([user, created]) => {
                if (created) {
                    // success to create new user

                    let userCellPhoneNumber = user.dataValues.cellphone
                    userCellPhoneNumber = '82' + userCellPhoneNumber.substr(1);
                    sendMessage(userCellPhoneNumber, 'test')

                    res.json({
                        ok: true,
                        error: null,
                        message: '가입해주신 번호로 *** 앱을 다운 받으실 수 있는 link 를 보내드렸습니다. '
                    })
                    return;
                } else {
                    // fail to create new user
                    res.json({
                        ok: false,
                        error: true,
                        message: '회원가입에 실패하였습니다.'
                    })
                    return;
                }
            })

    } catch (err) {
        res.json({
            ok: false,
            error: true,
            message: '서버에 일시적인 문제가 발생하였습니다. '
        })
        return;
    }

}