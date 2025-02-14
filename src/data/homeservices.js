const serviceCategories = {
  'BeautyAndWellness': [
      { 
        name: 'Beautician',
        description: 'Beautician description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'Barber',
        description: 'Barber description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'MassageTherapist',
        description: 'MassageTherapist description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'FitnessTrainer',
        description: 'FitnessTrainer description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
       },
      { 
        name: 'YogaTrainer',
        description: 'YogaTrainer description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'SpaTherapist',
        description: 'SpaTherapist description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      }
  ],
  'HomeServices': [
      { 
        name: 'Carpenter',
        description: 'Carpenter description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'Electrician',
        description: 'Electrician description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'Plumber',
        description: 'Plumber description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'ACTechnician',
        description: 'ACTechnician description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'HomeCleaner',
        description: 'HomeCleaner description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'PestControlExpert',
        description: 'PestControlExpert description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'ApplianceRepairTechnician',
        description: 'ApplianceRepairTechnician description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'Painter',
        description: 'Painter description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'PlumbingExpert',
        description: 'PlumbingExpert description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
  ],
  'DomesticHelp': [
      { 
        name: 'HousekeepingStaff',
        description: 'HousekeepingStaff description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'MaidService',
        description: 'MaidService description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },

      { 
        name: 'Nannies/Babysitter',
        description: 'Nannies/Babysitter description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'GardeningService',
        description: 'GardeningService description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'LaundryService',
        description: 'LaundryService description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      }
  ],
  'ProfessionalServices': [
      { 
        name: 'InteriorDesigner',
        description: 'InteriorDesigner description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'Photographer',
        description: 'Photographer description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'EventPlanner',
        description: 'EventPlanner description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'SecurityGuard',
        description: 'SecurityGuard description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
      },
      { 
        name: 'Driver',
        description: 'Driver description',
        about:'lorghuiolkjhtfcvbjiop;lkjhbnml;liuygfvbhiouytfcvbhi',
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