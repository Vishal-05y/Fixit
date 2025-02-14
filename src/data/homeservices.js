

const serviceCategories = {
  'BeautyAndWellness': [
      { name: 'Beautician' },
      { name: 'Barber' },
      { name: 'MassageTherapist' },
      { name: 'FitnessTrainer' },
      { name: 'YogaTrainer' },
      { name: 'SpaTherapist' }
  ],
  'HomeServices': [
      { name: 'Carpenter' },
      { name: 'Electrician' },
      { name: 'Plumber' },
      { name: 'ACTechnician' },
      { name: 'HomeCleaner' },
      { name: 'PestControlExpert' },
      { name: 'ApplianceRepairTechnician' },
      { name: 'Painter' },
      { name: 'PlumbingExpert' }
  ],
  'DomesticHelp': [
      { name: 'HousekeepingStaff' },
      { name: 'MaidService' },
      { name: 'Nannies/Babysitter' },
      { name: 'GardeningService' },
      { name: 'LaundryService' }
  ],
  'ProfessionalServices': [
      { name: 'InteriorDesigner' },
      { name: 'Photographer' },
      { name: 'EventPlanner' },
      { name: 'SecurityGuard' },
      { name: 'Driver' }
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