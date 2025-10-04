"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Loader2 } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface LoginFormProps {
  primaryColor: string;
}

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm({ primaryColor }: LoginFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);

      const { error } = await signIn.email({
        email: values.email,
        password: values.password,
        rememberMe: true,
      });

      if (error) {
        toast("Failed to Login");
        return;
      }

      toast("Login Sucesss");
      router.push("/");

      // TODO: call your API
      console.log(values);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  // UI-only: consistent focus style (no logic changes)
  const focusClasses =
    "focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:border-transparent transition-all";

  // TS-safe custom var for dynamic ring color
  const accentVar = { ["--accent" as any]: primaryColor };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-medium">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    disabled={isLoading}
                    className={`pl-9 ${focusClasses} focus-visible:ring-[var(--accent)]`}
                    style={accentVar}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-medium">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    disabled={isLoading}
                    className={`pl-9 ${focusClasses} focus-visible:ring-[var(--accent)]`}
                    style={accentVar}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full font-medium transition-all hover:shadow-lg active:scale-[0.99] border-none"
          style={{
            backgroundColor: primaryColor,
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.05))",
          }}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Opening your journal…
            </>
          ) : (
            "Sign in"
          )}
        </Button>
      </form>
    </Form>
  );
}
