export default {

    isValidEmail: email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    isValidPassword: password => {
        const isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,20}$/.test(password);
        return isValid;
    },

    isValidNickname: nickname => {
        const isValid = /^[A-Za-z0-9]+$/.test(nickname);
        return isValid;
    }

}