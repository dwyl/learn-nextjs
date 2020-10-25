# Learn NextJS

## Why?

There's a _lot_ of Hype around `Next.js` and `Now.sh` (_recently renamed/rebranded "Vercel"_)
The platform was founded by
[Guillermo Rauch](https://vercel.com/about/rauchg), 
creator of _many_ popular Node.js modules including socket.io and mongoose.


This is the demo app built following:

https://nextjs.org/learn/basics/create-nextjs-app/setup

```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
```

Finished app: https://learn-nextjs-five.vercel.app
![image](https://user-images.githubusercontent.com/194400/97640430-9e39a200-1a38-11eb-9c07-4791ef58562e.png)


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