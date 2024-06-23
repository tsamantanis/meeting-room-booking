import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

export function CardOption({ title, value, description, onClick, duration, isDisabled }) {
  const isSelected = duration === value
  const noneSelected = duration === ''
  return (
    <Card className={cn("relative w-1/3 hover:opacity-[1] bg-gray-50", 
      isSelected ? "border-primary" : !noneSelected ? "opacity-[0.5]" : '',
      isDisabled ? "cursor-not-allowed opacity-[0.5] hover:opacity-[0.5]" : '')}> 
      <CardContent className="p-6">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm">{description}</p>
        {!isSelected && (<Button className="mt-4" disabled={isDisabled} onClick={onClick}>{isSelected && !noneSelected ? 'Selected' : 'Choose'}</Button>)}
      </CardContent>
      {isSelected && (
          <div className="absolute bottom-2 left-2 flex items-center justify-center rounded bg-primary">
            <div className="flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        )}
    </Card>
  );
}