"use server";

import CredentialsDTO from "../../domain/dtos/credentials.dto";
import { signIn } from "@/auth";

export const login = async (formData: CredentialsDTO) => {
  const { email, password } = formData;

  return signIn("credentials", {
    email,
    password,
    redirect: false,
  });
};
