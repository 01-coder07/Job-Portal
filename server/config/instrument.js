// Import with `import * as Sentry from "@sentry/node"` if you are using ESM

import * as Sentry from "@sentry/node"
Sentry.init({
  dsn: "https://7624eeef0719e6f31654e9e58c1b710a@o4511143221329920.ingest.us.sentry.io/4511143237582848",
  sendDefaultPii: true,
  tracesSampleRate: 1.0, 
   integrations: [
    Sentry.mongoIntegration(),    
    Sentry.mongooseIntegration(),  
  ],
});

