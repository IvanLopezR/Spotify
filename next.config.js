const withPWA = require('next-pwa');
const nextTranslate = require('next-translate');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
    [
        [withPWA({ pwa: { dest: 'public', swSrc: 'service-worker.js' } })],
        [
            nextTranslate(),
        ],
        [
            {
                reactStrictMode: true,
                env: {
                  CLIENT_ID: process.env.CLIENT_ID,
                  CLIENT_SECRET: process.env.CLIENT_SECRET,
                }
              }
        ]
    ],
);
