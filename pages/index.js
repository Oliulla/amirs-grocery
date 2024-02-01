import SigninForm from "@/components/Auth/SignInForm";
import styles from "@/styles/Homepage.module.css";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';




export default function Home() {
  return (
    <main className={`${styles.bgDark} min-h-screen`}>
      <section className="mx-auto px-4 text-white">
        <SigninForm />
      </section>
    </main>
  );
}
