const express = require('express');
const router = express.Router();
const { body } = require('express-validator');   
const { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain} = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
    '/registor', [
        body('email').isEmail().withMessage('Invalid email'),
        body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
        body('password').isLength({ min: 6 }).withMessage('Password must be six characters long'),
        body('vehicle.color').isLength({ min: 3 }).withMessage('Vehicle color must be atleast 3 characters long'),
        body('vehicle.plate').isLength({ min: 3 }).withMessage('Vehicle plate must be atleast 3 characters long'),
        body('vehicle.capacity').isNumeric().withMessage('Vehicle capacity must be a number'),
        body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
],
    
    registerCaptain
)



router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 3 }).withMessage('Password must be atleast 3 charaxter long')
],
    
    loginCaptain
)

console.log(authMiddleware.authCaptain, getCaptainProfile)
router.get('/profile', authMiddleware.authCaptain, getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, logoutCaptain)








module.exports = router;