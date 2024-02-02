import SigninForm from "@/components/Auth/SignInForm";
import styles from "@/styles/Homepage.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();

  useEffect(() => {

    const user = localStorage.getItem("userName");
    if (user) {
      router.push("/dashboard/me")
    }
  }, [])

  return (
    <>
      <Head>
        <title>Amir's Grocery | Login</title>
      </Head>
      <main className={`${styles.bgDark} min-h-screen flex items-center`}>
        <section className="mx-auto px-4 text-white w-full">
          <SigninForm />
        </section>
      </main>
    </>

  );
}
