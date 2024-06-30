import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton>
          <Button
            size={"sm"}
            variant={"outline"}
          >
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default NavBar;
