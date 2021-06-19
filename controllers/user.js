const User = require('../models/User');

exports.readAll = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({users});
    } catch(err) {
        console.log(err, 'userController.readAll error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await User.findByIdAndDelete(userId);
        res.json(deletedUser);
    } catch(err) {
        console.log(err, 'userController.delete error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        })
    }
}