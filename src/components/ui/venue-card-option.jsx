import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RulerIcon, UsersIcon, CheckIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

export function VenueCardOption({
  isSelected,
  venue_name,
  venue_description,
  image_url,
  capacity,
  area,
  onClick
}) {

  return (
    <Card className={
      cn("relative bg-gray-50 border-2 shadow-md border-transparent hover:border-primary hover:cursor-pointer", isSelected && "border-primary")
    }
      onClick={onClick}
    >
      <CardContent className="p-6">
        <img
          src={image_url}
          alt={venue_name}
          loading="lazy"
          className="w-full h-40 rounded-md object-cover" />
        <h4 className="text-lg font-bold mt-4">{venue_name}</h4>
        <p className="text-sm">{venue_description}</p>
        <div className="flex items-center space-x-2 mt-2">
          <UsersIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm">up to {capacity} people</p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <RulerIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm">{`${area} m^2`}</p>
        </div>
        
        {isSelected ? (
          <div className="absolute bottom-2 left-2 flex items-center justify-center rounded bg-primary">
            <div className="flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        ) : (
          <Button className="mt-4" onClick={onClick}>{isSelected ? "Selected" : "Choose" }</Button>
        )}
      </CardContent>
    </Card>
  )
}