import { NextResponse } from "next/server";

const EMAIL_RE = /.+@.+\..+/;

export async function POST(req: Request) {
  let body: { email?: unknown };
  try {
    body = (await req.json()) as { email?: unknown };
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.LOOPS_API_KEY;

  if (!apiKey) {
    // Dev / preview without LOOPS_API_KEY — accept and log only.
    console.log("[waitlist] no LOOPS_API_KEY — would have added:", email);
    return NextResponse.json({ ok: true, dryRun: true });
  }

  const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      source: "holobob.com waitlist",
      ...(process.env.LOOPS_MAILING_LIST_ID
        ? { mailingLists: { [process.env.LOOPS_MAILING_LIST_ID]: true } }
        : {}),
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("[waitlist] loops error", res.status, text);
    return NextResponse.json({ error: "Couldn’t add you. Try again shortly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
