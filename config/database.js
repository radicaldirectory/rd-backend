module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "postgres",
            host: env("DATABASE_HOST", "localhost"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "strapi"),
            username: env("DATABASE_USERNAME", "strapi"),
            password: env("DATABASE_PASSWORD", "strapi"),
            ssl: {
              ca: env("DATABASE_SSL_CERT", ""),
            },
          },
          options: {
            ssl: true,
          },
        },
      },
    };
  }
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "sqlite",
          filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  };
};
