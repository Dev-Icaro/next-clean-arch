"use client";

import LoginView from "./login-view";
import { useLoginView } from "./use-login-view";

const LoginPage = () => {
  return (
    <main className="h-full">
      <LoginView {...useLoginView()} />
    </main>
  );
};

export default LoginPage;
