'use server';

import { Resend } from 'resend';
import ClientEmail from './ClientEmail';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function submitContactForm(_, formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const projectType = formData.get('projectType');
  const budget = formData.get('budget');
  const timeline = formData.get('timeline');
  const message = formData.get('message');

  try {

    await resend.emails.send({
      from: 'jake@everlesstech.com',
      to: email,
      subject: `Thanks for reaching out!`,
      replyTo: 'jake@everlesstech.com',
      react: <ClientEmail name={name} />
    })

    await resend.emails.send({
      from: 'contact@everlesstech.com', // must be verified
      to: 'jake@everlesstech.com',
      subject: `New Contact: ${name} (${projectType})`,
      replyTo: email,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Company: ${company}
Project Type: ${projectType}
Budget: ${budget}
Timeline: ${timeline}

Message:
${message}
      `.trim(),
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to send message. Please try again.' };
  }
}
