

class BaseRouter {
  constructor () {}

  getRequiredPermissions() {
    return ['USER']
  }
}

export { BaseRouter as default }