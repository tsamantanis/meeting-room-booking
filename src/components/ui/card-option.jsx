import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CardOption({ title, value, description, onClick, duration }) {
  const isSelected = duration === value
  const noneSelected = duration === ''
  return (
    <Card className={cn("w-1/3 hover:opacity-[1] bg-gray-50", isSelected ? "border-primary" : !noneSelected ? "opacity-[0.5]" : '')}>
      <CardContent className="p-6">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm">{description}</p>
        <Button className="mt-4" onClick={onClick}>{isSelected && !noneSelected ? 'Selected' : 'Choose'}</Button>
      </CardContent>
    </Card>
  );
}