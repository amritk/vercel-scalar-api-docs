import type { JSX } from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </>
  );
}
