function checkLocalAuth(){
    let user = window.localStorage.getItem('user');
    let pass = window.localStorage.getItem('pass');

    if (user && pass ){
        return checkCredentials(user,pass)
    } else {
        return false;
    }
}

let users = ["Marcos", "Merche","Petr","Adrian","Zsofi"]

function checkCredentials(user,pass){
    return (users.includes(user) && pass==="123" )
}

function storeAuth(user,pass){
    window.localStorage.setItem('user', user);
    window.localStorage.setItem('pass', pass);
}

export default {storeAuth, checkCredentials, checkLocalAuth, users}