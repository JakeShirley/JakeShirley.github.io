export function GET() {
  return new Response(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0;url=/blog/wled-house-numbers/">
    <link rel="canonical" href="https://jakeshirley.com/blog/wled-house-numbers/">
    <title>WLED House Numbers - Jake Shirley</title>
  </head>
  <body>
    <p><a href="/blog/wled-house-numbers/">WLED House Numbers</a></p>
  </body>
</html>`, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}