import "@/styles/globals.css";
import { Flowbite } from "flowbite-react";
import flowbiteTheme from "../lib/theme";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <AuthProvider>
        <Flowbite theme={{ theme: flowbiteTheme }}>
          {getLayout(<Component {...pageProps} />)}
          <Toaster
            toastOptions={{
              style: {
                background: '#000000',
                color: '#fff',
              },
            }}
          />
        </Flowbite>
      </AuthProvider>

    </>
  );
}
