import { auth } from "@/auth";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {JSON.stringify(session?.user)}</p>
    </div>
  );
};

export default DashboardPage;
