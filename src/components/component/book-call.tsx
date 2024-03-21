import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { FaHandshake } from "react-icons/fa";

export function HandShake() {
  return (
    <Button>
      <FaHandshake className="mr-2 h-4 w-4" />Request your quote
    </Button>
  );
}