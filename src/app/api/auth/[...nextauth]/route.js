import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isValid) {
          throw new Error("Invalid credentials");
        }


        return {
          id: user.id,
          name: user.name, 
          email: user.email,
          role: user.role,

        };
      },
    }),
  ],
  pages: {
    signIn: "/api/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (!token || !token.id) {
        // Invalidate session if the token is empty
        return null;
      }
    
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.name = token.name;
    
      return session;
    },
    
    async jwt({ token, user }) {
      if (user) {
        // Populate token during login
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
      } else if (token.id) {
        // Check if the user still exists in the database
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id },
        });
    
        if (!dbUser) {
          // If the user doesn't exist, invalidate the token
          console.warn(`JWT Callback - User with ID ${token.id} has been deleted.`);
          return {}; // Return an empty token to invalidate the session
        }
      }
    
      return token;
    }
    
    


  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
