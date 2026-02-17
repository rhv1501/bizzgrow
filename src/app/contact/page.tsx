import { Suspense } from "react";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-20" />}>
      <ContactForm />
    </Suspense>
  );
}
