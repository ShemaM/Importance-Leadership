// Example interfaces you might need
interface Donation {
  amount: number;
  paymentMethod: string;
  donorInfo: Donor;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Program {
  title: string;
  description: string;
  impact: string[];
}