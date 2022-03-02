function Notfound(req, res, next) {
  res.status(404);
  const error = new Error(`Api endpoint not found`);
  next(error);
}
function handleError(err, req, res, next) {
  const status = res.statusCode != 200 ? res.statusCode : 500;
  res.status(status);
  res.json({
    message: err.message,
    error: err.stack,
  });
}
module.exports = {
  Notfound,
  handleError,
};
