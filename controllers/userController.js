const UserModel = require ("../models/user");


// making a controller to insert data related to a new user
exports.createUser = async (req, res) => {
    try {
        const {firstName, lastName, email, contactNumber, address, pinCode, imgUrl} = req.body;
        
        let newUser = new UserModel ({
            firstName,
            lastName,
            email,
            contactNumber,
            address,
            pinCode,
            imgUrl,
        });
        newUser = await newUser.save();

        res.status(200).json(newUser);
    } catch (e) {
        res.status(500).json ({error : e.message});
    }
};

//making a controller to fetch all my users details from the database
exports.users = async (req, res) => {
    try {
        const users = await UserModel.find ({});
        res.status(200).json (users);
    } catch (e) {
        res.status(500).json ({ error : e.message});
    }
};

// making a controller to find a particular user using id
exports.singleUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const singleUser = await UserModel.findById (userId);
        if (!singleUser) {
            return res.status(404).json ({message : "No such user is found!"});
        }
        res.status(200).json (singleUser);
    } catch (e) {
        res.status(500).json ({error : e.message});
    }
};

// making a controller to delete a particular user using id
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await UserModel.findByIdAndRemove (userId);
        res.status(200).json ({message : `User with id ${userId} is removed successfully!`});
    } catch (e) {
        res.status(500).json ({error : e.message});
    }
};

// making a controller to update a particular user details using id
exports.updateUser = async (req, res) => {
    try {
        const {firstName, lastName, email, contactNumber, address, pinCode, imgUrl} = req.body;
        const userId = req.params.id;
        
        let updatedUser = new UserModel ({
            firstName,
            lastName,
            email,
            contactNumber,
            address,
            pinCode,
            imgUrl,
            _id: userId,
        });
        await UserModel.findByIdAndUpdate (userId, updatedUser);
        res.status(200).json ({message : `User with id ${userId} is updated successfully!`});
    } catch (e) {
        res.status(500).json ({error : e.message});
    }
};