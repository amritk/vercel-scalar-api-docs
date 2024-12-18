import type { JSX } from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="sticky top-0 bg-background h-16">Header</div>
      {children}
      <div className="bg-red-500 h-16">Footer</div>
    </>
  );
}
