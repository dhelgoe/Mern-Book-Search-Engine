const {User} = require('../models')

const {signToken} = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            const Userdata = await User.findOne({_id: context.user._id})
            return Userdata
        }
    },

    Mutation: {
        add_user: async (parent, args) => {
            const Newuser = await User.create(args)
            const token = signToken (Newuser)
            return {Newuser, token}

        },
        login_user: async (parent, { username, password}) => {
            const loginUser = await User.findOne({username})
            const password = await loginUser.isCorrectPassword(password)
            const token = signToken (loginUser)
            return {loginUser, token}

        }

        //savebook
        //remove_book

    //savebooks,serach books in pages need to change
    //login form and sign up form needs to change
        
    }
}

module.exports = resolvers;