import { ApiError } from "../errors/error.custom";
import { VerifyModel } from "../database/models";
import nodemailer from "nodemailer";
import CONFIG from "../config";
import bcrypt from "bcrypt";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: CONFIG.GOOGLE.USER,
    pass: CONFIG.GOOGLE.PASS,
  },
});

export default async (email: string) => {
  const code = (Math.random() * 10).toFixed(3).replace(".", "");

  const response = await transport.sendMail({
    subject: "KursovaApp verification code!",
    from: `KursovaApp <${CONFIG.GOOGLE.USER}>`,
    to: email,
    html: `Your code is <b>${code}<b>`,
  });

  const hashedCode = await bcrypt.hash(code, 12);

  if (response.accepted.length > 0) {
    if (await VerifyModel.exists({ email })) {
      await VerifyModel.deleteOne({ email });
      await VerifyModel.create({
        email,
        code: hashedCode,
      });
      return;
    }

    await VerifyModel.create({
      email,
      code: hashedCode,
    });
    return;
  }

  console.log(response);
  throw ApiError.BadRequest("Send email error!");
};
