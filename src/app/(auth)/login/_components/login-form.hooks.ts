import LoginSchema from "@/modules/auth/application/schemas/login-schema";
import CredentialsDTO from "@/modules/auth/domain/dtos/credentials.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuthentication } from "@/modules/auth/application/hooks/use-authentication";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { useRouter } from "next/navigation";

export type UseLoginViewResult = {
  form: any;
  onSignIn: (credentials: CredentialsDTO) => Promise<void>;
};

export const useLoginForm = (): UseLoginViewResult => {
  const { logIn } = useAuthentication();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignIn = async (data: CredentialsDTO) => {
    const result = await logIn(data);

    if (result) {
      router.push(DEFAULT_LOGIN_REDIRECT);
    }
  };

  return {
    onSignIn,
    form,
  };
};
