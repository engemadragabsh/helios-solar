import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ConsultationSchema = z.object({
  fullName: z.string().min(2).max(120),
  company: z.string().max(200).optional().or(z.literal("")),
  phone: z
    .string()
    .min(7)
    .max(20)
    .regex(/^[+\d\s()-]+$/, "Invalid phone format"),
  email: z.string().email().max(200),
  projectType: z.string().min(1).max(100),
  projectSize: z.string().min(1).max(100),
  location: z.string().max(200).optional().or(z.literal("")),
  message: z.string().max(3000).optional().or(z.literal("")),
  language: z.enum(["ar", "en"]).default("ar"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = ConsultationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: parsed.error.issues?.[0]?.message || "Invalid data",
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // In a real app, save to DB and/or send notification email.
    // For now, we persist to in-memory log and return a tracking ID.
    const trackingId = `HEL-${Date.now().toString(36).toUpperCase()}`;

    console.log("[Consultation Request]", {
      trackingId,
      receivedAt: new Date().toISOString(),
      data,
    });

    return NextResponse.json({
      ok: true,
      trackingId,
      message:
        data.language === "ar"
          ? "تم استلام طلبك بنجاح. سيتواصل معك فريقنا خلال ٢٤ ساعة عمل."
          : "Your request has been received. Our team will contact you within 24 business hours.",
    });
  } catch (err) {
    console.error("[Consultation] Error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, service: "consultation-api" });
}
