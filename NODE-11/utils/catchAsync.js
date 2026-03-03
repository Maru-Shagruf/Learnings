export const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next); // Passes any error straight to the global handler
  };
};