import { Router }  from 'express'
import BaseRouter from './BaseRouter'
import permit from '../util/permission' // middleware for checking if user's role is permitted to make request

class IndexRouter extends BaseRouter {
  // take the mount path as the constructor argument
  constructor (path = '/') {
    super()
    // instantiate the express.Router
    this.router = Router()
    this.path = path
    // glue it all together
    this.init()
  }

  welcome (req, res) {
    res.status(200).json('Welcome to NodeJs BoilerPlate')
  }

  /**
   * Attach route handlers to their endpoints.
   */
  init() {
    this.router.get('/', this.welcome)
    this.router.get('/protected', permit('admin'), this.welcome)
  }
}

export default new IndexRouter()