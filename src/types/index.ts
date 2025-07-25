export interface ICredentials {
  id_credentials: number;
  email: string;
  user: IUser;
}

export interface IRoles {
  id_role: number;
  role_name: string;
  users: IUser[];
}

export enum Role {
  ADMIN = "admin",
  HELPER = "soporte",
  EMPLOYEE = "empleado",
}

export interface ITypeId {
  id_typeid: number;
  name: string;
  users: IUser[];
}

export interface IUser {
  credentials: ICredentials;
}

/* export interface IUser {
  id_user: string;
  name: string;
  surname: string;
  identification_number: string;
  phone: string;
  typeId: TypeId;
  credentials: Credentials;
  role: Role;
}
*/
