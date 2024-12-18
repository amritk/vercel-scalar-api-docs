"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";

export default function ApiReferencePage() {
  return (
    <ApiReferenceReact
      configuration={{
        spec: {
          url: "https://spec.speakeasy.com/vercel/vercel-docs/vercel-oas-with-code-samples",
        },
        withDefaultFonts: false,
        tagsSorter: "alpha",
        searchHotKey: "k",
        hideDarkModeToggle: true,
        hideDownloadButton: true,
        hiddenClients: true,
        defaultHttpClient: {
          targetKey: "shell",
          clientKey: "curl",
        },
        operationsSorter: "alpha",
      }}
    />
  );
}
