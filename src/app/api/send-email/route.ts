import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_LtzAtrF7_7M29N6nphNi2Wa4v4cChckDj");

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    await resend.emails.send({
      from: "noreply@allancastrence.space",
      to: email,
      subject: "Thanks for subscribing!",
      html: `<p>Welcome! You're now subscribed.</p>`
    });

    return NextResponse.json({ success: true });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
