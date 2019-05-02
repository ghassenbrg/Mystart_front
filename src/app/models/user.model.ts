export class User {
    public username: String;
    public email:String;
    public password: String;
    public fullName:String;
    public dateOfBirth: Date;
    public sexe: String;
    public location:String;
    public profilpic:String;
    public description:String;
    public cvurl:String;

    constructor(body) {
        this.username = body.username || "";
        this.email = body.email|| "";
        this.password = body.password || "";
        this.fullName = body.fullName  || "";
        this.dateOfBirth = body.dateOfBirth  || new Date();
        this.sexe = body.sexe  || "";
        this.location = body.location  || "";
        this.profilpic = body.profilpic  || "";
        this.description= body.description  || "";
        this.cvurl = body.cvurl  || "";
    }
}
