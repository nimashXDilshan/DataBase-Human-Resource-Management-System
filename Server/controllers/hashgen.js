import bcrypt from 'bcrypt';


const gen = async (req, res) => {
    const pw = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(pw, salt);
    console.log(hashedPassword);
    res.send(hashedPassword);
}

export { gen };