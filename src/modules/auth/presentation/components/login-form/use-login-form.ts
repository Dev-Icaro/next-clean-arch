import LoginSchema from "@/modules/auth/presentation/schemas/login-schema";
import CredentialsDTO from "@/modules/auth/domain/dtos/credentials.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthentication } from "@/modules/auth/presentation/hooks/use-authentication";

export type UseLoginFormResult = {
  form: any;
  onSignIn: (credentials: CredentialsDTO) => Promise<void>;
};

export const useLoginForm = (): UseLoginFormResult => {
  const { logIn } = useAuthentication();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignIn = async (credentials: CredentialsDTO) => {
    await logIn(credentials);
  };

  return {
    form,
    onSignIn,
  };
};
