module.exports = (err, req, res, next) => {
  let statusCode = 400;
  if (err.message === "Not found") {
    console.error(err);
    statusCode = 404;
  }
  res.status(statusCode).send(err.message);
  next();
};
