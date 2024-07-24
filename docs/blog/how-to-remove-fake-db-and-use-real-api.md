# How to remove Fake DB and use Real API

In the `full-version`, we use a fake database (fake-DB) to fetch data via server actions. This setup simplifies the project initialization. However, for real-world applications, you'll need to fetch data from a real API. This guide will walk you through the steps to remove the fake DB and configure your project to use a real API.

Let's get started with the steps:

<!--truncate-->

#### 1. Remove the Fake DB

Delete the `src/fake-db` folder from your project. This folder contains the mock data you no longer need.

#### 2. Remove API routes

Delete the `src/app/api` folder to eliminate the fake API routes set up for the project.

#### 3. Remove server actions

Delete the `src/app/server` folder, which contains the server actions used to interact with the fake DB.

#### 4. Clean up import statements

In the `src/app` folder, locate and remove all import statements related to the server actions. These import statements typically look like this:

```ts
import { /* functionName */ } from '@/app/server/actions'
```

#### 5. Update data fetching logic

In the files where you removed the server action import statements, you'll find commented-out code for fetching data from the real API. Uncomment this code and update the fetch() function with your real API URL.

#### 6. Verify data structures

Ensure that the data structures returned by your real API match those expected by your application. If the structures differ, you may need to update the API response format or adjust your application code to handle the new data structure.

That's it. You have successfully removed the fake DB and configured your project to fetch data from a real API. 🥳 🎉
