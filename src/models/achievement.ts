export class Achievement
{
    id:string;
    achieverIDs:string[];
    title:string;
    desc:string;
    pageUrl:string;
    imgUrl:string = '../../../../assets/img/0.jpg';
    startDate:Date;
    endDate:Date|null;
    tags:string[]=[];
    employerID:string|null=null;
    isPublic:boolean;
    constructor(id:string,achieverIDs:string[],title:string,desc:string,pageUrl:string,imgUrl:string,startDate:Date,endDate:Date|null, 
        tags:string[], employerID:string|null, isPublic:boolean=true)
    { 
        this.id=id;
        this.achieverIDs=achieverIDs;
        this.title=title;
        this.desc=desc;
        this.pageUrl=pageUrl;
        this.imgUrl=imgUrl;
        this.startDate=startDate;
        this.endDate=endDate;
        this.tags=tags;
        this.employerID=employerID;
        this.isPublic=isPublic;
    }
}