"use client"

import React, { useState } from "react"
import { CalendarDaysIcon as CalendarIcon } from "@/components/icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const isDateDisabled = (date) => date < new Date() || date > new Date().setFullYear(new Date().getFullYear() + 1);

export function DatePicker({ date, setDate, disabled = isDateDisabled, label = "Pick a date" }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal hover:border-2 focus:border-2 border-offset-2",
            !date && "text-muted-foreground"
          )}
          aria-label={label}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" onOpenAutoFocus={(e) => e.preventDefault()}>
        <Calendar
          mode="single"
          selected={date}
          required
          onSelect={(date) => {
            if (date) setDate(date);
            // close the popover
            setIsOpen(false);
          }}
          initialFocus
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  )
}
