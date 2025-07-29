'use server';

import { Resend } from 'resend';
import ClientEmail from './ClientEmail';


export async function submitContactForm(_, formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const projectType = formData.get('projectType');
  const budget = formData.get('budget');
  const timeline = formData.get('timeline');
  const message = formData.get('message');
  
  try {
    const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

    await resend.emails.send({
      from: 'Jake Estep <jake@everlesstech.com>',
      to: email,
      subject: `Thanks for reaching out!`,
      replyTo: 'jake@everlesstech.com',
      react: <ClientEmail name={name} />
    })

    await resend.emails.send({
      from: 'ELT Contact <contact@everlesstech.com>', // must be verified
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
    return { success: false, error: <span>Failed to send message. Please try again, or email <a href="mailto:jake@everlesstech.com">jake@everlesstech.com </a>for assistance</span>};
  }
}
