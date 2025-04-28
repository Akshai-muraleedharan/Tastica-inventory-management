
export const adminAuthorizeRole = (...roles) => {
    return (req, res, next) => {
        if (!req.admin ) {
            
         return res.status(401).json({ message: "Unauthorized role" });
        }

        console.log(req.admin)
          let  adminRole = req.admin.role;      
        
        if (!roles.includes(adminRole)) {
         return res.status(403).json({ message: "Forbidden" });
        }

        next();
    };
}