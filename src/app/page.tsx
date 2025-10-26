"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Crown, Heart, Sparkles, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Grand Vista Hotel, where every detail is crafted for your perfect stay."
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "View Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Where timeless elegance meets modern luxury, creating unforgettable experiences for discerning travelers seeking the finest in hospitality and comfort."
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Book Now", href: "contact" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our exquisite collection of rooms and suites, each designed to provide ultimate comfort and sophistication."
          tag="Premium Rooms"
          tagIcon={Crown}
          products={[
            {
              id: "1",
              brand: "Grand Vista",
              name: "Deluxe Suite",
              price: "$450/night",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant deluxe suite with king bed"
            },
            {
              id: "2",
              brand: "Grand Vista",
              name: "Ocean View Room",
              price: "$325/night",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/3225561/pexels-photo-3225561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel room with stunning ocean view"
            },
            {
              id: "3",
              brand: "Grand Vista",
              name: "Presidential Suite",
              price: "$850/night",
              rating: 5,
              reviewCount: "45",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious presidential suite living area"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed to enhance your stay and create lasting memories."
          tag="Luxury Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind with our full-service spa offering massage therapy, wellness treatments, and meditation spaces.",
              imageSrc: "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxurious spa wellness center"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence with our award-winning restaurant featuring gourmet cuisine and an extensive wine collection.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant dining room"
            },
            {
              title: "Infinity Pool & Terrace",
              description: "Relax by our stunning infinity pool with panoramic views, complete with poolside service and private cabanas.",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel swimming pool area"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Grand Vista Hotel for their most important stays."
          tag="5-Star Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              testimonial: "Absolutely exceptional service and stunning accommodations. The attention to detail and personalized care made our anniversary celebration truly unforgettable.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Travel Blogger",
              testimonial: "Grand Vista Hotel sets the gold standard for luxury hospitality. From the moment we arrived, every aspect of our stay exceeded expectations.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Rodriguez"
            },
            {
              id: "3",
              name: "Elena Vasquez",
              role: "Event Coordinator",
              testimonial: "The perfect venue for our corporate retreat. Impeccable facilities, outstanding cuisine, and staff that anticipated our every need.",
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Elena Vasquez"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Investment Banker",
              testimonial: "A truly world-class experience. The combination of luxury amenities and exceptional service makes this our preferred destination for business travel.",
              imageSrc: "https://images.pexels.com/photos/7876101/pexels-photo-7876101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Luxury Experience"
          description="Ready to experience the finest in hospitality? Contact our reservations team to book your stay or learn more about our exclusive packages and services."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkout", type: "date", placeholder: "Check-out Date", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions about your stay...",
            rows: 4,
            required: false
          }}
          buttonText="Request Reservation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Vista Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "story" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Concierge", href: "concierge" },
                { label: "Events", href: "events" },
                { label: "Gift Cards", href: "gifts" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}