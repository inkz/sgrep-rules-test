const jwt = require('jsonwebtoken')

jwt.sign({"foo": 2}, "hardcode1", () => {})

var secret = "hardcode2"
jsonwebtoken.sign({"bar": 2}, secret)