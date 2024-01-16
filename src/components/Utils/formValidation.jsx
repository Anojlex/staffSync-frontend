const formValidation = (email, password) => {
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    const isMailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);

    if (!isMailValid) {
        return "Invalid Mail Id";
    }
    if (!isPasswordValid) {
        return "Invalid Password";
    }

    return null;
};


export default formValidation;
