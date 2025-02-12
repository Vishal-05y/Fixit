const services = [
    {
      id: "1",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "Beautician",
      details: ""
    },
    {
      id: "2",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "Barber",
      details: ""
    },
    {
      id: "3",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "MassageTherapist",
      details: ""
    },
    {
      id: "4",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "FitnessTrainer",
      details: ""
    },
    {
      id: "5",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "YogaTrainer",
      details: ""
    },
    {
      id: "6",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "SpaTherapist",
      details: ""
    },
    {
      id: "7",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "Carpenter",
      details: ""
    },
    {
      id: "8",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "Electrician",
      details: ""
    },
    {
      id: "9",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "ACTechnician",
      details: ""
    },
    {
      id: "10",
      image: <img src="/engineer.png" alt="Beautician" width={30} height={30} />,
      name: "Plumber",
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