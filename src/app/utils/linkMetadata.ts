export type LinkMetadata = {
  url: string;
  hostname: string;
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
  favicon?: string;
};

type FetchOptions = {
  timeoutMs?: number;
  revalidateSeconds?: number;
};

function firstMatch(patterns: RegExp[], input: string): string | undefined {
  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match?.[1]) return decodeHtmlEntities(match[1]).trim();
  }
  return undefined;
}

function decodeHtmlEntities(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function toAbsoluteUrl(maybeUrl: string | undefined, base: string): string | undefined {
  if (!maybeUrl) return undefined;
  try {
    return new URL(maybeUrl, base).toString();
  } catch {
    return undefined;
  }
}

function parseMetadata(html: string, url: string): Omit<LinkMetadata, "url" | "hostname"> {
  const title =
    firstMatch(
      [
        /<meta\s+property=["']og:title["']\s+content=["']([^"']+)["'][^>]*>/i,
        /<meta\s+name=["']twitter:title["']\s+content=["']([^"']+)["'][^>]*>/i,
      ],
      html,
    ) ??
    firstMatch([/<title[^>]*>([^<]+)<\/title>/i], html);

  const description = firstMatch(
    [
      /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["'][^>]*>/i,
      /<meta\s+name=["']description["']\s+content=["']([^"']+)["'][^>]*>/i,
      /<meta\s+name=["']twitter:description["']\s+content=["']([^"']+)["'][^>]*>/i,
    ],
    html,
  );

  const image = toAbsoluteUrl(
    firstMatch(
      [
        /<meta\s+property=["']og:image(?::url)?["']\s+content=["']([^"']+)["'][^>]*>/i,
        /<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["'][^>]*>/i,
      ],
      html,
    ),
    url,
  );

  const siteName = firstMatch(
    [/<meta\s+property=["']og:site_name["']\s+content=["']([^"']+)["'][^>]*>/i],
    html,
  );

  const favicon = toAbsoluteUrl(
    firstMatch(
      [
        /<link\s+[^>]*rel=["'](?:shortcut\s+icon|icon)["'][^>]*href=["']([^"']+)["'][^>]*>/i,
      ],
      html,
    ),
    url,
  );

  return { title, description, image, siteName, favicon };
}

export async function fetchOpenGraphMetadata(
  url: string,
  options: FetchOptions = {},
): Promise<LinkMetadata> {
  const timeoutMs = options.timeoutMs ?? 3500;
  const revalidateSeconds = options.revalidateSeconds ?? 60 * 60 * 24; // 24h

  const hostname = (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  })();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; BizzGrowBot/1.0; +https://bizzgrowlabs.com)",
        accept: "text/html,application/xhtml+xml",
      },
      next: { revalidate: revalidateSeconds },
    });

    if (!res.ok) {
      return { url, hostname };
    }

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("text/html")) {
      return { url, hostname };
    }

    const raw = await res.text();
    const html = raw.slice(0, 200_000);
    return { url, hostname, ...parseMetadata(html, url) };
  } catch {
    return { url, hostname };
  } finally {
    clearTimeout(timeout);
  }
}
