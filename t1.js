/**
 * Created by common on 2016/6/13.
 */
var User = function (username, password) {
    this.username = username;
    this.password = password;
};

User.prototype.check = function (username, password) {
    if (this.username != username) {
        return {
            "result": false,
            "message": "username is not match"
        }
    } else if (this.password != password) {
        return {
            "result": false,
            "message": "password is not match"
        }
    }

    return {
        "result": true,
        "message": "congratulations! you have through the check"
    }
};