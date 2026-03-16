# Lab-12.2: Server to Server Communication
**Author:** Jameka Haggins 
---
## Reflection Questions
1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
---

Efficancy and Simplicity is what I can think of off the top of my head. When you get data from the Useless Facts API, it includes a lot of extra information like the `id`, `language`, and `source_url`. We don't need all of that, we just want the fun fact, that's it. Sending only the `text` makes the package smaller, so it travels faster over the internet. The digital screen in the coffee shop **only needs the fact**. By cleaning it up, the person building the screen doesn't have to hunt through a messy object to find what they need!

Thinking user first and their experience in general, a simple "Oops, try again" or in my case a ` error: "Not so fun fact: we couldn't fetch a fun fact" ` is much friendlier or a thing to see. Mosty users do not know what error codes mean.

Okay using the example of German, this is how you would accomplish this task: you would look at the Request Object `(req)`, you would check `req.query.language`. if the user provides a language, you would attach it to the end of the external API URL:
`https://uselessfacts.jsph.pl/api/v2/facts/random?language=${req.query.language}`.
