module.exports = (err, req, res, next) => {
  res.set("Content-Type", "text/html");
  res.end(`<h1>ERROR</h1><p><i>message: </i> <p>${err}</p></p>`);
};
