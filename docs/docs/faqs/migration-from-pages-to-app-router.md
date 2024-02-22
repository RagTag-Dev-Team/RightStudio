---
hide_table_of_contents: true
---

# Migration not possible from Next.js Pages to App Router

Migrating your project from Next.js Pages router to the App router is not possible. Let's understand why.

### Why Migration is Not Possible?

Our template's older version with the Pages router was running from the client-side. However, the latest version with the Next.js App router runs from the server-side. To make the whole template compatible with the App router, we had to rewrite the whole codebase.

We have updated the folder structure and the code such that the customizations from your side are now more straightforward and easier to manage. However, this also means that the codebase is not backward compatible with the older version.

Thus, migrating from the Pages router to the App router is not possible.
