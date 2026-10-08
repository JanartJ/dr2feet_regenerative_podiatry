import React,{useState} from 'react'
import Banner from '../../shared/Banner/Banner';
import AppointmentModal from '../../AppointmentModal';
import TileGrid from '../../shared/TileGrid/TileGrid';

/**
* @author
* @function ViewAllService
**/

const ViewAllService = (props) => {

    const [bookingModalOpen, setBookingModalOpen] = useState(false);
    
      const handleOpenBooking = () => setBookingModalOpen(true);
      const handleCloseBooking = () => setBookingModalOpen(false);

  return(
    <div>
        <Banner onOpenBooking={handleOpenBooking} title={"All Service"} content={"Experience world-class foot care in New York City. Reconstructive foot surgery, virtually scarless minimally invasive bunion correction, and cutting-edge stem cell therapy."}/>
        <TileGrid/>
        <AppointmentModal
            isOpen={bookingModalOpen}
            onClose={handleCloseBooking}
        />
    </div>
   )
  }

export default ViewAllService;