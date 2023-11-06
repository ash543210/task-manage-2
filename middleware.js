module.exports.isValidData = async (req, res, next) => {
  if (req.body.title.length == 0 && req.body.description.length === 0) {
    res.send("Enter valid Title and Description");
  } else if (req.body.title.length === 0) {
    res.send("Enter valid Title");
  } else if (req.body.description.length === 0) {
    res.send("Enter valid Description");
  } else {
    next();
  }
};
