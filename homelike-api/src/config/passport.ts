import { User } from "../models/user.model";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { Strategy as AnonymousStrategy } from "passport-anonymous";
declare module "express" { 
  export interface Request{
    user: any;
  }
}

const JWT_SECRET = process.env.JWT_SECRET;

interface JWTPayload {
  id: string;
  name: string;
  email: string;
  iat: number;
  exp: number;
}
export const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
  },
  async (payload: JWTPayload, done) => {
    try {
      const user = await User.findById(payload.id);
      if (!user) return done(null, false);
      done(null, user.toJSON());
    } catch (e) {
      return done(e);
    }
  }
);

export const anonymousStrategy = new AnonymousStrategy();
