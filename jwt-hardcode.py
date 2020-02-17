import jsonwebtoken as jwt

SECRET = "secret123"

jwt.sign({}, SECRET)
jwt.sign({}, "one-more-secret")
return 0