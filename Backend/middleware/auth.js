
const jwt=require('jsonwebtoken');
const User= require("../models/user")
const { isTokenBlacklisted } = require("../utils/blackList");
const protect= async(req,res,next)=>{ 
    let token =null;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
      }
      if (isTokenBlacklisted(token)) {
        return res.status(401).json({ message: "Token has been logged out" });
      }
      if (!token) {
        return res.status(401).json({ message: "Not authorized, token is missing" });
      }

      try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
        // Find user by ID, exclude password field
        const user = await User.findById(decoded.id).select("-password");
    
        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }
    
        req.user = user; // attach user to request
        next();
      } catch (error) {
        return res.status(401).json({ message: "Not authorized, token is invalid" });
      }
}
module.exports = protect;
