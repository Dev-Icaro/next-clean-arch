import { Button } from "@/common/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Form,
} from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";

interface LoginViewProps {
  form: any;
  onSignIn: any;
}

const LoginView = ({ form, onSignIn }: LoginViewProps) => {
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
