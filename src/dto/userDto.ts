type Credentials = {
  id_credentials: string;
  email: string;
  /*
  "credentials": {
            "id_credentials": "5ac617a4-ba0d-4ce3-86ca-e7146b19b903",
            "email": "amanda.anderson@solvex.com"
        },
   */
};

type Role = {
  id_role: number;
  role_name: string;
};

export interface UserDto {
  id_user: string;
  name: string;
  lastname: string;
  identification_number: string;
  phone: string;
  role: {
    id_role: number;
    role_name: string;
  };
  credentials: {
    id_credentials: string;
    email: string;
  };
}

export interface UpdateUserDto {
  id_user: string;
  name: string;
  lastname: string;
  identification_number: string;
  phone: string;
  credentials: Credentials;
  role: Role;

  /*
  {
    "id_user": "831fc928-3616-44f3-ba3d-339deafb06e4",
    "name": "David",
    "lastname": "Jones",
    "identification_number": "100000005",
    "phone": "5551000005",
    "credentials": {
        "id_credentials": "97434ced-15bd-4754-a7d3-13f12346f5f4",
        "email": "david.jones@solvex.com"
    },
    "role": {
        "id_role": 3,
        "role_name": "Empleado"
    }
}
   */
}
