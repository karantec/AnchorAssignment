const User = require('../model/User');

// Signup route handler
exports.login = async (req, res) => {
    try {
        // Get data from request body
        const { name, email } = req.body;

        if(!name=== "" && !email===""){
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }

        // Create entry for User
        const newUser = await User.create({ name, email });

        return res.status(200).json({
            data: newUser,
            success: true,
            message: 'User created successfully',
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered, please try again later',
        });
    }
};
