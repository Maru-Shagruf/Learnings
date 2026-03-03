export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500; 
  
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    // Only shown  during development 
    stack: process.env.NODE_ENV === 'development' ? err.stack : null 
  });
};