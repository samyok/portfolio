module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'cdn.samyok.us',
            'raw.githubusercontent.com',
            'notify.samyok.us',
            'challengepost-s3-challengepost.netdna-ssl.com',
            "www.brookingsregister.com",
            "brookingsregister.com",
            "www.yankton.net",
            "cloudfront-us-east-1.images.arcpublishing.com",
        ],
        minimumCacheTTL: 60 * 60 * 24 * 30, // cache for a month
    }
}
