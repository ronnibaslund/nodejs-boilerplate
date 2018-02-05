// middleware for authentication
export default function authorize(req, res, next) {
  // TODO: Implement jwt token
  
  // set user on-success
  req.user = { role: 'user' } //await req.db.users.findByApiKey(apiToken);
  
  // TODO: If no user found return public

  // always continue to next middleware
  next()
}