const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);

    // Si el error ya tiene un codigo de estado, lo usamos, de lo contrario error
    const statusCode = err.statusCode || 500;

    // Mensaje de error
    const message = err.message || 'Error interno del servidor';

    res.status(statusCode).json({
        success: false,
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }) 
    });
};

module.exports = errorHandler;