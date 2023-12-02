import jwt  from "jsonwebtoken"
const verifyToken = (req,res,next) => {
    const token =req.cookies.bearer_token;
    if (!token) {
        return res.status(401).json('Acces denied');
    }
    jwt.verify(token,process.env.JWT_SECRET ,(err,user) => {
      if(err){
        return res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
}
export default verifyToken;