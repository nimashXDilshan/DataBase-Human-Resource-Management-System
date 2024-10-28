import bcrypt from 'bcrypt';

const pw = 'password123';

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt
    );
    return hashedPassword;
}


hashPassword(pw).then((result) => {
    console.log(result);
});

