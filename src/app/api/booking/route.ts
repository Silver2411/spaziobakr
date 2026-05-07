import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  type?: string;
  date?: string;
  timeStart?: string;
  timeEnd?: string;
  crew?: string;
  equipment?: string;
  notes?: string;
  locale?: string;
};

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!data.name || !data.email || !data.type || !data.date) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!isValidEmail(data.email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  // Log the booking. In production, plug in Resend / Postmark / SMTP here
  // and persist to DB. For now we log to stdout — visible in Vercel logs.
  console.log("[bakr/booking]", JSON.stringify(data));

  return NextResponse.json({ ok: true });
}
