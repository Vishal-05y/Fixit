const services = [
    {
      id: "1",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "Beautician",
      details: ""
    },
    {
      id: "2",
      image: <img src="/engineer.png" alt="Barber" width={30} height={30} />,
      name: "Barber",
      details: ""
    },
    {
      id: "3",
      image: <img src="/engineer.png" alt="MassageTherapist" width={30} height={30} />,
      name: "MassageTherapist",
      details: ""
    },
    {
      id: "4",
      image: <img src="/engineer.png" alt="FitnessTrainer" width={30} height={30} />,
      name: "FitnessTrainer",
      details: ""
    },
    {
      id: "5",
      image: <img src="/engineer.png" alt="YogaTrainer" width={30} height={30} />,
      name: "YogaTrainer",
      details: ""
    },
    {
      id: "6",
      image: <img src="/engineer.png" alt="SpaTherapist" width={30} height={30} />,
      name: "SpaTherapist",
      details: ""
    },
    {
      id: "7",
      image: <img src="/engineer.png" alt="Carpenter" width={30} height={30} />,
      name: "Carpenter",
      details: ""
    },
    {
      id: "8",
      image: <img src="/engineer.png" alt="Electrician" width={30} height={30} />,
      name: "Electrician",
      details: ""
    },
    {
      id: "9",
      image: <img src="/engineer.png" alt="ACTechnician" width={30} height={30} />,
      name: "ACTechnician",
      details: ""
    },
    {
      id: "10",
      image: <img src="/engineer.png" alt="Plumber" width={30} height={30} />,
      name: "Plumber",
      details: ""
    },
    {
      id: "11",
      image: <img src="/homecleaner.png" alt="HomeCleaner" width={30} height={30} />,
      name: "HomeCleaner",
      details: ""
    },
    {
      id: "12",
      image: <img src="/engineer.png" alt="PestControlExpert" width={30} height={30} />,
      name: "PestControlExpert",
      details: ""
    },
    {
      id: "13",
      image: <img src="/engineer.png" alt="ApplianceRepairTechnician" width={30} height={30} />,
      name: "ApplianceRepairTechnician",
      details: ""
    },
    {
      id: "14",
      image: <img src="/engineer.png" alt="Painter" width={30} height={30} />,
      name: "Painter",
      details: ""
    },
    {
      id: "15",
      image: <img src="/engineer.png" alt="PlumbingExpert" width={30} height={30} />,
      name: "PlumbingExpert",
      details: ""
    },
    {
      id: "16",
      image: <img src="/engineer.png" alt="HousekeepingStaff" width={30} height={30} />,
      name: "HousekeepingStaff",
      details: ""
    },
    {
      id: "17",
      image: <img src="/engineer.png" alt="MaidService" width={30} height={30} />,
      name: "MaidService",
      details: ""
    },
    {
      id: "18",
      image: <img src="/engineer.png" alt="Nannies/Babysitter" width={30} height={30} />,
      name: "Nannies/Babysitter",
      details: ""
    },
    {
      id: "19",
      image: <img src="/engineer.png" alt="GardeningService" width={30} height={30} />,
      name: "GardeningService",
      details: ""
    },
    {
      id: "20",
      image: <img src="/engineer.png" alt="LaundryService" width={30} height={30} />,
      name: "LaundryService",
      details: ""
    },
    {
      id: "21",
      image: <img src="/engineer.png" alt="InteriorDesigner" width={30} height={30} />,
      name: "InteriorDesigner",
      details: ""
    },
    {
      id: "22",
      image: <img src="/engineer.png" alt="Photographer" width={30} height={30} />,
      name: "Photographer",
      details: ""
    },
    {
      id: "23",
      image: <img src="/engineer.png" alt="EventPlanner" width={30} height={30} />,
      name: "EventPlanner",
      details: ""
    },
    {
      id: "24",
      image: <img src="/engineer.png" alt="SecurityGuard" width={30} height={30} />,
      name: "SecurityGuard",
      details: ""
    },
    {
      id: "23",
      image: <img src="/engineer.png" alt="Driver" width={30} height={30} />,
      name: "Driver",
      details: ""
    },
  ]
  
  export const getAllServices = () => {
    return services;
  }
  
  export const getServiceById = (name) => {
    const found = services.find(service => service.name === name);
    return found;
  }