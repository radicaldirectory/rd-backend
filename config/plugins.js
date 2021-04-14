module.exports = ({ env }) => ({
  email: {
    provider: "mailgun",
    providerOptions: {
      apiKey: env("MAILGUN_API_KEY"),
      domain: env("MAILGUN_DOMAIN"), //Required if you have an account with multiple domains
    },
    settings: {
      defaultFrom: "mail@radical.directory",
      defaultReplyTo: "mail@radical.directory",
    },
  },
  upload: {
    provider: "do",
    providerOptions: {
      key: env("DO_SPACE_ACCESS_KEY", ""),
      secret: env("DO_SPACE_SECRET_KEY", ""),
      endpoint: env("DO_SPACE_ENDPOINT", ""),
      space: env("DO_SPACE_BUCKET", ""),
      directory: env("DO_SPACE_DIRECTORY", ""),
      cdn: env("DO_SPACE_CDN", ""),
    },
  },
});
