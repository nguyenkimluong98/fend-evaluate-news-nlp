# Evaluate a news article with Natural Language Processing

## Install dependencies

You can install all dependencies by running command:

```
npm install
```

## Developing

To start develop mode, you can do those commands:

Running webpack develop: `npm run build-dev`

## Production

To start product mode, run you prod webpack and server:

1. Run prod webpack: `npm run build-prod`
2. Start server: `npm run start`
3. Access link: `http://localhost:3000`
4. Test evaluate, paste url to input field: `https://vi.wikipedia.org/wiki/Ubuntu`

## Sentiment Analysis API version 2.1

Check the docs: `https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/examples` and signup to get you `API_KEY`

Create `.env` file have content: `API_KEY=you_key`

\*\*Note: You can use this example key: `3b65b0153beeed6af71df8ba195e4d82`

## Test project

You can run test for this project by command: `npm run test`
