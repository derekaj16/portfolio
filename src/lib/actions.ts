import { Resend } from 'resend'

export async function sendEmail(email: string, message: string) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: email,
    to: ['derekaj16@gmail.com'],
    subject: 'Message from Portfolio',
    html: `<p>${message}</p>`,
  })
  console.log(data)
  if (error) throw error
  return
}
