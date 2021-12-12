const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req: any, res: any, next: any) => {
    console.log(jwt.decode(req.headers['user-token'], 'secret'));
    if (!req.headers['user-token']) {
        return res.json({ error: 'Missing Token in Header' });
    }
    const userToken = req.headers['user-token'];
    let payload;
    try {
        payload = jwt.decode(userToken, 'secret');
    } catch (err) {
        return res.json({ error: 'Token not right' });
    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({ error: 'Token expiredd' });
    }

    req.userId = payload.userId;

    next();
}


module.exports = {
    checkToken: checkToken
}