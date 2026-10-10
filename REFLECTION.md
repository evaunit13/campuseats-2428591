# Week 1 reflection

Answer each question in 1–3 sentences, in your own words.

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
Imperative code tells the browser step-by-step how to update the DOM (like `getElementById` and `innerHTML`). With React's declarative approach, we just write what the UI should look like and React updates the DOM for us.

2. Why must a component name start with a capital letter?
So React can tell custom components apart from standard HTML tags. If it starts with a lowercase letter, JSX thinks it's a built-in tag like `<div>`.

3. What does a fragment <>...</> do, and why not just use a <div>?
It groups multiple elements together without rendering an extra tag into the DOM. Using a `<div>` adds an unnecessary wrapper that can mess up CSS grid or flexbox layouts.

4. Name one benefit of splitting the UI into small components.
It keeps the code organized and reusable, so we don't have to manage one massive file when fixing or updating parts of the page.
