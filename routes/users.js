import { app } from '../index.js';
import { User } from '../models/user.js'
import { ValidateCreateUser, ValidateUpdateUser } from '../validate/validate.js';

export const userRoutes = () => {
    // Mocked get all users
    app.get('/users', async (req, res) => {
        try {
            const users = await User.findAll()
            res.json(users)
        } catch (error) {
            res.send('Error finding user: \n' + error)
        }
    })

    // Mocked get user by id
    app.get('/users/:id', async (req, res) => {
        try {
            const user = await User.findAll({
                where: {
                    id: parseInt(req.params.id)
                }
            })
            res.json(user)
        } catch (error) {
            res.send('Error finding user: \n' + error)
        }
    })

    // Mocked create user
    app.post('/users', async (req, res) => {
        try {
            const validation = ValidateCreateUser.validate(req.query);
            if (validation.error) {
                throw Error(validation.error)
            }

            User.create(req.query);
            res.json({
                message: 'User created',
                user: validation.value
            })
        } catch (error) {
            res.send('Error creating user: \n' + error)
        }
    })

    // Mocked update user
    app.put('/users/:id', async (req, res) => {
        try {
            const validation = ValidateUpdateUser.validate(req.query)
            if (validation.error) {
                throw Error(validation.error)
            }

            await User.update(req.query, {
                where: {
                    id: parseInt(req.params.id)
                }
            })
            res.json({
                message: 'User updated',
                updates: validation.value
            })
        } catch (error) {
            res.send('Error updating user: \n' + error)
        }
    })

    // Mocked delete user
    app.delete('/users/:id', async (req, res) => {
        try {
            // Check if user exist
            const user = await User.findAll({
                where: {
                    id: req.params.id
                }
            })
            // If user exist, destroy it
            if (user[0]) {
                User.destroy({
                    where: {
                        id: parseInt(req.params.id)
                    }
                })
            } else {
                throw Error('User does not exist')
            }
            res.json({
                message: 'User deleted',
                deletedUser: user[0]
            })
        } catch (error) {
            res.send('Error updating user: \n' + error)
        }
    })
}