import type { Context } from "https://edge.netlify.com";

const COOKIE_NAME = "nils_auth";
const COOKIE_VALUE = "1";

function loginPage(error = false): Response {
  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Geschützter Bereich</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      font-family: "Helvetica Neue", Arial, sans-serif;
      padding: 24px;
    }
    .card {
      width: 100%;
      max-width: 360px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #2f545a;
      text-align: center;
    }
    p.sub {
      font-size: 0.875rem;
      color: #58585a;
      text-align: center;
    }
    input[type="password"] {
      width: 100%;
      padding: 12px 14px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.15s;
    }
    input[type="password"]:focus { border-color: #3e6b73; }
    button {
      width: 100%;
      padding: 12px;
      background: #3e6b73;
      color: #fff;
      font-size: 0.9375rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s;
    }
    button:hover { background: #2f545a; }
    .error {
      font-size: 0.875rem;
      color: #dc2626;
      text-align: center;
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-radius: 6px;
      padding: 10px 14px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Nils Negwer</h1>
    <p class="sub">Bitte geben Sie das Passwort ein, um die Seite zu öffnen.</p>
    ${error ? `<p class="error">Passwort nicht korrekt – bitte erneut versuchen.</p>` : ""}
    <form method="POST">
      <input
        type="password"
        name="password"
        placeholder="Passwort"
        autocomplete="current-password"
        autofocus
        required
      />
      <br /><br />
      <button type="submit">Weiter</button>
    </form>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: error ? 401 : 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export default async function auth(request: Request, context: Context) {
  const url = new URL(request.url);

  // Statische Assets (Netlify-interne Pfade) immer durchlassen
  if (url.pathname.startsWith("/.netlify/")) {
    return context.next();
  }

  const sitePassword = Deno.env.get("SITE_PASSWORD") ?? "";

  // ── POST: Passwort auswerten ───────────────────────────────────
  if (request.method === "POST") {
    let submitted = "";
    try {
      const body = await request.text();
      const params = new URLSearchParams(body);
      submitted = params.get("password") ?? "";
    } catch {
      // ignore parse errors
    }

    if (submitted === sitePassword && sitePassword !== "") {
      const redirectTo = url.pathname + (url.search ?? "");
      return new Response(null, {
        status: 302,
        headers: {
          "Location": redirectTo,
          "Set-Cookie": `${COOKIE_NAME}=${COOKIE_VALUE}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`,
        },
      });
    }

    return loginPage(true);
  }

  // ── GET/alle anderen: Cookie prüfen ───────────────────────────
  const cookieHeader = request.headers.get("cookie") ?? "";
  const isAuthenticated = cookieHeader
    .split(";")
    .some((c) => c.trim() === `${COOKIE_NAME}=${COOKIE_VALUE}`);

  if (isAuthenticated) {
    return context.next();
  }

  return loginPage(false);
}

export const config = { path: "/*" };
