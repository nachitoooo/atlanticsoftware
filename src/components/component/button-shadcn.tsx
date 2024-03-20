import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ButtonWithIcon() {
  return (
    <Link href="/contact" passHref>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Contact Us
      </Button>
    </Link>
  );
}
