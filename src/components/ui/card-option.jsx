import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

export function CardOption({ title, id, description, onClick, isSelected, noneSelected, isDisabled }) {

  return (
    <Card className={cn("relative hover:opacity-[1] bg-gray-50", 
      isSelected ? "border-primary" : !noneSelected ? "opacity-[0.5]" : '',
      isDisabled ? "cursor-not-allowed opacity-[0.5] hover:opacity-[0.5]" : '')}> 
      <CardContent className="p-6">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm">{description}</p>
        
        <Button className="mt-4 outline-none" disabled={isDisabled} onClick={onClick}>
          <span className={isSelected && 'hidden'}>Choose</span>            
          <div className={
            `${!isSelected && 'hidden'} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`
            }>
            <CheckIcon className="h-4 w-4 text-white " />
          </div>
        </Button>
      </CardContent>
      {/* {isSelected && (
          <div className="md:absolute ml-6 mb-6 md:ml-0 md:mb-0 md:bottom-2 md:left-2 max-w-10 flex items-center justify-center rounded bg-primary">
            <div className="flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        )} */}
    </Card>
  );
}