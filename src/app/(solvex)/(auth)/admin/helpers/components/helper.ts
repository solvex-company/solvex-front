interface User {
  id: string;
  name: string;
  email: string;
  currentRole: "employee" | "support";
}

export const employees: User[] = [
  {
    id: "E1",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    currentRole: "employee",
  },
  {
    id: "E2",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    currentRole: "employee",
  },
  {
    id: "E3",
    name: "Carol White",
    email: "carol.white@example.com",
    currentRole: "employee",
  },
  {
    id: "E4",
    name: "David Brown",
    email: "david.brown@example.com",
    currentRole: "employee",
  },
  {
    id: "E5",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    currentRole: "employee",
  },
  {
    id: "E6",
    name: "Frank Green",
    email: "frank.green@example.com",
    currentRole: "employee",
  },
  {
    id: "E7",
    name: "Grace Hall",
    email: "grace.hall@example.com",
    currentRole: "employee",
  },
  {
    id: "E8",
    name: "Harry King",
    email: "harry.king@example.com",
    currentRole: "employee",
  },
];

export const supportStaff: User[] = [
  {
    id: "S1",
    name: "Ivy Lee",
    email: "ivy.lee@example.com",
    currentRole: "support",
  },
  {
    id: "S2",
    name: "Jack Miller",
    email: "jack.miller@example.com",
    currentRole: "support",
  },
  {
    id: "S3",
    name: "Karen Nelson",
    email: "karen.nelson@example.com",
    currentRole: "support",
  },
  {
    id: "S4",
    name: "Liam Parker",
    email: "liam.parker@example.com",
    currentRole: "support",
  },
  {
    id: "S5",
    name: "Mia Quinn",
    email: "mia.quinn@example.com",
    currentRole: "support",
  },
  {
    id: "S6",
    name: "Noah Ross",
    email: "noah.ross@example.com",
    currentRole: "support",
  },
  {
    id: "S7",
    name: "Olivia Scott",
    email: "olivia.scott@example.com",
    currentRole: "support",
  },
  {
    id: "S8",
    name: "Paul Taylor",
    email: "paul.taylor@example.com",
    currentRole: "support",
  },
];
