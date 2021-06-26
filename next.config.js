// next.config.js

module.exports = {
    // Target must be serverless
    target: "serverless",
    images: {
        loader: "cloudinary",
        path: "https://res.cloudinary.com/inductor/image/upload/"
    },
};