"use client";

export default function Form({ action }) {
  return (
    <form action={action}>
      <button>Form with server action</button>
    </form>
  );
}
