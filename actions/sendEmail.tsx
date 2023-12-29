"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown) => {
    if (!value || typeof value !== 'string') {
        return false
    }
    return true;
}

export const sendEmail = async (formData: FormData) => {
    const message = formData.get("message");
    const senderEmail = formData.get("senderEmail");

    if (!validateString(sendEmail)) {
        return {
            error: "Invalid email address"
        }
    }

    if (!validateString(message)) {
        return {
            error: "Invalid message"
        }
    }

    await resend.emails.send({
        from: 'Portfolio Website Contact <onboarding@resend.dev>',
        to: "vikrambhat@outlook.com",
        subject: "Message from portfolio website",
        react: <ContactFormEmail message={message as string} senderEmail={senderEmail as string} />,
        reply_to: senderEmail as string,
    });
}