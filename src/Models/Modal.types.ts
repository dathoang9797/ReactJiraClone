export type ReducerModalInitialState = {
  visible: boolean;
  ComponentContentDrawer: React.ReactElement<HTMLParagraphElement>;
  callBackSubmit: (e: React.FormEvent<HTMLFormElement> | null) => void;
};
