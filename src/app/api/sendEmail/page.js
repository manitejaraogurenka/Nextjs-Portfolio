export default async function handler(req, res) {
  console.log("Handler function called");
  console.log("Request method:", req.method);

  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter using Ethereal credentials
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.ETHEREAL_USER,
        pass: process.env.ETHEREAL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "gurenkamanitejarao@gmail.com",
      subject: `Message from ${name}`,
      text: message,
    };

    try {
      // Send email using the created transporter
      let info = await transporter.sendMail(mailOptions);
      console.log("Message sent: %s", info.messageId);

      // Output the preview URL for testing in Ethereal
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      // Check if res is defined before using it
      if (res) {
        res.status(200).json({ message: "Email sent successfully!" });
      } else {
        console.error("Response object is undefined");
      }
    } catch (error) {
      console.error("Error sending email:", error);

      // Check if res is defined before using it
      if (res) {
        res.status(500).json({ message: "Failed to send email" });
      } else {
        console.error("Response object is undefined");
      }
    }
  } else {
    console.error("Invalid request method:", req.method);

    // Check if res is defined before using it
    if (res) {
      res.status(405).end(); // Method Not Allowed
    } else {
      console.error("Response object is undefined");
    }
  }
}
