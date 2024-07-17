"use client";

import { Button } from "@/common/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Form,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { useForm } from "react-hook-form";
import { useLoginView } from "./use-login-view";
import LoginSchema from "@/modules/auth/presentation/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

interface LoginViewProps {
  form: any;
  handleSingIn: any;
}

const LoginView = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { onSignIn } = useLoginView();

  return (
    <main className="h-full flex items-center justify-center">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSignIn)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="softica@softica.com"
                        type="email"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="******"
                        type="password"
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default LoginView;
