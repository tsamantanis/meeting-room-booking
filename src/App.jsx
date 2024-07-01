import { useState } from 'react';
import './App.css';
import { BookingWidget } from './components/booking-widget';
import { Dialog, DialogTrigger, DialogContent } from './components/ui/dialog';
import { Button } from './components/ui/button';

function App() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="fixed right-10 bottom-10">
      {/* Button to trigger dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button onClick={() => setDialogOpen(true)}>Book Now</Button>
        </DialogTrigger>
        <DialogContent className="h-[95%] md:h-[95vh] max-w-[95vw] p-0 md:overflow-scroll">
          <BookingWidget />
        </DialogContent>
      </Dialog>

      {/* Optionally, include BookingWidget directly on the page wherever needed */}
      {/* <BookingWidget /> */}
    </div>
  );
}

export default App;
