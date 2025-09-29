"use client";
import { useEffect } from "react";

// error boundaries must be client components
const ErrorExampleUI = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // to know what is the error
    console.log(error);
    // we can a sent an error to reporting service
  }, [error]);
  return (
    <div>
      <p className="text-red-500">{error?.message || "An Error occured"}</p>
    </div>
  );
};

export default ErrorExampleUI;
