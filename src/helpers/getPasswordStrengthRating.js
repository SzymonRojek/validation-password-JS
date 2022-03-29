function getPasswordStrengthRating(index) {
    switch (index) {
        case 0:
        case 1:
        case 2:
            return "& quite good";
        case 3:
        case 4:
            return "& good enough";
        case 6:
        case 7:
        case 8:
        case 9:
            return "& really good";
        case 10:
            return "& strong enough";
        case 11:
        case 12:
            return "& strong";
        case 13:
        case 14:
        case 15:
            return "& very strong";
        case 16:
        case 17:
        case 18:
            return "& very very strong";
        default:
            return "& weak";
    }
}

export default getPasswordStrengthRating;