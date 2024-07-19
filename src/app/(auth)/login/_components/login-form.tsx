"use client";

import { Button } from "@/common/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl } from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { Form } from "@/common/components/ui/form";
import { useLoginForm } from "./login-form.hooks";

const LoginForm = () => {
  const { form, onSignIn } = useLoginForm();

  return (
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
                  <Input {...field} placeholder="softica@softica.com" type="email"></Input>
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
                  <Input {...field} placeholder="******" type="password"></Input>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
