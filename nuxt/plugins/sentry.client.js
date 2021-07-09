import Vue from "vue";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

export default (ctx, inject) => {
  console.log(ctx);
  Sentry.init({
    Vue,
    dsn: 'https://2c54a766a73049afbf12066ea032bffc@o914936.ingest.sentry.io/5856299',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    beforeSend: (event) => {
      if (ctx.isDev) {
        console.log('Dev mode disable sentry')
      }
      return ctx.isDev ? null : event;
    },
    logErrors: true,
  });
  inject('sentry', Sentry)
}
