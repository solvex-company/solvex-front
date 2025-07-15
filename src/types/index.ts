export interface Credentials {
  id_credentials: number;
  email: string;
  user: User;
}

export interface Roles {
  id_role: number;
  role_name: string;
  users: User[];
}

export enum Role {
  ADMIN = 'admin',
  HELPER = 'soporte',
  EMPLOYEE = 'empleado',
}

export interface TypeId {
  id_typeid: number;
  name: string;
  users: User[];
}

export interface User {
  id_user: string;
  first_name: string;
  second_name: string;
  first_surname: string;
  second_surname: string;
  identification_number: string;
  phone: string;
  typeId: TypeId;
  credentials: Credentials;
  role: Role;
}