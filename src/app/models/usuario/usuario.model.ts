export class Usuario {
  constructor(
      public nombre: string,
      public email: string,
      public password: string,
      public img?: string,
      public role?: string,
      public estado?: boolean,
      public google?: boolean,
      public _id?: string
  ){}
}