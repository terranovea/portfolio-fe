export class Achievement
{
    id:string;
    title:string;
    desc:string;
    pageUrl:string;
    imgUrl = '../../../../assets/img/0.jpg';
    startDate:Date;
    endDate:Date;
    constructor(id:string,title:string,desc:string,pageUrl:string,imgUrl:string,startDate:Date,endDate:Date)
    { 
        this.id=id;
        this.title=title;
        this.desc=desc;
        this.pageUrl=pageUrl;
        this.imgUrl=imgUrl;
        this.startDate=startDate;
        this.endDate=endDate;
    }
}