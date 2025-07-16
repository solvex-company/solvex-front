export default interface User {
  id: string;
  name: string;
  currentRole: "employee" | "support";
  email: string;
}
