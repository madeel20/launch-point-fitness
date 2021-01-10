export const firstName = [
    {
        required: true,
        message: 'Please enter your first name!',
    },
    {
        pattern: new RegExp(/^[a-zA-Z ]+$/i),
        message: "field does not accept special characters and numbers!"
    }
];
export const schoolRule = [
    {
        required: true,
        message: 'Please enter school name!',
    },
    {
        pattern: new RegExp(/^[a-zA-Z ]+$/i),
        message: "field does not accept special characters and numbers!"
    }
];
export const timeRule = [
    {
        required: true,
        message: 'please select time.'
    },
];
export const scheduleTime = [
    {
        required: true,
        message: 'please select date & time'
    },
];
export const lastNameRule = [
    {
        required: true,
        message: 'Please enter your last name!',
    },
    {
        pattern: new RegExp(/^[a-zA-Z ]+$/i),
        message: "field does not accept special characters and numbers!"
    }
];
export const nickNameRule = [
    {
        required: true,
        message: 'Please enter your nick name!',
    },
    {
        pattern: new RegExp(/^[a-zA-Z ]+$/i),
        message: "field does not accept special characters and numbers!"
    }
];
export const middleNameRule = [
    {
        required: false,
        message: "Please enter your middle name!",
    },
    {
        pattern: new RegExp(/^[a-zA-Z ]+$/i),
        message: "field does not accept special characters and numbers!"
    }
];
export const hourlyRatesRule = [
    {
        required: true,
        message: 'Please enter your hourly rates!',
    },
];
export const monthlyRatesRule = [
    {
        required: true,
        message: 'Please enter your monthly rates!',
    },
];
export const passwordRule = [
    {
        required: true,
        message: 'Please enter password!',
    },
    { min: 8, message: 'please enter at least 8 digit password!' },
];
export const newPasswordRule = (validatePassword) => [
    {
        required: true,
        message: 'Please enter new password!',
    },
    { min: 8, message: 'please enter at least 8 digit password!' },
    { validator: validatePassword }
];
export const confirmPasswordRule = (validatePassword) => [
    {
        required: true,
        message: 'Please enter confirm password!',
    },
    { min: 8, message: 'please enter at least 8 digit password!' },
    { validator: validatePassword }
];
export const phoneRule = [
    {
        required: true,
        message: 'Please enter phone number!',
    },
];