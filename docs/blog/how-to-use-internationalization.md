# How to use internationalization in a page

:::info
This guide is intended for users who are using the `full-version` or have implemented internationalization in the `starter-kit`. If you have not implemented internationalization in your project, follow the steps mentioned in [this guide](/docs/guide/development/translation/add-i18n-to-Starter-kit).
:::

We provide internationalization for navigation only. However, there might be times when you need to translate text within a page. Here's how you can achieve that:

<!--truncate-->

1. Ensure you have the following packages installed:

     - `@formatjs/intl-localematcher`
     - `negotiator`
     - `@types/negotiator` (for TypeScript versions only)

2. Define the locale in your path. For example, use `http://localhost:3000/en/apps/chat` where `en` is the locale referring to the English language
3. Create JSON files named after each language you need in the locales directory. For instance, if you are using English (`en`), French (`fr`), and Arabic (`ar`), your files should look like this:

    ```json title="en.json"
    {
      "helloWorld": "Hello World",
      "text": {
        "paragraph": "This is a paragraph"
      },
      "navigation": {
        ...
      }
    }
    ```

    ```json title="fr.json"
    {
      "helloWorld": "Bonjour le monde",
      "text": {
        "paragraph": "C'est un paragraphe"
      },
      "navigation": {
        ...
      }
    }
    ```

    ```json title="ar.json"
    {
      "helloWorld": "مرحبا بالعالم",
      "text": {
        "paragraph": "هذه فقرة"
      },
      "navigation": {
        ...
      }
    }
    ```

4. Import `getDictionary` and the `{ locale }` type in the page where you want to translate content:

    ```ts
    import { getDictionary } from '@/utils/get-dictionary'
    import type { Locale } from '@configs/i18n'
    ```

5. Initialize `getDictionary` and pass the locale as a parameter. This function returns a promise, which you can use to get the dictionary:

    ```tsx
    // Type Imports
    import type { Locale } from '@configs/i18n'

    // Util Imports
    import { getDictionary } from '@/utils/get-dictionary'

    const Component = async ({ params }: { params: { lang: Locale } }) => {
      // getDictionary can only be called on the server side,
      // calling it on the client side will throw an error
      const dictionary = await getDictionary(params.lang)

      return (
        <>
          <div>{dictionary.helloWorld}</div>
          <p>{dictionary['text'].paragraph}</p>
        </>
      )
    }

    export default Component
    ```

That's it! You can now translate any text in your page. 🥳 🎉
