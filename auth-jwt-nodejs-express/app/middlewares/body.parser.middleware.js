module.exports = (req, res, next) => {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk.toString();
  });

  req.on("end", () => {
    try {
      const dataJson = JSON.parse(data);
      req.body = dataJson;
    } catch (error) {}
    next();
  });
};
