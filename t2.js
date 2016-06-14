/**
 * Created by common on 2016/6/13.
 */

var user = new User("bingo", "tidy");

function login(username, password) {
    var result = user.check(username, password);
    alert(result.message);
}

login("bindo", "tidy");
login("bingo", "tity");
login("bingo", "tidy");