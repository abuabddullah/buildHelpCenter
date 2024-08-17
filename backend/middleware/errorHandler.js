function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    // Handle validation errors
    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Validation error', details: err.message });
    }

    // Handle specific known errors
    if (err.status) {
        return res.status(err.status).json({ message: err.message });
    }

    // Handle general server errors
    res.status(500).json({ message: 'Server error' });
}

module.exports = errorHandler;
