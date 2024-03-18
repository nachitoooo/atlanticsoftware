import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";

export function ButtonWithCalendarIcon() {
  return (
    <Button>
      <CalendarIcon className="mr-2 h-4 w-4" /> Schedule
    </Button>
  );
}