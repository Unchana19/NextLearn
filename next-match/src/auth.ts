import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { loginSchema } from "./lib/schemas/loginSchema";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./actions/authAction";
import { compare } from "bcryptjs";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  session: { strategy: "jwt" },
  ...authConfig,
});
