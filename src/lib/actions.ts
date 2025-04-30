'use server'

import { Resend } from 'resend'

export async function sendEmail(email: string, message: string) {
  const resendKey = process.env.RESEND_API_KEY
  const resend = new Resend(resendKey)

  const { error } = await resend.emails.send({
    from: `noreply@djohnson.dev`,
    to: ['derekaj16@gmail.com'],
    subject: 'Message from Portfolio',
    html: `
      <p>From: ${email}</p>
      <p>${message}</p>
    `,
  })

  if (error) throw new Error(`error in sending the message: ${error.message}`)
  return
}
