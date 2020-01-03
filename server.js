const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const formidable = require('formidable');
const nodemailer = require("nodemailer");
const app = express();
var fs = require("fs");

const PORT = process.env.PORT || 8080;

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
    require("dotenv").config({ path: ".env.test" });
}   else if (process.env.NODE_ENV === "development") {
    require("dotenv").config({ path: ".env.development" });
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', express.static(`${__dirname}/public`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      name: "mail.neuraldynamicstechnologies.com",
      host: "box2121.bluehost.com",
      port: 465,
      secure: true,
      auth: {
        user: "noreply@neuraldynamicstechnologies.com",
        pass: "Ebeam2018!"
      }
    })

    let mailOptions = {
      from: "noreply@neuraldynamicstechnologies.com",
      to: ['RyanCRickert@gmail.com'],
      replyTo: req.body.email,
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }
    })
  })
});

app.post("/api/formPDF", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {

    if(fields.file == "undefined") {
      return console.log("There was an error with the form.  Check the file.")
    }

    var old_path = files.file.path,
        file_size = files.file.size,
        file_ext = files.file.name.split('.').pop(),
        index = old_path.lastIndexOf('/') + 1,
        file_name = old_path.substr(index),
        new_path = path.join(file_name + '.' + file_ext);

    if (file_ext.toLowerCase() == "docx" || file_ext.toLowerCase() == "pdf" || file_ext.toLowerCase() == "txt") {

      fs.readFile(old_path, function(err, data) {
          fs.writeFile(new_path, data, function(err) {
              fs.unlink(old_path, function(err) {
                  if (err) {
                      res.status(500);
                      res.json({'success': false});
                  } else {
                      res.status(200);
                      res.json({'success': true});

                      nodemailer.createTestAccount((err, account) => {

                        const htmlEmail = `
                          <h3>Contact Details</h3>
                          <ul>
                            <li>Name: ${fields.name}</li>
                            <li>Email: ${fields.email}</li>
                          </ul>
                          <h3>Message</h3>
                          <p>${fields.message}</p>
                        `
                    
                        let transporter = nodemailer.createTransport({
                          name: "mail.neuraldynamicstechnologies.com",
                          host: "box2121.bluehost.com",
                          port: 465,
                          secure: true,
                          auth: {
                            user: "noreply@neuraldynamicstechnologies.com",
                            pass: "Ebeam2018!"
                          }
                        })
                    
                        let mailOptions = {
                          from: "noreply@neuraldynamicstechnologies.com",
                          to: ['RyanCRickert@gmail.com'],
                          replyTo: fields.email,
                          subject: "New Message",
                          text: fields.message,
                          html: htmlEmail,
                          attachments: [
                            {
                              filename: `${fields.name} Resume.${file_ext}`,
                              path: new_path
                            }
                        ]
                        };
                    
                        transporter.sendMail(mailOptions, (err, info) => {
                          if (err) {
                              return console.log(err)
                          }
                        })
                      });
                  }
              });
          });
      });
  }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});