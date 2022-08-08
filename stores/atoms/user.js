import { atom } from "recoil";

export const userAtom = atom({
  key: "userState",
  default: {},
});

export const formAtom = atom({
  key: "formState",
  default: {},
});
