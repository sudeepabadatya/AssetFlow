import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,

    pass: process.env.EMAIL_PASS,
  },
});

export async function sendResetEmail(
  email: string,
  link: string
) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: email,

    subject: "Reset Password",

    html: `
      <h2>AssetFlow Password Reset</h2>

      <p>Click the link below to reset your password.</p>

      <a href="${link}">
        Reset Password
      </a>

      <p>This link expires in 15 minutes.</p>
    `,
  });
}