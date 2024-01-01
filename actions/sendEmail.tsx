"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";

console.log(process.env)
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message");
    const senderEmail = formData.get("senderEmail");

    if (!validateString(senderEmail, 100)) {
        return {
            error: "Invalid email address"
        }
    }

    if (!validateString(message, 2000)) {
        return {
            error: "Invalid message"
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Portfolio Website Contact <onboarding@resend.dev>',
            to: "bhat_vikram@outlook.com",
            subject: "Message from portfolio website",
            react: <ContactFormEmail message={message as string} senderEmail={senderEmail as string} />,
            reply_to: senderEmail as string,
        });
    }
    catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return { data }
}