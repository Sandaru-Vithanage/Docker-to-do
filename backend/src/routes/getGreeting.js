const GREETING = 'Holaaaa';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
