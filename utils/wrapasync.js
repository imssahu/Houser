module.exports = function wrapasync(fn) {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
