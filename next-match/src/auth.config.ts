import { compare } from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./actions/authAction";
import { loginSchema } from "./lib/schemas/loginSchema";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      async authorize(creds) {
        const validate = loginSchema.safeParse(creds);

        if (validate.success) {
          const { email, password } = validate.data;

          const user = await getUserByEmail(email);

          if (
            !user ||
            !user.passwordHash ||
            !(await compare(password, user.passwordHash))
          )
            return null;

          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
