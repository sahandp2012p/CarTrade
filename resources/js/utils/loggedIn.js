import axios from 'axios';

async function isLoggedIn() {
    const response = await axios('/isloggedin')

    if (response.data === "Ok") {
        return true
    }

    return false
}

function loggedIn(returnValue, setReturnValue) {
    isLoggedIn().then(data => setReturnValue(data));

    return returnValue;
}

export default loggedIn