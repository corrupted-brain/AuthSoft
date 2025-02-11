export interface Software {
  type: string;
  name: string;
  purpose: string;
  licenseType: string;
  link: string;
  remarks: string;
}

// Mock data - replace this with your actual data
export const softwareList: Software[] = [
  {
    type: "Development",
    name: "Visual Studio Code",
    purpose: "Code Editor",
    licenseType: "Free",
    link: "https://code.visualstudio.com",
    remarks: "Preferred IDE for development"
  },
  {
    type: "Design",
    name: "Figma",
    purpose: "UI/UX Design",
    licenseType: "Freemium",
    link: "https://figma.com",
    remarks: "Standard design tool"
  },
  {
    "type": "AWS Related",
    "name": "WorkSpaces",
    "purpose": "Fully managed desktop computing service in the cloud .",
    "licenseType": "Free",
    "link": "https://clients.amazonworkspaces.com/",
    "remarks": "#227325"
  },
  // Add more items as needed
];