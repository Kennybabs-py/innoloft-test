type IdType = {
  id: number;
  name: string;
};

type UserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
};

type AddressType = {
  city: { name: string };
  country: { name: string };
  house: string;
  latitude: string;
  longitude: string;
  street: string;
  zipCode: string;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: IdType;
  categories: IdType[];
  implementationEffortText: null;
  investmentEffort: string;
  trl: IdType;
  user: UserType;
  company: { name: string; logo: string; address: AddressType };
  businessModels: IdType[];
  video: string;
};
