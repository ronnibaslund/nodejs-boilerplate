import jwt from 'jsonwebtoken' // used to create, sign, and verify tokens
import BaseController from './BaseController'
import UserService from '../services/UserService'


class AuthController extends BaseController {
  constructor() {
    super()
  }

  async authenticate(req, res) {
    let user = await UserService.fetchByEmail(req.body.username)
    
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      console.log('her')
      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      }

      // if user is found and password is right
      // create a token with only our given payload
      // we don't want to pass in the entire user since that has the password
      const payload = {
        name: user.name,
        email: user.email,
        permission: user.permission
      }
      
      let token = await jwt.sign(payload, process.env.jwtSignature, {
        expiresIn: '1 day' // expires in 24 hours
      });

      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Authentication success',
        token: token
      });
    }
  }
}

export default new AuthController()