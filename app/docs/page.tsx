"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";
import sluga from "sluga";

export default function ApiReferencePage() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: "https://openapi.vercel.sh/",
        },
        hideTestRequestButton: true,
        hideClientButton: true,
        withDefaultFonts: false,
        tagsSorter: "alpha",
        operationsSorter: "alpha",
        searchHotKey: "l",
        defaultOpenAllTags: false,
        generateOperationSlug: (operation: {
          path: string;
          operationId: string | undefined;
          method: string;
          summary: string | undefined;
        }) =>
          `${
            operation.summary ? sluga(operation.summary) : `${operation.path}`
          }`,
        hiddenClients: [
          "libcurl",
          "clj_http",
          "httpclient",
          "restsharp",
          "jquery",
          "native",
          "http1.1",
          "asynchttp",
          "nethttp",
          "okhttp",
          "unirest",
          "xhr",
          "native",
          "request",
          "unirest",
          "nsurlsession",
          "cohttp",
          "guzzle",
          "http1",
          "http2",
          "webrequest",
          "restmethod",
          "requests",
          "httr",
          "native",
          "httpie",
          "wget",
          "nsurlsession",
          "undici",
        ],
        defaultHttpClient: {
          targetKey: "js",
          clientKey: "fetch",
        },
      }}
    />
  );
}
