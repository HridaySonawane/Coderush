import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center px-16 bg-background font-sans dark:bg-black gap-6">
      <h2 className="text-[40px] font-sora font-bold text-text-primary">
        Not Found
      </h2>
      <p className="text-[18px] font-inter text-text-secondary">
        Looks like our team forgot to build this page! 🥲
      </p>
      <Link href="/">
        <Button text="Return Home" variant="primary" />
      </Link>
    </div>
  );
}
