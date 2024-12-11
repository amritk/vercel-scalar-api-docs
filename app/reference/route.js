// app/reference/route.js
import { ApiReference } from '@scalar/nextjs-api-reference'

const config = {
  spec: {
    url: 'https://spec.speakeasy.com/vercel/vercel-docs/vercel-oas-with-code-samples',
  },
}

export const GET = ApiReference(config)