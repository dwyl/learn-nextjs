<div align="center">

# Learn Next.js

[![HitCount](https://hits.dwyl.com/dwyl/learn-nextjs.svg?style=flat-square)](https://hits.dwyl.com/dwyl/learn-nextjs)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/dwyl/learn-nextjs/issues)

Dive into **`Next.js`**,
the _de facto_ `React` web framework <br />
to build scalable apps
with server-side rendering,
static site generation
and much more.

</div>

<!--
Note: the Table of Contents is auto-generated/updated by Markdown All-in-One 
https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
-->

- [Learn Next.js](#learn-nextjs)
- [Why?](#why)
  - [What are the benefits of `Next.js`?](#what-are-the-benefits-of-nextjs)
    - [Ok, so what's the takeaway?](#ok-so-whats-the-takeaway)
- [Who?](#who)
- [What?](#what)
  - [Routing](#routing)
    - [What is the difference between a `page` and a `layout`?](#what-is-the-difference-between-a-page-and-a-layout)
    - [Navigation](#navigation)
    - [`Dynamic` and `Parallel` routes](#dynamic-and-parallel-routes)
    - [Intercepting routes](#intercepting-routes)
  - [Fetching data](#fetching-data)
  - [Rendering](#rendering)
    - [Server components](#server-components)
    - [Client components](#client-components)
  - [Styling](#styling)
  - [Optimizations](#optimizations)
- [How?](#how)

# Why?



Since its' inception,
there's been a _lot_ of hype around `Next.js`.
It has gained 
[popularity amongst developers](https://survey.stackoverflow.co/2023/#section-admired-and-desired-web-frameworks-and-technologies)
and even the 
[`React` team recommends using it](https://www.kodaps.dev/en/blog/why-react-prefers-nextjs)!

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
so you only have to _focus on the development of core features_,
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
You can _choose_ to render the UI on the client side or the server side
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
Having automating _most_ of the remaining processes
and letting us focus on building the _essential_ business logic of the application
is **a time-saver**.

And the best part is that,
at the end,
it's _still_ just `React`.
`Next.js` is not an entirely new technology;
it is still fundamentally built on top of `React`.
To put it simply, `Next.js` is an extension of `React`
that streamlines the development process by automating several functions,
allowing developers to focus on what they do _best_:
writing `React` code.

If you're looking for a quick [`tl;dr`](https://en.wikipedia.org/wiki/TL;DR),
here are 10 reasons why you _should consider_ learning `Next.js`,
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
but also a fully open source resource that _anyone_ can read and learn from!

If you find it useful, give the repo a star! ⭐️

If you get stuck, have questions/suggestions
or just want to discuss this further,
[do open an issue](https://github.com/dwyl/learn-nextjs/issues)!

# What?

> [!TIP]
>
> [`Next.js`'s documentation](https://nextjs.org/docs) is _really good_.
> This guide, although making some references to it,
> is meant to be our own personal view on the framework
> and how it works.
>
> If you just want to see the docs, please visit https://nextjs.org/docs.
> You will learn a lot from it!

> [!NOTE]
>
> We assume prior basic knowledge of `CSS`, `HTML` and `React`.
> If you need to brush up on these skills,
> we recommend you check out
> https://github.com/dwyl/learn-react.

> [!NOTE]
>
> At the time of writing,
> the stable version of `Next.js` is **version `14`**.
> Although there's a [release candidate for version `15`](https://nextjs.org/blog/next-15-rc),
> it's still yet to be released.
> Therefore, this guide will be based on the `14` version.

In this section, we'll give you a basic rundown
of how a typical `Next.js` project will look like
and some of framework-specific features you'll have to take into account
while developing your application in `Next.js`.

We'll go from fundamental concepts
and dive a bit as we go.
So strap in and let's start!

## Routing

The heart of every web application starts with routing.
When `React` introduced [`Server Components`](https://react.dev/reference/rsc/server-components)
(components that can be cached in the server),
`Next.js` introduced `App Router`,
which supports these components.

Your project will have an **`app`** directory,
where all children are `React Server Components` by default.
In contrast, the project may also have a **`pages`** directory,
where normal, file-system based routing occurs in `Next.js` -
this is **`Page Router`**.

There's a difference between these two.
`App Router` is recommended and it's seen as "the next step" for `Next.js`.
You will still be able to use normal `Page Router` features
under the `page` directory,
but you won't be able to use more recent advancements.

`Page Router` will suffice for small projects.
Both routing options allow for `SSR`,
though pages in the `app` directory are `SSR` by default,
alongside other performance benefits.

| Feature                | App Router                           | Page Router                                               |
| ---------------------- | ------------------------------------ | --------------------------------------------------------- |
| File-based routing     | Uses nested folders to define routes | Files directly represent routes                           |
| Components             | Server Components by default         | Client Components by default                              |
| Data fetching          | `fetch` function for data fetching   | `getServerSideProps`, `getStaticProps`, `getInitialProps` |
| Layouts                | Layouts can be nested and dynamic    | Layouts are static                                        |
| Dynamic routes         | Supported, but syntax differs        | Supported                                                 |
| Client-side navigation | Supported with `router.push`         | Supported with `Link` component                           |
| Priority               | Takes precedence over Page Router    | Fallback if no matching route in App Router               |

> taken from https://stackoverflow.com/questions/76570208/what-is-different-between-app-router-and-pages-router-in-next-js.

In this document,
we will \*\*focus on `App Router`.
Nonetheless, expect your typical `Next.js` project structure
to look like so.

```
- app
| - dashboard
| - home
  | - layout.tsx              // Layout
  | - page.tsx                // Page UI unique to the route
  | - loading.tsx             // Loading UI
  | - not-found.tsx           // Not found UI
  | - error.tsx               // Error UI
  | - global-error.tsx        // Global error UI
  | - route.tsx               // API endpoint
  | - template.tsx            // Re-rendered layout
  | - default.tsx             // Parallel route fallback page
- pages
- public
- ...

package.json

next.config.js            // Config file for Next.js
instrumentation.ts        // OpenTelemetry and Instrumentation file
middleware.ts             // Next.js request middleware

.env                      // Env variables
.env.local
.env.production
.env.development

.eslintrc.json            // Config file for Eslint
.gitignore

next-env.d.ts             // Typescript declaration file for Next.js
tsconfig.json             // Config file for Typescript
jsconfig.json             // Config file for Javascript
```

In layman's terms:

- `app` and `pages` directory can be inside a `src` directory, optionally.
- the top-level files are used to configure your application,
  manage dependencies,
  run middleware,
  integrate monitoring tools,
  and define environment variables.
- the **`public`** folder holds statics assets to be served.
- each route has specific file conventions,
  as mentioned above.
  In practical terms, the app would have a route `www.domain.com/home`.
  Do notice that routes can be nested.

Creating routes is simple.
Since it's file-based,
you just have to create folders to create
_route segments_ that maps to a URL segment.

<p align="center">
  <img src="https://github.com/dwyl/learn-nextjs/assets/17494745/fab10f02-4471-4226-b3bd-13fa331e47ef">
</p>

### What is the difference between a `page` and a `layout`?

To create UI for a route,
you will see a `layout`, a `page` file and a `template` file.
But what are the differences?
It's simpler than what you may realise!

A `page` is a UI **that is unique to a route**.
Simple as.
For example,
if you wanted to create a home directory
(`www.domain.com`)
and a dashboard inside the same route
(`www.domain.com/dashboard`),
you'd create a `dashboard` directory
inside the source directory.
Both of these directories would have a `page.*` file.

```
- app
|- page.ts    // Page file for root directory
|
|- dashboard
  |- page.ts  // Page file for dashboard directory
```

A `layout` is UI that is shared between multiple routes.
When navigating, layouts preserve the state
and remain interactive,
not re-rendering.

```
- app
|- layout.ts // Layout will be shared with the *root* and *dashboard*.
|- dashboard
  |- page.ts
```

As you can see, the layout effects the current route
and all nested child roots.

A `template` are similar to layouts
(which wrap each child layout or page).
However, while _`layouts` persist state across routes_,
**`templates` create a new instance for each of their children on navigation**.
This means that when a user navigates between routes that share a `template`,
a new instance of the component is mounted,
`DOM` elements are recreated,
state is not preserved,
and effects are re-synchronized.

### Navigation

To navigate between routes,
one may use:

- [`<Link>` component](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#link-component).
- the [`useRouter` hook](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook) (for Client Components - we will talk about this in the `Rendering` section).
- the [`redirect` function](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#redirect-function) (for Server components).
- the native [`History API`](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

We will not focus on how to use this in implementation,
but rather explain how navigation works in `Next.js`.
If you want to know, visit the docs linked
in each of the options above.

`Next.js`'s `App Router` uses a hybrid method for **routing** and **navigation**.
On the server, it `auto-splits` your code by route segments.
On the client, Next.js **pre-fetches** and **caches** these segments.
This means users navigate without full page reloads;
only changed segments re-render, improving performance.

- **code splitting** breaks your app code into smaller bundles for the browser,
  reducing data transfer and execution time,
  thus boosting performance.

- **pre-fetching** loads routes in the background before a person visits them.

- **caching** is made _in-memory_, on the client side.
  In `Next.js`, you can do this through
  [`Router Cache`](https://nextjs.org/docs/app/building-your-application/caching#router-cache).

While navigating,
`Next.js` only re-renders changing segments,
preserving shared segments and avoiding unnecessary rendering -
this is called **partial rendering**.

For example, navigating between `/dashboard/settings` and `/dashboard/analytics` renders the `settings` and `analytics` pages, while preserving the `dashboard` layout.

<p align="center">
  <img src="https://github.com/dwyl/learn-nextjs/assets/17494745/d01766e0-9277-4754-898f-9338e7a538d3">
</p>

Without partial rendering,
each navigation triggers a full page re-render,
which can sometimes be useful but hinders performance.

### `Dynamic` and `Parallel` routes

Sometimes, you don't know how the next segment in your route/URI
ahead of time and want to create routes with dynamic data
(`www.domain.com/dashboard?item=1`).
You can address these by wrapping the folder's name in square brackets.

For example: `app/blog/[slug]/page.js` would be a blog
where `[slug]`is the dynamic segment for blog posts.

```ts
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}
```

On the other hand, `Parallel Routes` allows you to
render multiple pages within the same layout.
These are particularly useful in dynamic sections
within an app, like dashboards and social media feeds.

To use parallel routes, we use `slots`,
defined by creating folder with a `"@"` behind it.

<p align="center">
  <img src="https://github.com/dwyl/learn-nextjs/assets/17494745/edf464e5-467c-4322-8f76-e55937959967">
</p>

Parallel routes are also useful to conditionally render routes
based on conditions.
So, for example, in dashboards,
you can render a specific content to an _administrator_ role
and a different one to a _user_ role.

### Intercepting routes

Intercepting routes allows loading a route
from another part of your application within the current layout,
useful for displaying route content without switching contexts.

For example, clicking a photo in a feed can display it in a modal over the feed.
`Next.js` intercepts the `/photo/123` route,
masks the URL, and overlays it on `/feed`.
Just like how Facebook does it!

However, navigating to the photo via a shareable URL
or refreshing the page should render the full photo page,
_not the modal_.

To intercept routes,
`Next.js` uses the `(..)` convention,
similar to `../` for segments.

- `(.)` matches segments on the **same level**
- `(..)` matches segments **one level above**
- `(..)(..)` matches segments **two levels above**
- `(...)` matches segments from the **root** `app` directory

For example, intercept the `photo` segment from `feed` by creating a `(..)photo` directory.

```
- feed
|- layout.js
|- (..)photo    // the rout is being intercepted here on the feed
  |- [id]
    |- page.js
- photo         // all the while having the normal photo page
  |- [id]
    |- page.js
layout.js
page,js
```

## Fetching data

Your web app is only useful for the data it shows.
Data fetching can be done in a few ways in `Next.js`,
depending if you're rendering your content on the `client`
or on the `server`.

- if on the `server`:
  - you can use the `fetch` function,
    which extends the [native `fetch` Web API function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
  - use third-party libraries.
- if on the `client`:
  - you can use the [`Route Handler`](https://nextjs.org/docs/app/building-your-application/routing/route-handlers).
  - you can use third-party libraries.

Regardless of the way you do it on each scenario,
you are able to **cache data**.

```ts
// 'force-cache' is the default, and can be omitted
fetch('https://...', { cache: 'force-cache' });
```

When caching data, you _must have a data revalidation strategy_.
This process of purging the data cache and re-fetching the latest data
is a must to keep the person up-to-date with the latest information.
In `Next.js`, cached data can be revalidated in two main ways:

- **`time-based revalidation`**,
  to revalidate data at a time interval.

```ts
fetch('https://...', { next: { revalidate: 3600 } });
```

- **`on-demand revalidation`**,
  to revalidate data by `path` or by `cache tag`.
  You have the option to tag cache entries
  and then revalidate all entries associated with given tag.

```ts
export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } });
  const data = await res.json();
  // ...
}
```

Alternatively, in both scenarios, you may use third-party libraries
to handle caching, revalidation and memoization differently
than what `Next.js` already provides.

In addition to this, `Next.js` allows you to:

- [**stream** data](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#streaming).
- fetch data [**sequentially or in parallel**](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#parallel-and-sequential-data-fetching).
- [**censor sensitive information**](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#preventing-sensitive-data-from-being-exposed-to-the-client) to prevent object instances
  with sensitive values from being passed to the client.

## Rendering

Rendering converts your code into user interfaces.
`React` and `Next.js` enable hybrid web applications,
rendering parts on the server or client.

- **client** - browser on the user's device requests and renders the UI.
- **server** - data center computer stores code, processes requests, and sends responses.

In `Next.js`, we ought to make a distinction
between **`Server Components`** and **`Client Components`**.

### Server components

`React Server Components` allow you to write UI
that can be rendered on the server.

The benefits to using server rendering are many,
and it's beyond the scope of this document to explain them.
Please refer to
https://nextjs.org/docs/app/building-your-application/rendering/server-components#benefits-of-server-rendering
to find more about it.

By default, `Next.js` (and by consequence, _you_) uses `Server Components`,
which will automatically implement server rendering without extra configuration.
There are three distinct strategies to do server rendering.

- **static rendering**, which is the default strategy.
  These routes are rendered at _build time_.
  It is cached and can inclusively be pushed to a CDN.
  This strategy is useful when a route has data that is static
  (not personalized to the user)
  and is already known at build time
  (e.g, a landing page).

- **dynamic rendering**,
  where each route is rendered _at request time_.
  Unlike static rendering,
  this is useful when a route has personalized data
  to the person.

- **streaming**,
  where the UI is progressively rendered from the server.
  The work needed to render is split into chunks
  and streamed to the client as it becomes ready.

### Client components

On the other hand,
`Client Components` allow you to write UI
that is _already prerendered on the server_,
which is then sent to the client,
where the latter executes Javascript to run it in the browser.

Because it's not default in `Next.js`,
developers need to add the [`use client` directive](https://react.dev/reference/rsc/use-client)
to mark the file as "part of the client bundle".

Here's an implementation example.

```ts
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

## Styling

`Next.js` adds supports for many styling techniques!

- [`CSS` modules](https://en.wikipedia.org/wiki/CSS).
- `Tailwind` CSS ([which we highly recommend](https://github.com/dwyl/learn-tailwind)!).
- [`SASS`](https://sass-lang.com/).
- [`CSS-in-JS`](https://cssinjs.org/?v=v10.10.1).

Using a styling technique is a highly opinionated topic.
You ought to know what _works best for you_
and use it in `Next.js`!

## Optimizations

`Next.js` comes with a myriad of optimizations out-of-the-box.
It optimizes images, videos, fonts,
minifies your bundle,
allows you to boost your web app's SEO
with simple configuration.

The list is extensive.
Check it out at
https://nextjs.org/docs/app/building-your-application/optimizing.

What _you_ need to know is how you can leverage these optimizations.
`Next.js` provides built-in components that do it for you,
so you just got to use them!

- `Image` components optimize images for performance by lazy loading
  and resizing images based on device size.
- `Link` components will _prefetch pages in the background_,
  for faster navigation and performance.
- `Script` components will give you control over loading
  and executing third-party scripts.
- and many more!

# How?

Although we've created our own small application
just to have a feeling over `Next.js`,
we'd be remiss if we didn't refer you
to [`Next.js`'s demo tutorial](https://nextjs.org/learn).

This resource comprehensively guides you to creating a dashboard
and gives an overview over most of the features that `Next.js`
provides.

Our version of the dashboard 
differs to the original one from `Next.js`'s documentation.
The latter needs you to create an account in `Vercel` 
and a database to fetch data.
In our version, we use two external APIs:
- [`https://picsum.photos`](https://picsum.photos),
to fetch random, public, free images.
- [`https://jsonplaceholder.typicode.com/`](https://jsonplaceholder.typicode.com/)
to fetch `posts` and `photos` `JSON` objects
to be showcased in the application.

The main objective of following through with this demo
was to learn more about routing and rendering.
