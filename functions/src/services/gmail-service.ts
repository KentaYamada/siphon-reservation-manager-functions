import { config } from "firebase-functions";
import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as Mail from "nodemailer/lib/mailer";
import * as SMTPConnection from "nodemailer/lib/smtp-connection";

/**
 * Gmail service
 */
export class GmailService {
  // Cloud functions env
  private static readonly config: config.Config = functions.config();

  /**
   * Gmail configurations
   */
  static get gmailConfig() {
    return GmailService.config.gmail;
  }

  /**
   * Send email
   *
   * @param {Mail.Options} payload
   * @returns {Promise<any>}
   */
  static send(payload: Mail.Options): Promise<nodemailer.SentMessageInfo> {
    const connection: SMTPConnection.Options = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: GmailService.config.gmail.email,
        pass: GmailService.config.gmail.password,
      },
    };
    const transport = nodemailer.createTransport(connection);

    return transport.sendMail(payload);
  }
}
