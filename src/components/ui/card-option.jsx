import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@/components/icons';
import QuantityStepper from '@/components/ui/quantity-stepper';
import { cn } from '@/lib/utils';

export function CardOption({
  title,
  subtitle,
  id,
  description,
  onClick,
  isSelected,
  noneSelected,
  isDisabled,
  extraHours = 0,
  onExtraHoursChange = () => {},
  maxExtraHours = 0,
  extraHourRate = 0,
}) {

  return (
    <Card className={cn("relative hover:opacity-[1] bg-gray-50 cursor-pointer",
      isSelected ? "border-primary" : !noneSelected ? "opacity-[0.5]" : '',
      isDisabled ? "cursor-not-allowed opacity-[0.5] hover:opacity-[0.5]" : '')}
      onClick={onClick}
      aria-label={title}>
      <CardContent className="p-6">
        <h4 className="text-lg font-bold">{title}</h4>
        {subtitle && <p className="text-sm font-medium text-primary">{subtitle}</p>}
        <p className="text-sm">{description}</p>

        {isSelected ? (
          <div className="mt-4 flex flex-col gap-1" onClick={(e) => e.stopPropagation()}>
            {maxExtraHours > 0 && (
              <p className={cn("text-xs", extraHours > 0 ? "font-medium text-primary" : "text-muted-foreground")}>
                {extraHours > 0
                  ? `+${extraHours} hr${extraHours === 1 ? '' : 's'} · €${extraHours * extraHourRate}${extraHours >= maxExtraHours ? ' (max)' : ''}`
                  : `Add extra hours · €${extraHourRate}/hr`}
              </p>
            )}
            <div className="w-fit flex items-center rounded-full border-primary border-2 p-1 gap-2">
              <div className="flex items-center justify-center bg-primary h-6 w-6 rounded-full">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
              {maxExtraHours > 0 && (
                <QuantityStepper
                  value={extraHours}
                  onChange={onExtraHoursChange}
                  min={0}
                  max={maxExtraHours}
                  label="extra hours"
                />
              )}
            </div>
          </div>
        ) : (
          <Button className="mt-4 outline-none" disabled={isDisabled} onClick={onClick}>Choose</Button>
        )}
      </CardContent>
    </Card>
  );
}
