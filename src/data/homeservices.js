const serviceCategories = {
  'BeautyAndWellness': [
      { 
        name: 'Beautician',
        description: 'Beautician description',
        about:'Enhance your natural beauty with our expert beautician services, designed to make you look and feel your best. Our skilled beauticians offer a range of treatments tailored to your needs, including facials, waxing, eyebrow shaping, eyelash extensions, and professional makeup application. Whether you are preparing for a special occasion or simply indulging in some self-care, our team uses high-quality products and techniques to deliver exceptional results.Book your appointment today and experience personalized beauty treatments in a relaxing environment. Let us help you glow inside and out!',
        image:'/beutician.jpeg'
        
      },
      { 
        name: 'Barber',
        description: 'Barber description',
        about:'Experience top-notch grooming with our expert barbers. We offer stylish haircuts, beard shaping, straight razor shaves, and scalp massages tailored to your needs. Whether you’re looking for a quick trim or a complete makeover, our skilled barbers ensure you leave looking sharp and feeling refreshed. Book your appointment today and enjoy a personalized grooming experience!',
        image:'/barber.jpeg'
      },
      { 
        name: 'MassageTherapist',
        description: 'MassageTherapist description',
        about:'Relax and unwind with our professional massage therapy services. Whether you need to relieve stress, ease muscle tension, or improve circulation, our experienced massage therapists offer a range of treatments, including deep tissue, Swedish, aromatherapy, and hot stone massages. Each session is designed to rejuvenate your body and mind, providing a soothing and restorative experience. Book your appointment today for a relaxing escape!',
        image:'/massagetherapist.jpeg'
      },
      { 
        name: 'FitnessTrainer',
        description: 'FitnessTrainer description',
        about:'Achieve your fitness goals with the guidance of our expert trainers. Whether you are looking to lose weight, build muscle, or improve overall strength and endurance, our personalized fitness plans are designed to suit your needs. From one-on-one sessions to group classes, we provide a supportive and motivating environment to help you reach your full potential. Book your session today and take the first step towards a healthier, stronger you!',
        image:'/fitnesstrainer.jpeg'
       },
      { 
        name: 'YogaTrainer',
        description: 'YogaTrainer description',
        about:'Find balance and inner peace with our expert yoga trainers. Whether you are a beginner or an experienced practitioner, our personalized sessions cater to your specific needs, helping you improve flexibility, strength, and mindfulness. From calming restorative yoga to energizing flow classes, we offer a variety of styles to suit your goals. Book your session today and experience the transformative benefits of yoga for both body and mind.',
        image:'/yogatrainer.jpeg'
      },
      { 
        name: 'SpaTherapist',
        description: 'SpaTherapist description',
        about:'Indulge in ultimate relaxation with our professional spa therapy services. Our skilled spa therapists offer a range of treatments including facials, body wraps, exfoliating scrubs, and aromatherapy massages, all designed to rejuvenate your skin and soothe your senses. Whether you are looking for a relaxing escape or a skin refresh, our treatments are tailored to leave you feeling revitalized. Book your appointment today and treat yourself to a luxurious spa experience.',
        image:'/spatherapist.jpeg'
      }
  ],
  'HomeServices': [
      { 
        name: 'Carpenter',
        description: 'Carpenter description',
        about:'Transform your space with the help of our skilled carpenters. From custom furniture and cabinetry to repairs and home improvements, our expert craftsmen provide high-quality woodworking solutions tailored to your needs. Whether you need a new bookshelf, a kitchen makeover, or repairs around the house, we deliver precise, durable results. Book your appointment today and let us bring your woodworking projects to life!',
        image:'/carpenter.jpeg'
      },
      { 
        name: 'Electrician',
        description: 'Electrician description',
        about:'Ensure your home or office is safe and powered with our expert electrician services. Whether you need electrical repairs, installations, or upgrades, our licensed electricians provide reliable and efficient solutions. From wiring and lighting to circuit repairs and safety inspections, we handle all your electrical needs with precision. Book your appointment today and experience top-quality electrical service with a focus on safety and reliability.',
        image:'/electrician.jpeg'
      },
      { 
        name: 'Plumber',
        description: 'Plumber description',
        about:'Fix leaks, clogs, and more with our professional plumbing services. Whether you need repairs, installations, or maintenance, our experienced plumbers provide efficient and reliable solutions for your home or business. From pipe repairs to water heater installations, we ensure everything flows smoothly. Book your appointment today and trust us to handle all your plumbing needs with expertise and care.',
        image:'/plumber.jpeg'
      },
      { 
        name: 'ACTechnician',
        description: 'ACTechnician description',
        about:'Keep your space cool and comfortable with our professional AC technician services. Whether you need installation, repairs, or maintenance, our skilled technicians provide reliable solutions for all types of air conditioning systems. From routine checks to emergency repairs, we ensure your AC runs efficiently all year round. Book your appointment today and stay cool with expert service at your doorstep.',
        image:'/actechnician.jpeg'
      },
      { 
        name: 'HomeCleaner',
        description: 'HomeCleaner description',
        about:'Keep your home spotless with our professional cleaning services. Whether you need a one-time deep clean, regular maintenance, or move-in/move-out cleaning, our experienced cleaners provide thorough and reliable solutions. We use eco-friendly products to ensure a safe and clean environment for you and your family. Book your appointment today and enjoy a sparkling home without the hassle!',
        image:'/homecleaner.jpeg'
      },
      { 
        name: 'PestControlExpert',
        description: 'PestControlExpert description',
        about:'Protect your home or business from unwanted pests with our expert pest control services. Whether you are dealing with rodents, insects, or other pests, our trained professionals provide safe and effective solutions to eliminate and prevent infestations. We use eco-friendly treatments to ensure the safety of your environment. Book your appointment today and enjoy a pest-free space with our reliable and thorough pest control services.',
        image:'/pestcontrolexpert.jpeg'
      },
      { 
        name: 'ApplianceRepairTechnician',
        description: 'ApplianceRepairTechnician description',
        about:'Get your household appliances running smoothly again with our expert appliance repair services. From refrigerators and washing machines to ovens and dishwashers, our skilled technicians provide fast, reliable repairs to extend the life of your appliances. We diagnose and fix issues efficiently, ensuring your appliances work like new. Book your appointment today for hassle-free repairs and peace of mind.',
        image:'/actechnician.jpeg'
      },
      { 
        name: 'Painter',
        description: 'Painter description',
        about:'Refresh your space with our professional painting services. Whether you are looking to repaint a room, update your exterior, or add custom designs, our skilled painters deliver flawless results. We use high-quality paints and materials to ensure a durable, vibrant finish. Book your appointment today and transform your home or office with a fresh coat of paint!',
        image:'/painter.jpeg'
      },
      { 
        name: 'PlumbingExpert',
        description: 'PlumbingExpert description',
        about:'Ensure your plumbing system runs smoothly with our expert plumbing services. From leak repairs and drain cleaning to pipe installations and water heater maintenance, our skilled plumbers provide efficient and reliable solutions. Whether it is a quick fix or a major project, we handle it all with precision and care. Book your appointment today and keep your plumbing in top shape!',
        image:'/plumber.jpeg'
      },
  ],
  'DomesticHelp': [
      { 
        name: 'HousekeepingStaff',
        description: 'HousekeepingStaff description',
        about:'Keep your home clean and organized with our professional housekeeping services. Our trained staff provide thorough cleaning, dusting, vacuuming, and organizing to maintain a tidy and comfortable living space. Whether you need regular upkeep or a one-time deep clean, we tailor our services to fit your needs. Book your appointment today and enjoy a spotless, well-kept home!',
        image:'/housekeepingstaff.jpeg'
      },
      { 
        name: 'MaidService',
        description: 'MaidService description',
        about:'Make your life easier with our professional maid services. Whether you need regular cleaning, laundry assistance, or help with light housekeeping, our reliable maids provide quality service to keep your home neat and organized. We offer flexible scheduling to fit your needs and ensure your home stays clean and comfortable. Book your appointment today and enjoy a stress-free, tidy home!',
        image:'/maidservice.jpeg'
      },

      { 
        name: 'Nannies/Babysitter',
        description: 'Nannies/Babysitter description',
        about:'Ensure your children are in caring and capable hands with our professional nanny and babysitting services. Whether you need part-time, full-time, or occasional care, our experienced caregivers provide a safe, nurturing environment for your little ones. We offer flexible hours to fit your schedule, ensuring peace of mind while you’re away. Book your appointment today and let us help with your childcare needs!',
        image:'/nanniesbabysitter.jpeg'
      },
      { 
        name: 'GardeningService',
        description: 'GardeningService description',
        about:'Is your garden in need of some TLC? Our expert gardeners are here to help you transform your outdoor space into a lush, vibrant paradise! Whether you need lawn care, plant maintenance, garden design, or seasonal clean-ups, we’ve got you covered. Imagine stepping into your own backyard oasis—just let us know your vision, and we’ll bring it to life! Ready to get started? Book your appointment today and watch your garden bloom!',
        image:'/gardeningservice.jpeg'
      },
      { 
        name: 'LaundryService',
        description: 'LaundryService description',
        about:'Drowning in laundry? Let us take care of it! Our professional laundry service is designed to make your life easier. From washing and drying to folding and ironing, we handle it all with care. Whether it’s everyday laundry or special items like delicate fabrics, we ensure your clothes come back fresh and spotless. Ready for a hassle-free laundry day? Book your appointment today and enjoy clean clothes without lifting a finger!',
        image:'/laundryservice.jpeg'
      }
  ],
  'ProfessionalServices': [
      { 
        name: 'InteriorDesigner',
        description: 'InteriorDesigner description',
        about:'Transform your space into a masterpiece with our expert interior design services. Whether you’re renovating a single room or redesigning your entire home, our designers work closely with you to create a stylish, functional, and personalized environment. From selecting the perfect color palette to choosing furniture and decor, we bring your vision to life. Ready to reimagine your space? Book your consultation today and let’s design the home of your dreams!',
        image:'/interiordesigner.jpeg'
      },

      { 
        name: 'Photographer',
        description: 'Photographer description',
        about:'Capture life’s most precious moments with our professional photography services. Whether it’s a family portrait, a wedding, a special event, or product photography, we bring your vision to life through the lens. Our photographers specialize in creating stunning, high-quality images that tell your unique story. Ready to freeze time with beautiful photos? Book your session today and let us help you create memories that last a lifetime!',
        image:'/photographer.jpeg'
      },
      { 
        name: 'EventPlanner',
        description: 'EventPlanner description',
        about:'Make your next event unforgettable with our expert event planning services. Whether it is a wedding, corporate event, birthday party, or any special occasion, we handle every detail—from venue selection to decor and coordination. Our team ensures your event runs smoothly, leaving you free to enjoy the celebration. Ready to plan an event that wows? Book your consultation today and let us turn your vision into a reality!',
        image:'/eventplanner.jpeg'
      },
      { 
        name: 'SecurityGuard',
        description: 'SecurityGuard description',
        about:'Ensure the safety and protection of your home, business, or event with our professional security guard services. Our trained and reliable security personnel provide round-the-clock protection, offering peace of mind wherever you need it. Whether it’s for a special event, residential area, or commercial property, we tailor our services to meet your specific security needs. Book your security service today and safeguard what matters most with a trusted security team!',
        image:'/securityguard.jpeg'
      },
      { 
        name: 'Driver',
        description: 'Driver description',
        about:'Need a ride? Our professional driver services are here to get you where you need to go in comfort and style. Whether it’s for a special event, a business trip, or simply daily transportation, our experienced drivers ensure a safe and smooth journey. Sit back, relax, and let us handle the road while you focus on what matters. Book your driver today and travel with ease!',
        image:'/driver.jpeg'
      }
  ]
};

export const getAllServiceCategories = () => {
  return Object.keys(serviceCategories);
};

export const getServicesByCategory = (category) => {
  return serviceCategories[category] || [];
};

export const getServiceByName = (name) => {
  for (const category in serviceCategories) {
      const foundService = serviceCategories[category].find(service => service.name === name);
      if (foundService) return foundService;
  }
  return null;
};

// export const getServicesByCategory = (category) => services.filter(service => service.category === category);
// export const getServiceByName = (name) => services.find(service => service.name === name);