import Vue from "vue";
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

export default (ctx, inject) => {
  // eslint-disable-next-line no-console
  console.log(ctx);
  Sentry.init({
    Vue,
    dsn: ctx.$config.sentry.dsn,
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
    beforeSend: (event) => {
      return ctx.isDev && !ctx.$config.sentry.enabled ? null : event;
    },
    logErrors: true,
  });
  inject('sentry', Sentry)
}
