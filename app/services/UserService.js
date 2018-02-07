import User from '../models/User'

class UserService {
  async fetchByEmail(email) {
    return await User.findOne({ email: email })
  }
}

export default new UserService()
