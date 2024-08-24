"use client"
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <>
      {
        session.data ? (
          <div>
            Welcome, {session.data.user.email} 
          </div>
        ) : (
          <div>
            Please log in to view your profile.
          </div>
        )
      }
    </>
  );
}
