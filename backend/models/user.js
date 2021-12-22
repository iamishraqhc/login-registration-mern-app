import mongoose from 'mongoose'

const User = new mongoose.Schema(
    {
        name: { type: 'string', required: true},
        email: { type: 'string', required: true, unique: true},
        password: { type: 'string', required: true},
    },
    {
        collection: 'users',
    }
)

const model = mongoose.model('UserData', User)

export default model
