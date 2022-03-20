const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try{
        let token = req.headers['authorization'].spilt
        const decoded = jwt.verify(token,process.env.APP_SECRET);
        req.userData = decoded.data;
        next();    
    }catch(er) {
        return res.status(401).json({"message": "Not authorized"});
    }
}