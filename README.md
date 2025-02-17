Core components:
Game STATE:
- i,j grid
    > Tile:
        + letter
        + isActive (e.g. Can this )
        + neighbors

- Tile Tree
    + For each tile:
        ++ DAG Tree of neighbors with context of parents
        ++ Depth (length of word)

Game VIEW:
- display the grid
- display the tree
e.g. 
P O I
T F D
E U Q

All possible words for P with d=4:
P
|_  O
    |_  T
        |_E
        |_U
        |_F
    |_  F       <-- At this level we need to know that P and O are already used
        |_T
        |_E
        |_U
        |_Q
        |_D
        |_I
    |_  D
        |_IFUQ
    |_  I_FD
|_  F
    |_  * - 
|_  T
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
