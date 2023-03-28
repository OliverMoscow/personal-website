import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

//@ts-ignore
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, subject, message } = req.body;
    console.log(req.body);

    if (!subject || !message) {
      return res.status(400).json({ error: "Subject and message are required" });
    }

    const html = `<p>${message}</p>`;

    await sendgrid.send({
      to: email,
      from: "omoscow15@gmail.com",
      subject: subject,
      html: html
    });
  } catch (error:any) {
    if (error.response) {
      console.log(error.response.body.errors);
    } else {
      console.log(error);
    }
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ message: "Email sent successfully" });
}
