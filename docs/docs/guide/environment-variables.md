# Environment Variables

## What Are Environment Variables?

Environment variables are a set of key-value pairs used in software development to manage and configure elements of your application outside of your code. They are particularly useful for:

- **Security:** Keeping sensitive data like passwords and API keys out of your source code.
- **Flexibility:** Allowing different settings for development, testing, and production environments without changing the code.
- **Convenience:** Enabling easy changes to configuration without the need for code modifications.

In your project, these variables play a vital role in configuring the application's behavior based on the environment it's running in (like local development, staging, or production).

Materio comes with support for environment variables, which allows you to use `.env` to load the environment variables.

:::tip

We recommend you to read the [official guide](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables) given by Next.js for using environment variables.

:::

## Environment variables used in the template

To configure your environment variables, follow these steps:

1. Copy the `.env.example` file and rename it to `.env`.
2. Fill in the required values in the `.env` file.
3. Make sure to mention your `NEXTAUTH_SECRET` in the `.env` file. You may generate your secret by referring to [this](https://next-auth.js.org/configuration/options#secret) link.
4. If you are using google authentication, make sure to mention your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in the `.env` file.
5. If you want to include the `.env` file in your repository, remove the `.env` statement from the `.gitignore` file.

By following these steps, you can set up and manage your environment variables effectively.

We have use the `fake-db` and fake-db API calls are not supported to access the environment variables. Hence, we have used `NEXT_PUBLIC` prefix with our environment variables. You can find the environment variables' file `.env` in the root of the project. The environment variables that we have used in the `.env` file are as follows:

```bash
API_URL=http://localhost:3000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Authentication

Authentication variables in the .env file are used to configure authentication settings for your application. These variables are specific to the authentication library you are using, such as NextAuth.js.

- `NEXTAUTH_URL` - This variable specifies the URL of your application. It is used by NextAuth.js to generate callback URLs and handle authentication redirects.
- `NEXTAUTH_SECRET` - This variable is used to encrypt cookies and tokens. It is used by NextAuth.js to encrypt and decrypt cookies and tokens.
- `GOOGLE_CLIENT_ID` - This variable is used to configure the Google OAuth 2.0 client ID. It is used by NextAuth.js to authenticate users using Google.
- `GOOGLE_CLIENT_SECRET` - This variable is used to configure the Google OAuth 2.0 client secret. It is used by NextAuth.js to authenticate users using Google.

We have used the [NextAuth.js](https://next-auth.js.org/) library for authentication. You may refer to the environment variables used in the NextAuth.js library [here](https://next-auth.js.org/configuration/options#environment-variables).

```bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

# Google OAuth 2.0 Credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Database

Database variables in the .env file are used to configure database settings for your application. These variables are specific to the database you are using, such as MongoDB.

- `DATABASE_URL` - This variable is used to configure the database connection string or file path. It is used by the database client to connect to the database.

```bash
# Database Configuration
DATABASE_URL=file:./dev.db
```

Make sure to replace the `NEXTAUTH_SECRET` and `GOOGLE_CLIENT_ID` with your actual values and it's advisable to remove the `NEXT_PUBLIC` prefix if you are using the Next.js data fetching method or API routes.

## Private Variables

Having access to the `NODE_ENV` is also useful for performing actions conditionally:

```js
if (process.env.NODE_ENV === 'production') {
  analytics.disable()
}
```