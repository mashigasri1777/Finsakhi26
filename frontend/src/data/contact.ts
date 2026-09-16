export interface ContactDetails {
  ngoName: string;
  email: string;
  phone: string;
  phoneAlt: string;
  location: string;
  website: string;
  workingHours: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  helplines: {
    cyberFraud: {
      number: string;
      labelEn: string;
      labelTa: string;
    };
    women: {
      number: string;
      labelEn: string;
      labelTa: string;
    };
  };
}

export const contactDetails: ContactDetails = {
  ngoName: "Pon Crystal Foundation",
  email: "info@poncrystalfoundation.org",
  phone: "+91 94440 12345",
  phoneAlt: "044-23456789",
  location: "Chennai, Tamil Nadu, India",
  website: "https://poncrystalfoundation.org",
  workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
  socials: {
    instagram: "https://instagram.com/poncrystalfoundation",
    facebook: "https://facebook.com/poncrystalfoundation",
    youtube: "https://youtube.com/poncrystalfoundation",
  },
  helplines: {
    cyberFraud: {
      number: "1930",
      labelEn: "National Cyber Financial Crime Helpline",
      labelTa: "தேசிய சைபர் நிதி மோசடி உதவி எண்",
    },
    women: {
      number: "181",
      labelEn: "National Women Helpline",
      labelTa: "தேசிய மகளிர் உதவி எண்",
    },
  },
};
