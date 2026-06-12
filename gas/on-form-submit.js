// Trigger: Form > On form submit
// Setup: Project Settings > Script Properties > add RECIPIENTS = "a@example.com,b@example.com"

function onFormSubmit(e) {
  var recipients = PropertiesService.getScriptProperties().getProperty("RECIPIENTS");
  if (!recipients) {
    Logger.log("RECIPIENTS script property not set");
    return;
  }

  var items = e.response.getItemResponses();
  var body = items.map(function (r) {
    return r.getItem().getTitle() + ":\n" + r.getResponse();
  }).join("\n\n");

  var subject = "New contact form submission — TIKS Ultimate";
  // Use the Subject field value in the email subject if present
  items.forEach(function (r) {
    if (r.getItem().getTitle().toLowerCase() === "subject") {
      subject = "TIKS contact: " + r.getResponse();
    }
  });

  MailApp.sendEmail(recipients, subject, body);
}
