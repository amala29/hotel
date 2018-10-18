export class User {
  _id: any;
    constructor(
        public userId?:string,
        public name?: string,
        public email?: string,
        public password?: string,
        public address?:string,
        public phoneNumber?:number) { }
}
