module.exports = {
    baseUrl: "/",
    publicPath: process.env.NODE_ENV === 'production'
    ? '/smart-seat-vue/'
    : "/"
};
