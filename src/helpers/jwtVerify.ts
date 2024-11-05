import jwt from "jsonwebtoken";
import { JwtDecoded } from "../type/any";

const jwtVerify = (secret: string, token: string): Promise<JwtDecoded> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        reject(err);
        return;
      }

      resolve(decoded as JwtDecoded);
      return;
    });
  });
};

export default jwtVerify;
