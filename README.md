# Resas Dashboard

This site visualizes demographics by prefecture.

## Requirement

- Node.js V20
- Resas API Key

## Dependencies

- Next.js (App Router)
- pino
- Jest
- React Testing Library
- Recharts
- Zustand
- Zod
- Storybook
- ESLint
- Prettier

## Storybook

```
npm run storybook
```

## Test

```
cp .env.example .env.test.local
# Edit .env.test.local
npm run test
```

## Run locally (For dev use)

```
cp .env.example .env.local
# Edit .env.local
npm run dev
```

## Deploy

Push to main branch and it will be deployed by Vercel.
