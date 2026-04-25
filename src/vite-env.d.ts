/// <reference types="vite/client" />

declare module 'figma:asset/*' {
  const content: string;
  export default content;
}

declare module '*.pdf' {
  const content: string;
  export default content;
}
