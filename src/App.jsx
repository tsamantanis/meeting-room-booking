import { useState } from 'react';
import './App.css';
import { BookingWidget } from './components/booking-widget';
import { Dialog, DialogTrigger, DialogContent } from './components/ui/dialog';
import { Button } from './components/ui/button';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
      <Dialog>
        <DialogTrigger asChild>
          <Button onClick={() => setDialogOpen(true)}>Book Now</Button>
        </DialogTrigger>
        <DialogContent className="h-[95%] md:h-[95vh] max-w-[95vw] p-0 md:overflow-scroll">
          <BookingWidget />
        </DialogContent>
      </Dialog>
  );
}

export default App;
