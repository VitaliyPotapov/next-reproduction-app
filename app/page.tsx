import { notFound } from "next/navigation";
import Button from "./Button";
import Form from "./Form";

export default function Page() {
  const serverAction = async () => {
    "use server";
    notFound();
  };

  return (
    <>
      <Form action={serverAction} />
      <Button action={serverAction} />
    </>
  );
}
