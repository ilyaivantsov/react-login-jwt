const isAdmin = (req, res, next) => {
    try {
        const { role } = req.user;
        if (role != 'admin')
            return res.status(403).send('No access');
    } catch (err) {
        return res.status(403).send('No access');
    }
    return next();
}

module.exports = isAdmin;