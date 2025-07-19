"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const usePrivate = () => {
  const router = useRouter();
  const { isAuth } = useAuthContext();
  useEffect(() => {
    if (isAuth === false) {
      router.replace("/");
    }
  }, [isAuth, router]);
  return null;
};

export default usePrivate;
