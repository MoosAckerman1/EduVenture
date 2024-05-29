const mongoose = require("mongoose");

const profileXPBARS = new mongoose.Schema({
    firstName: String,
    lastName: String,
    bio: String,
    profilePicture: String,

    MainLevel : int,
    MainLevelxp : int,
    ProgrammingLevel :int,
    ProgrammingLevelxp :int,
    MAtematicsLevel : int,
    MAtematicsLevelxp : int,
    ProblemsolvingLevel : int,
    ProblemsolvingLevelxp : int,
    HistoryLevel : int,
    HistoryLevelxp : int,

    Achievements:String,
    Achievementscount:int,
    Iteamshowcase:String,
    Iteamshowcasecount:int,
    Battletrophies:String,
    Battletrophiescount:int,
    Groupscount:int,
    Friendscount:int,
})


const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
     profile: {
        profileXPBARS
        // Add other profile fields here
    },
        createdAt: {
         type: Date,
         default: Date.now
     },


});

module.exports = mongoose.model("User", UserSchema);