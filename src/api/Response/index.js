module.exports = (res, message, status = 200, data = []) => {
  res.status(status);
  return res.json({
    message,
    status,
    data,
  });
};
