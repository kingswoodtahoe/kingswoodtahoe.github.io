import type { ReactNode } from "react";

interface Props {
  showAfter: Date | string;
  hideAfter: Date | string;
  children: ReactNode;
}

export default function Banner({ showAfter, hideAfter, children }: Props) {
  const start = new Date(showAfter).getTime();
  const end = new Date(hideAfter).getTime();
  const now = Date.now();

  if (now < start || now > end) {
    return null;
  }

  return (
    <div
      className="py-2"
      style={{
        backgroundColor: "#e9ecef" /*Bootstrap grey-200*/,
        // padding: "4px 0",
      }}
    >
      <div className="container-fluid">{children}</div>
    </div>
  );
}
