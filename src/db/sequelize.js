import Sequelize from 'sequelize';

const sequelize = new Sequelize('rmx', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully. '))
    .catch(err => console.error('Unable to connect to the database: ', err))



// MARK: - Model definitions

export const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cellphone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    master: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
}, {
        // options
    })


sequelize.sync({ force: false })