/*
THIS DOESN'T actually call a db yet.
Right now it only reads local json files for development purposes.
*/

import { Achievement } from "src/models/achievement";

export class DBService
{
    cachedAchievBatch:Achievement[]|null;
    achievBatchDBRes:any=[
        {
        "id":"A0000",
        "title":"Robotic Collaboration Gripper",
        "desc":"Entschuldigugn, wo ist das Museum? Rechts oder Links? Ist das Museum da druben? Karl, wo bist du?",
        "page-url":"A0000",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"09-01-2021",
        "end-date":"05-14-2022"
        },
        {
        "id":"A0001",
        "title":"Digital Story Explorer",
        "desc":"Hallo, wie ist es in Berlin? Ist das Wetter gut?",
        "page-url":"A0001",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"09-01-2021",
        "end-date":"05-14-2022"
        },
        {
        "id":"A0002",
        "title":"Python Plugins for Grasshopper",
        "desc":"Wie heißen Sie? Ich heiße Joshua Terranova und ich spiele sehr gut Klavier. Ich auch spiele oft guitarre",
        "page-url":"A0002",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"09-01-2021",
        "end-date":"05-14-2022"
        },
        {
        "id":"A0003",
        "title":"SOC Operator at Dauvea",
        "desc":"Ich Fruhstecke jeden morgen. Ich Trinke Milch gern, aber ich LIEBE deutsch. Ich spreche deutsch gern",
        "page-url":"A0003",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"05-08-2021",
        "end-date":"05-02-2023"
        },
        {
        "id":"A0004",
        "title":"Software Developer at Dauvea",
        "desc":"Das Wetter ist nicht sehr gut heute. Es ist schlecht! Es ist bewolkt jeden Tag.",
        "page-url":"A0004",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"05-02-2023",
        "end-date":"05-02-2023"
        }
    ]
    constructor()
    {
        this.cachedAchievBatch=null;
    }

    queryDBAchievBatch():Achievement[]
    {
        var achievArray:Achievement[]=[];
        var tempAchiev:any;
        console.log("Db queried. Res: \n"+JSON.stringify(this.achievBatchDBRes))
        for(var i=0; i<this.achievBatchDBRes.length;i++)
        {
            var tempAchiev=this.achievBatchDBRes[i];
            achievArray.push(new Achievement(
                tempAchiev["id"],
                tempAchiev["title"],
                tempAchiev["desc"],
                tempAchiev["page-url"],
                tempAchiev["img-url"],
                new Date(tempAchiev["start-date"]),
                new Date(tempAchiev["end-date"])
            ));
        }
        this.cachedAchievBatch=achievArray;
        return achievArray;
    }
    
    getAchievList(forceDBQuery:boolean=false):Achievement[]
    {
        if(this.cachedAchievBatch==null || forceDBQuery)
            return this.queryDBAchievBatch();
        else
            return this.cachedAchievBatch;
    }

    getAchievByID(desiredID:string):Achievement|null
    {
        if(this.cachedAchievBatch==null)//if cache is empty, query db and wait for res
        {
            this.getAchievList(true);
        }
        if(this.cachedAchievBatch!=null)//this if is needed because typescript doesn't know the cache cannot be empty at this point
        {
            //search in cache for achiev with desired id. Return as soon as you find it. Otherwise, return null (outside the loop).
            for(var i=0; i<this.cachedAchievBatch.length; i++)
            {
                if(this.cachedAchievBatch[i].id==desiredID)
                {
                    return this.cachedAchievBatch[i];
                }
            }
        }
        return null;
    }

}