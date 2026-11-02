import { docs } from "fumadocs-mdx:collections/server"
import { env } from "@crikket/env/web"
import { type InferPageType, loader } from "fumadocs-core/source"
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons"

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
})

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"]
  const path = `/og/docs/${segments.join("/")}`

  return {
    segments,
    path,
    url: new URL(path, env.NEXT_PUBLIC_SITE_URL).toString(),
  }
}

// ponytail: fumadocs 16.5 PageData types omit the processed-markdown methods
// that the runtime provides; widen locally instead of pinning the whole stack.
type WithProcessedMarkdown = {
  data: { getText: (mode: "processed" | "raw") => Promise<string> }
}

export async function getLLMText(page: InferPageType<typeof source>) {
  const processed = await (
    page as unknown as WithProcessedMarkdown
  ).data.getText("processed")

  return `# ${page.data.title}

${processed}`
}
