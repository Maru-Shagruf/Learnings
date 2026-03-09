import nodemailer from 'nodemailer';

async function sendMyEmail() {
  console.log(" Creating a fake email account for testing...");
  
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass  
    }
  });

  console.log(" Sending the email...");

  const info = await transporter.sendMail({
    from: '"My Node App" <admin@myapp.com>', 
    to: "testuser@gmail.com",              
    subject: "Hello from Node.js! ",       
    text: "You just sent your first email using Nodemailer!", 
  });

  console.log(" Email sent successfully!");
  console.log(" Click here to view it: " + nodemailer.getTestMessageUrl(info));
}

sendMyEmail();