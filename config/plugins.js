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
});