const nodemailer = require("nodemailer");

const sendNotificationEmail = async (name, phone, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission - Aster Energy",
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p>This email was automatically triggered by your website's contact form.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("📨 Email Notification Sent");

  } catch (error) {
    console.log("Email Error:", error);
  }
};

module.exports = sendNotificationEmail;
