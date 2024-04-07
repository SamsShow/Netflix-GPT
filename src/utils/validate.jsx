export const validate = (email, password) => {
    const errors = {};

    if (!email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    if (!password) {
        errors.password = 'Required';
    } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        errors.password = 'Password must contain at least one letter and one number';
    }

    return errors;
};
