const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,      // smtp-relay.brevo.com
  port: process.env.SMTP_PORT,      // 587
  secure: false,                    // Brevo → false
  auth: {
    user: process.env.SMTP_USER,    // your Brevo login (API SMTP email)
    pass: process.env.SMTP_PASS,    // SMTP Key
  }
});

const sendNotificationEmail = async (name, phone, email, message) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission - Aster Energy",
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p>This email was automatically sent via Brevo SMTP.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email Sent Successfully");
  } catch (error) {
    console.error("Email error:", error);
  }
};

module.exports = sendNotificationEmail;
