import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
