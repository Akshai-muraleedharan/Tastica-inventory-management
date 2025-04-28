import express from 'express'
import { loginAdmin, CreateEmployee } from '../../../controller/adminController.js';
import { verifyAuthAdminToken } from '../../../middleware/admin/authAdminVerifyToken.js';
import { adminAuthorizeRole } from '../../../middleware/admin/adminAuthorizeRole.js';


const adminRouter = express.Router();

adminRouter.post('/login',loginAdmin);
adminRouter.post('/create-employee',verifyAuthAdminToken,adminAuthorizeRole(["admin","staff"]),CreateEmployee)


 
export default adminRouter;