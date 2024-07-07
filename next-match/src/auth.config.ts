import { compare } from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./actions/authAction";
import { loginSchema } from "./lib/schemas/loginSchema";

export default {
  providers: [
    Credentials({
      name: "credentials",
      async authorize(creds) {
        const validate = loginSchema.safeParse(creds);

        if (validate.success) {
          const { email, password } = validate.data;

          const user = await getUserByEmail(email);

          if (!user || !(await compare(password, user.passwordHash)))
            return null;

          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
