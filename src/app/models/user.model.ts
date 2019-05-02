export class User {
    public username: String;
    public email:String;
    public password: String;
    public fullName:String;
    public dateOfBirth: any;
    public sexe: String;
    public location:String;
    public profilpic:String;
    public description:String;
    public cvurl:String;
    public facebookId: String;
    public googleId: String;

    constructor(body) {
        this.email = body.email || "";
        this.password = body.password || "";
        this.fullName = body.fullName  || "";
        this.username = body.username || this.fullName.replace(" ", ".").toLowerCase();
        this.dateOfBirth = body.dateOfBirth  || "01/01/1900";
        this.sexe = body.sexe  || "";
        this.location = body.location  || "";
        this.profilpic = body.profilpic  || "myDocs/profile/default_avatar.png";
        this.description= body.description  || "";
        this.cvurl = body.cvurl  || "";
        this.facebookId = body.facebookId || "";
        this.googleId = body.googleId || "";
    }

    generatePassword(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
}