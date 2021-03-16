const isSSR: boolean = !(
  typeof window !== "undefined" && window.document?.createElement
);

export default isSSR;
