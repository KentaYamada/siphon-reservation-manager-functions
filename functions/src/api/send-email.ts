import * as functions from "firebase-functions";
import * as Mail from "nodemailer/lib/mailer";
import { GmailService } from "../services/gmail-service";

/**
 * Send email
 */
export const sendEmail = functions.https.onCall(() => {
  const gmailConfig = GmailService.gmailConfig;
  const option: Mail.Options = {
    from: `Cafe de Gamoyon<${gmailConfig.email}>`,
    to: "kntx.fullspeed.428@gmail.com",
    subject: "Send mail testing",
    text: "This is test mail",
  };

  return GmailService.send(option)
    .then((response) => {
      console.log(response);
      return {
        message: "送信しました",
      };
    })
    .catch((reason) => {
      console.error(reason);
      return {
        message: "送信に失敗しました",
      };
    });
});
