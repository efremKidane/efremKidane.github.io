import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "5px 5px",
    padding: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    background: "#000",
    backgroundRepeat: "no-rpeat",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(
        rgba(24, 24, 23, 0.5),
        rgba(15, 15, 8, 0.5)
      ), url("http://automiraj.lk/wp-content/themes/auto/assets/images/auto-service.jpg")`,
  },
  img: {
    width: "100%",
    height: 200,
  },
  h2: {
    color: "#fff",
    textAlign: "center",
    fontSize: "2rem",
  },
  p: {
    color: "#fff",
    textAlign: "center",
  },
  papers: {
    padding: theme.spacing(2),
    background: "#fff",
  },
  paperInfo: {
    width: "250px",
    padding: "10px 10px",
    background: "#131313",
  },
  info: {
    color: "yellow",
    padding: "5px",
  },
  p1: {
    color: "#fff",
  },
}));

export const options = [
  "08:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

export const services = [
  "Tire",
  "Brakes",
  "oil Change",
  "Vehicle Inspection",
  "Check Engine Light",
  "Air Conditioning",
  "Belts & Hoses",
  "Engine",
  "Exhaust",
  "Fuel System",
];

export const year = [
  2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009,
  2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
];

export const make = [
  "Audi",
  "BMW",
  "Buik",
  "Cadillac",
  "Chevrolet",
  "Dodge",
  "Ford",
  "GMC",
  "Honda",
  "Toyota",
];

export const model = {
  Audi: [
    "A3",
    "A3 Quattro",
    "A4",
    "A4 Allroad",
    "A4 Quattro",
    "A5 Quattro",
    "A5 Sportback",
    "A6",
    "A6 Quattro",
    "Q3",
    "Q3 Quattro",
  ],
  BMW: [
    "23Oi",
    "23Oi xDrive",
    "32Oi",
    "32Oi xDrive",
    "328d",
    "328d xDrive",
    "33Oe",
    "33Oi",
  ],
  Buik: [
    "Cascada",
    "Enclave",
    "Encore",
    "Envision",
    "LaCross",
    "Ragal Sportback",
    "Ragal Tourx",
  ],
  Cadillac: [
    "CT4-V",
    "CT5-V",
    "CT6",
    "CT6-V",
    "Escalade",
    "Escalade ESV",
    "XT4",
  ],
  Chevrolet: [
    "Bolt EV",
    "Camero",
    "City Express",
    "Colorado",
    "Corvette",
    "Cruz",
    "Equinox",
    "Malibu",
    "Silverado 1500",
  ],
  Dodge: ["Challenger", "Charger", "Durango", "Grand Caravan", "Journey"],
  Ford: [
    "C-Max",
    "Edge",
    "Escape",
    "Expedition",
    "Explorer",
    "Fiesta",
    "Flex",
    "Focus",
    "Fusion",
  ],
  GMC: [
    "Acadia",
    "Canyon",
    "Savana 2500",
    "Savana 4500",
    "Sierra 1500",
    "Sierra 2500 HD",
    "Terrain",
    "Yukon",
  ],
  Honda: [
    "Accord",
    "Civic",
    "Clarity",
    "CR-V",
    "Fit",
    "HR-V",
    "Odyssey",
    "Pilot",
    "Ridgeline",
  ],
  Toyota: [
    "4Runner",
    "86",
    "Avalon",
    "Camry",
    "Corola",
    "Higlander",
    "Land Cruiser",
    "Pruis",
    "RAV4",
  ],
};

export const intialState = {
    step: 1,
    date: null,
    time: null,
    service: "",
    serviceDescription: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleYear: 0,
    vehicleMake: "Audi",
    vehicleModel: "",
  }
