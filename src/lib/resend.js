import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'dineshydv3505@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});