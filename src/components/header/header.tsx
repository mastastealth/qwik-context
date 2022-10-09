import { component$, useStylesScoped$, useContext } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import { MyContext } from "~/components/my-context";

import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const state = useContext(MyContext);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
          >
            Docs {state.count}
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
          >
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
