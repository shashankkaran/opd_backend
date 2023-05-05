import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  updatePres,
  getPres
} from '../controllers/userController.js'
import {
  protect,
  admin,
} from '../middleware/authMiddleware.js'
router
  .route('/prescription/:pfNo')
  .get(getPres)
router
  .route('/prescription/:pfNo')
  .put(updatePres)  
router
  .route('/')
  .post(registerUser)
  .get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router
