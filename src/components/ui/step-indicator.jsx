import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/icons";

const steps = [
  { num: 1, label: "Basic details" },
  { num: 2, label: "Extras" },
  { num: 3, label: "About you" },
];

export function StepIndicator({ currentStep }) {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold text-center">Get a tailored quote in 3 steps</h2>
      <div className="flex items-center justify-center mt-6 w-full max-w-[460px]">
        {steps.map((step, index) => {
          const isActive = currentStep === step.num;
          const isComplete = currentStep > step.num;
          return (
            <div key={step.num} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium border-2 transition-colors",
                    isActive && "bg-primary text-white border-primary",
                    isComplete && "bg-primary/10 text-primary border-primary",
                    !isActive && !isComplete && "bg-gray-50 text-muted-foreground border-gray-200"
                  )}
                >
                  {isComplete ? <CheckIcon className="h-4 w-4" /> : step.num}
                </div>
                <span
                  className={cn(
                    "mt-1 text-xs whitespace-nowrap",
                    isActive ? "text-primary font-medium" : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-2 -mt-5",
                    currentStep > step.num ? "bg-primary" : "bg-gray-200"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
