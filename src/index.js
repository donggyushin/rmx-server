import app from './app'
import 'dotenv/config'
import './db/sequelize'

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`rmx app listening on port ${PORT}!`))