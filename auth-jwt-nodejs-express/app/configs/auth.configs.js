module.exports = {
  secret: "bezkoder-secret-key",
  options: {
    algorithm: "HS256",
    allowInsecureKeySizes: true,
    expiresIn: 86400, // 24 hours
  },
};
