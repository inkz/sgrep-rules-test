const jwt = require('jsonwebtoken')

jwt.sign({"foo": 2}, "hardcode1", () => {})

var secret = "hardcode2"
jwt.sign({"bar": 2}, secret)
