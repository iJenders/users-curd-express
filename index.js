import express from 'express'
import bodyParser from 'body-parser'
import { User } from './models/user.js'
import { userRoutes } from './routes/users.js';

export const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

async function main() {
  await User.sync();

  userRoutes();

  app.listen(port, () => {
    console.log('Server is running on port 3000')
  })
}

main()