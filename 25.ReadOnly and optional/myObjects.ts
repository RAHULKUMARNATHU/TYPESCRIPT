type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

let myUser: User = {
  _id: "12345",
  name: "nathu",
  email: "nathu@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type CardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  CardDate & {
    cvv: number;
  };

myUser.email = "rahul@gmail.com";
// myUser._id = "142525"; /*Get an error */
