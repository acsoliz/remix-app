import { Outlet } from "@remix-run/react";

export default function Section() {
  return (
    <>
      <h2>Section</h2>
      <Outlet />
    </>
  );
}
