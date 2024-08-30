"use client";

export default function Button({ action }) {
  return <button onClick={() => action()}>Button with server action</button>;
}
