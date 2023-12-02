import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  courier?: JwtPayload;
}
export const Auth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith("Bearer")) {
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return res.json({ ErrMsg: "No token found" });
    }
    try {
      const decode = jwt.verify(token, `${process.env.secret}`) as JwtPayload;

      const userID = decode.courier;
      req.courier = userID;

      return next();
    } catch (error) {
      console.log(error);
      return res.status(401).json({ ErrMsg: "Unauthorized - Invalid token" });
    }
  } else {
    return res.json({ ErrMsg: "An Error occured Not Authorized" });
  }
};
