const data = [
    {"name":"SVU","place":"BP"},
    {"name":"ITU","place":"Kolkata"},
]

const getProducts = (req, res) => {
    res.status(200).send({message:"Data fetched successfully", data:data});
};

module.exports = {
    getProducts
}