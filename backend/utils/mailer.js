const sendNotificationEmail = async (name, phone, email, message) => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": process.env.BREVO_API_KEY,   // Use Brevo API key
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { 
          name: "Aster Energy",
          email: "no-reply@asterenergy.com"   // You can change this
        },
        to: [
          { email: process.env.EMAIL_TO }      // Admin email
        ],
        subject: "New Contact Form Submission - Aster Energy",
        htmlContent: `
          <h2>New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <br/><br/>
          <p>This email was automatically sent using Brevo API.</p>
        `,
      }),
    });

    const data = await response.json();
    console.log("Brevo Response:", data);

    return data;
  } catch (error) {
    console.error("Brevo API Error:", error);
  }
};

module.exports = sendNotificationEmail;
