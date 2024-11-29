"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Add `onChange` prop to type definition
interface DatePickerProps {
  onChange: (date: Date | undefined) => void;
}

export function DatePicker({ onChange }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(() => {
    // Retrieve the saved date from localStorage (if any)
    const savedDate = localStorage.getItem("selectedDate");
    return savedDate ? new Date(savedDate) : undefined;
  });

  const handleDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      // Save selected date to localStorage
      setDate(selectedDate);
      localStorage.setItem("selectedDate", selectedDate.toISOString());

      // Call the onChange prop to pass the selected date back to parent component
      onChange(selectedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"} className="w-[280px] justify-start text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={handleDateChange} />
      </PopoverContent>
    </Popover>
  );
}
