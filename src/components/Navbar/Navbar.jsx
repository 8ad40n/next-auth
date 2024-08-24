"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  const session = useSession();
  console.log(session);
  
  return (
    <div>
      <ul className="flex justify-center gap-6 my-6 text-base font-medium">
        <li>
          <Link href="/"><Button variant="outline">Home</Button></Link>
        </li>
        {
          !session.data ? 
          <li>
            <Link href="/login"><Button variant="outline">Login</Button></Link>
          </li>
          :
          <li>
            <Button variant="outline" onClick={()=> signOut()}>Logout</Button>
          </li>
        }
        <li>
          <Link href="/signup"><Button variant="outline">SignUp</Button></Link>
        </li>
      </ul>
    </div>
  );
}
