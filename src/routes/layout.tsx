import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import { MyContextProvider } from "~/components/my-context";

export default component$(() => {
  return (
    <MyContextProvider>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </MyContextProvider>
  );
});
