"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

import { Label } from "@/components/ui/label";
import { Icons } from "@/components/ui/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignInPage() {
  return (
    <section className="py-24">
      <div className="container flex items-center justify-center">
        <SignIn.Root>
          <SignIn.Step name="start">
            <Card>
              <CardHeader>
                <CardTitle>Sign In to your account</CardTitle>
                <CardDescription>
                  Welcome Back! Please sign in to continue
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-x-4">
                  <Clerk.Connection
                    name="google"
                    asChild
                  >
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      type="button"
                    >
                      <Icons.google className="size-3 mr-2" />
                      Sign in with Google
                    </Button>
                  </Clerk.Connection>

                  <Clerk.Connection
                    name="github"
                    asChild
                  >
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      type="button"
                    >
                      <Icons.gitHub className="size-3 mr-2" />
                      Sign in with GitHub
                    </Button>
                  </Clerk.Connection>
                </div>

                <Clerk.Field name="identifier">
                  <Clerk.Label asChild>
                    <Label
                    // hidden={true}
                    // htmlFor="client-email"
                    >
                      Email
                    </Label>
                  </Clerk.Label>
                  <Clerk.Input asChild>
                    <Input
                    // id="client-email"
                    // placeholder="Your E-mail.."
                    />
                  </Clerk.Input>
                  <Clerk.FieldError />
                </Clerk.Field>

                <SignIn.Action
                  submit
                  asChild
                >
                  <Button>Continue</Button>
                </SignIn.Action>
              </CardContent>
            </Card>
          </SignIn.Step>

          <SignIn.Step name="verifications">
            <SignIn.Strategy name="email_code">
              <h1>Check your email</h1>
              <p>
                We sent a code to <SignIn.SafeIdentifier />.
              </p>

              <Clerk.Field name="code">
                <Clerk.Label asChild>
                  <Label>Email code</Label>
                </Clerk.Label>
                <Clerk.Input asChild>
                  <Input />
                </Clerk.Input>
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action
                submit
                asChild
              >
                <Button>Continue</Button>
              </SignIn.Action>
            </SignIn.Strategy>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </section>
  );
}
