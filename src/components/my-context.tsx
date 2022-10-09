import {
  createContext,
  component$,
  useStore,
  useContextProvider,
  Slot,
} from "@builder.io/qwik";

export const MyContext = createContext("my-context");

export const MyContextProvider = component$(() => {
  const state = useStore({
    count: 0,
  });

  useContextProvider(MyContext, state);

  return <Slot />;
});
