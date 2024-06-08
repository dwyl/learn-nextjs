<div align="center">

# Learn Next.js 

[![HitCount](https://hits.dwyl.com/dwyl/learn-nextjs.svg?style=flat-square)](https://hits.dwyl.com/dwyl/learn-nextjs)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/dwyl/learn-nextjs/issues)  

Dive into **`Next.js`**,
the *de facto* React framework  to build scalable, 
high-performance web applications server-side rendering, 
static site generation, and much more.

</div>


## Why?

Ever since it's inception,
there's been a _lot_ of hype around  `Next.js` 
and, as years went on, 
it's [increasingly gained popularity amongst developers](https://survey.stackoverflow.co/2023/#section-admired-and-desired-web-frameworks-and-technologies)
and [it's even vouched by the official `React` team](https://www.kodaps.dev/en/blog/why-react-prefers-nextjs)!

Founded by [Guillermo Rauch](https://vercel.com/about/rauchg), 
creator of _many_ popular Node.js modules including `socket.io` and `mongoose`,
knowing how to develop with `Next.js` will put you in a great position
[in relation to job prospects](https://www.itjobswatch.co.uk/jobs/uk/next.js.do)
and it's a valuable skill to learn if you're already seasoned with `React`.

One may ask how `Next.js` differs
(or even extends) `React`?

In simple words, `Next.js` simplifies
your development process and
it **automatically** optimizes your web application to be published,
so you only have to *focus on the development of core features*,
instead of meddling with configuration files to package
and bundle your web app.

That seems like a blanket statement, right?
It's because it is! 
We'll delve deeper into the "what?" 
later!


## What are the benefits of `Next.js`?

`Next.js` simplifies the development process and, 
on top of that, it optimizes your web applications. 
It does this through its primary features.

A primary distinction is **rendering**, 
as it's handled differently between `React` and `Next.js`.
You may already know that `React` renders the user interface on the client side, 
while `Next.js` performs **server-side rendering**. 
However, `Next.js` offers flexibility in rendering options. 
You can *choose* to render the UI on the client side or the server side 
much easier in `Next.js` than the default `React` way.

> [!NOTE]
>
> It is important to know the difference between
> `server-side` and `client-side` rendering.
>
> As the name suggests, 
> **`client-side` rendering**, happens on the client's device or the browser. 
> The `HTML` and `JS` files are downloaded and executed on your browser.
>
> On the other hand, 
> **`server-side` rendering** involves rendering the web page on the server before transmitting it to the client's device. 
> The server processes a client's request and renders the components on the server side. 
> It then sends back the fully rendered `HTML` to the client's browser, enabling immediate display.
>
> For more information, visit https://www.cloudflare.com/en-gb/learning/serverless/glossary/client-side-vs-server-side/.

Knowing the distinction between `server` and `client`-side rendering
highlights an essential aspect of web development: 
[**`SEO`**](https://en.wikipedia.org/wiki/Search_engine_optimization).
[Search engine crawlers face difficulties indexing pages dynamically rendered on the client side.](https://ralfvanveen.com/en/technical-seo/the-impact-of-javascript-on-seo-in-2024/) 
As a result, 
the `SEO` performance of such pages may suffer as search engines may not fully comprehend their content and rank them appropriately. 
By utilizing `Next.js`, 
this issue is resolved by sending pre-rendered code directly to the client. This enables easy crawling and indexing by search engines, 
leading to improved `SEO`.

The second great `Next.js` feature is **routing**. 
Unlike normal `React`, 
`Next.js` uses a **`file-based` routing system**, 
which means that the routing is handled by the file system. 
Each folder in the app directory becomes a `route`, 
and the folder name becomes the route's `path`. 
This eliminates the need for external packages or complex configurations
typically found in standard `React` projects.

With `Next.js`,
you can inclusively create full-stack applications!
After introducing [`API routes`](https://nextjs.org/docs/pages/building-your-application/routing/api-routes),
you can easily create a public API within `Next.js`
through serverless functions to handle.


### Ok, so what's the takeaway?

When you develop in `Next.js`, 
you just let it take care of processes like
linting, formatting, compiling,
bundling, minifying, etc..
Having automating *most* of the remaining processes 
and letting us focus on building the *essential* business logic of the application
is **a time-saver**.

And the best part is that,
at the end,
it's *still* just `React`. 
`Next.js` is not an entirely new technology; 
it is still fundamentally built on top of `React`. 
To put it simply, `Next.js` is an extension of `React` 
that streamlines the development process by automating several functions, 
allowing developers to focus on what they do *best*: 
writing `React` code.

If you're looking for a quick [`tl;dr`](https://en.wikipedia.org/wiki/TL;DR),
here are 10 reasons why you *should consider* learning `Next.js`,
**especially if you're wanting a career in front-end development**.


- supports **server-side Rendering (`SSR`) and static site generation (`SSG`)**
out of the box.

- automatic **code splitting**, 
improving load times and performance.

- **easy to set up**, with sensible defaults.

- **file-based-routing**,
where each file in the `pages` directory corresponds to a route in the application, 
making it intuitive and straightforward to manage routes

- with **`API Routes`**, 
you can create API endpoints directly, 
allowing you to handle serverless functions and backend logic without setting up a separate server.

- **built-in [`CSS` and `Sass`](https://www.geeksforgeeks.org/what-is-the-difference-between-css-and-scss/) Support**

- [several **optimizations** handled automatically](https://nextjs.org/docs/app/building-your-application/optimizing).

- has support for `TypeScript`, 
enabling you to use static type checking.

- active community and `Vercel` support.


# Who?

This guide are personal notes and our little "journey"
into learning more about `Next.js`. 
So it's meant as both an **internal reference document** for us at `dwyl`,
but also a fully open source resource that *anyone* can read and learn from!

If you find it useful, give the repo a star! ⭐️

If you get stuck, have questions/suggestions 
or just want to discuss this further, 
[do open an issue](https://github.com/dwyl/learn-nextjs/issues)!


# What?

> [!TIP]
>
> [`Next.js`'s documentation](https://nextjs.org/docs) is *really good*.
> This guide, although making some references to it,
> is meant to be our own personal view on the framework
> and how it works.
>
> If you just want to see the docs, please visit https://nextjs.org/docs.
> You will learn a lot from it!


> [!NOTE]
>
> This guide assumes you have prior basic knowledge of `CSS`, `HTML` and `React`.
> If you need to brush up on these skills, 
> we recommend you check out 
> https://github.com/dwyl/learn-react.



# Conclusion

My conclusion after spending a couple of hours learning `Next.js` is that it's _very_ easy.

There are a few confusing bits like _why_ is there:
`lib/posts.js`, 
`pages/posts/index.js`
and then `posts/*.md` ...?
How will can an _infrequent_ user of this framwework 
be expected to know what each file does when they return to it after a few months?

Overall I think it's worth going through the tutorial and learning the basics.
I'm going to be using this in a Demo/SPIKE so I wanted to go through the _whole_ tutorial including API.


## `tl;dr`

This isn't exactly _light_ on dependencies:

```
added 759 packages from 404 contributors and audited 759 packages in 20.486s

78 packages are looking for funding
  run `npm fund` for details

found 5 vulnerabilities (3 low, 1 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

**1 high** priority vulnerability ... unsurprising in **759** packages from **404** contributors.