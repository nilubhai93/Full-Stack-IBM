const login = (req, res) => {
    const data = req.body;
    try {
        if (data.email == "" && data.password == "") {
            return res.status(400).send({ message: "Please enter email and password" });
        } else {
            return res.status(200).send({ message: "Login successful" });
        }
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const signUp = (req, res) => {
    const data = req.body;
    try {
        if (data.email == "" && data.password == "") {
            return res.status(400).send({ message: "Data not found" });
        } else {
            return res.status(200).send({ message: "use register successfully" });
        }
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

module.exports = {
    login,signUp
}