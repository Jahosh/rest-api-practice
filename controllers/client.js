module.exports = {
  get: (req, res) => {
    res.sendFile("./index.html");
  }
}