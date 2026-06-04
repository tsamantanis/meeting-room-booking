import { Card } from "@/components/ui/card";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function LayoutCardOption({ label, Glyph, isSelected, onClick }) {
  return (
    <Card
      role="radio"
      aria-checked={isSelected}
      aria-label={label}
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 p-3 bg-gray-50",
        "border-2 border-transparent cursor-pointer transition-colors hover:border-primary",
        isSelected && "border-primary bg-primary/5"
      )}
    >
      {isSelected && (
        <div className="absolute top-1.5 right-1.5 flex items-center justify-center h-5 w-5 rounded-full bg-primary animate-fade-in">
          <CheckIcon className="h-3.5 w-3.5 text-white" />
        </div>
      )}
      <Glyph className={cn("h-10 w-10", isSelected ? "text-primary" : "text-muted-foreground")} />
      <span className={cn("text-sm font-medium", isSelected && "text-primary")}>{label}</span>
    </Card>
  );
}
