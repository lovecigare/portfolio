import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_LtzAtrF7_7M29N6nphNi2Wa4v4cChckDj");

export async function POST(req: Request) {
  try {
    const { name, email, company, projectType, budget, message } = await req.json();

    await resend.emails.send({
      from: "noreply@allancastrence.space",
      to: "allancastrence5@gmail.com",
      subject: name + `(${company})(${projectType})(${budget})`,
      html: `<p>${message}.</p><br><p><b>${email}<b></p>`
    });

    return NextResponse.json({ success: true });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
