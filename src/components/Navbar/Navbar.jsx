import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div>
      <ul className="flex justify-center gap-6 my-6 text-base font-medium">
        <li>
          <Link href="/"><Button variant="outline">Home</Button></Link>
        </li>
        <li>
          <Link href="/login"><Button variant="outline">Login</Button></Link>
        </li>
        <li>
          <Link href="/signup"><Button variant="outline">SignUp</Button></Link>
        </li>
      </ul>
    </div>
  );
}
