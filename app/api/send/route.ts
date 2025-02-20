import { EmailTemplate } from "@/app/component/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body to get form data
    const { name, email, phone, slug } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "True value property <onboarding@resend.dev>",
      to: ["dev.arbaaz@gmail.com"],
      subject: "Property Lead",
      react: await EmailTemplate({
        name, // Send form data (name)
        email, // Send form data (email)
        phone, // Send form data (phone)
        slug
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
