import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaglineSection from "./components/TaglineSection";
import DoctorTeamSection from "./components/DoctorTeamSection";
import PressSection from "./components/PressSection";
import MinimallyInvasiveSection from "./components/MinimallyInvasiveSection";
import RegenerativeTreatments from "./components/RegenerativeTreatments";
import CosmeticSection from "./components/CosmeticSection";
import PatientExperience from "./components/PatientExperience";
import ReviewsSection from "./components/ReviewsSection";
import BlogSection from "./components/BlogSection";
import LocationsSection from "./components/LocationsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import AppointmentModal from "./components/AppointmentModal";
import QuickContactFAB from "./components/QuickContactFAB";

import { Routes, Route } from "react-router-dom";
import ViewAllService from "./components/services/allServices/allservice";
import BunionSurgeryPage from "./components/services/allServices/BunionSurgery/BunionSurgeryPage";
import "./app.css";

const Home = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => setBookingModalOpen(true);
  const handleCloseBooking = () => setBookingModalOpen(false);

  return (
    <div className="dr2feet-app">
      
      {/* Main Page Sections */}
      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />
        <TaglineSection />
        <DoctorTeamSection onOpenBooking={handleOpenBooking} />
        <PressSection />
        <MinimallyInvasiveSection onOpenBooking={handleOpenBooking} />
        <RegenerativeTreatments onOpenBooking={handleOpenBooking} />
        <CosmeticSection onOpenBooking={handleOpenBooking} />
        <PatientExperience />
        <ReviewsSection />
        <BlogSection />
        <LocationsSection onOpenBooking={handleOpenBooking} />
        <FAQSection />
        {/* Interactive Appointment Booking Modal */}
        <AppointmentModal
          isOpen={bookingModalOpen}
          onClose={handleCloseBooking}
        />
      </main>
    </div>
  );
};
export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => setBookingModalOpen(true);
  const handleCloseBooking = () => setBookingModalOpen(false);

  return (
    <div>
      {/* Header Navigation */}
      <Header onOpenBooking={handleOpenBooking} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<ViewAllService />} />
        <Route path="/services/surgical/bunion-surgery" exact element={<BunionSurgeryPage />} />
        {/* <Route
        path="/services/surgical"
        element={<Surgical />}
      />
      <Route
        path="/conditions/bunions"
        element={<Bunions />}
      /> */}
      </Routes>
      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
      />

      {/* Floating Action Button */}
      <QuickContactFAB onOpenBooking={handleOpenBooking} />
    </div>
  );
}
