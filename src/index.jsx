import React from "react";
import ReactDOM from "react-dom";

import "./styles/color.css";
import "./styles/font.css";
import "./styles/index.css";
import "./styles/tailwind.css";

import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "store/store";
import { BrowserRouter } from "react-router-dom";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Initialize PostHog using environment variables
posthog.init(process.env.REACT_APP_POSTHOG_KEY, {
  api_host: process.env.REACT_APP_POSTHOG_HOST,
});

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <PostHogProvider client={posthog}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PostHogProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);