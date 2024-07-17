"use client";

import ICredentialsDTO from "@/modules/auth/domain/dtos/credentials.dto";
import { loginAction } from "./actions";
import LoginSchema from "@/modules/auth/application/schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useLoginView = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignIn = (data: ICredentialsDTO) => {
    loginAction(data);
  };

  return {
    onSignIn,
    form,
  };
};
