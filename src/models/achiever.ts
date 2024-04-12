export class Achiever
{
    id:string;
    username:string;
    name:string;
    surname:string;
    email:string;
    bio:string;
    pfpUrl:string = '../../../../assets/img/Katze.jpg';
    dateCreated:Date;
    latestAccess:Date;
    isPublic:boolean;

    constructor(id:string,
        username:string,
        name:string,
        surname:string,
        email:string,
        bio:string,
        pfpUrl:string,
        dateCreated:Date,
        latestAccess:Date,
        isPublic:boolean=true)
    {
        this.id=id;
        this.username=username;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.bio=bio;
        this.pfpUrl=pfpUrl;
        this.dateCreated=dateCreated;
        this.latestAccess=latestAccess;
        this.isPublic=isPublic;
    }
}