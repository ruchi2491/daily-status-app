export class Employee{
    public id:string;
    public name:string;
    public emailid:string;
    public mobilenumber:string;
    public status:string;

    constructor( id:string, name:string, emailid:string, mobilenumber:string, status:string){
        this.id=id;
        this.name=name;
        this.emailid=emailid;
        this.mobilenumber=mobilenumber;
        this.status=status;
    }
}