const dev_subjects = [
  { 
    id: 1,
    long_name: "AP US History",
    short_name: "apush",
    primaryColor: "#B22234",
    secondaryColor: "#3C3B6E",
  },
  {
    id: 2,
    long_name: "AP World History",
    short_name: "apwh",
    primaryColor: "#3F6B7D",
    secondaryColor: "#B2AB8C",
  },
  {
    id: 3,
    long_name: "AP Psychology",
    short_name: "appsych",
    primaryColor: "#F2C057",
    secondaryColor: "#6D466B",
  }
];
const prod_subjects = dev_subjects.slice(0,1);

export { prod_subjects as subjects }
