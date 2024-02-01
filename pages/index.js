import SigninForm from "@/components/Auth/SignInForm";
import styles from "@/styles/Homepage.module.css";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Amir's Grocery | Login</title>
      </Head>
      <main className={`${styles.bgDark} min-h-screen`}>
        <section className="mx-auto px-4 text-white">
          <SigninForm />
        </section>
      </main>
    </>

  );
}
