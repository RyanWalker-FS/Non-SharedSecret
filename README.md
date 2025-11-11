# Non-SharedSecret

Description:
In this final example, secrets are kept in a local .env file that is not uploaded to GitHub. The application reads from it using the dotenv package.

Explanation:
When someone downloads the repository, the app will error because the .env file is missing.
In your README, explain what secrets are required and how to create the .env file.
The “dot” (.) in front of .env hides it from normal directory listings on Unix-based systems.
