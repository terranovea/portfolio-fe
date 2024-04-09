/*
THIS DOESN'T actually call a db yet.
Right now it only reads local json files for development purposes.
*/

import { Injectable } from "@angular/core";
import { Achievement } from "src/models/achievement";

type DBAchievRecord=
{
    "id":string;
    "achiever-ids":string[];
    "title":string;
    "desc":string;
    "page-url":string;
    "img-url":string;
    "start-date":string;
    "end-date":string;
    "tags":string[];
    "employer-id":string;
}

@Injectable()
export class DBService
{
    cachedAchievBatch:Achievement[]|null;
    achievBatchDB:DBAchievRecord[]=
    [
        {
        "id":"A0000",
        "achiever-ids":["R0000"],
        "title":"Robotic Collaboration Gripper",
        "desc":"Entschuldigugn, wo ist das Museum? Rechts oder Links? Ist das Museum da druben? Karl, wo bist du?",
        "page-url":"achievement/A0000",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"09-01-2021",
        "end-date":"05-14-2022",
        "tags":
            ["Arduino","Tin Soldering","Kuka Robot","KRL","Python","Grasshopper","Rhinoceros","Scripting","Circuit Design"],
        "employer-id":"E0000"
        },
        {
        "id":"A0001",
        "achiever-ids":["R0000"],
        "title":"Digital Story Explorer",
        "desc":"Hallo, wie ist es in Berlin? Ist das Wetter gut?",
        "page-url":"achievement/A0001",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"09-01-2021",
        "end-date":"05-14-2022",
        "tags":
            ["Arduino","Actionscript","Flash","Tin Soldering","Circuit Design"],
        "employer-id":"E0000"
        },
        {
        "id":"A0002",
        "achiever-ids":["R0000"],
        "title":"Python Plugins for Grasshopper",
        "desc":"Wie heißen Sie? Ich heiße Joshua Terranova und ich spiele sehr gut Klavier. Ich auch spiele oft guitarre",
        "page-url":"achievement/A0002",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"09-01-2021",
        "end-date":"05-14-2022",
        "tags":
            ["Python","Grasshopper","Scripting"],
        "employer-id":"E0000"
        },
        {
        "id":"A0003",
        "achiever-ids":["R0001"],
        "title":"SOC Operator at Dauvea",
        "desc":"Ich Fruhstecke jeden morgen. Ich Trinke Milch gern, aber ich LIEBE deutsch. Ich spreche deutsch gern",
        "page-url":"achievement/A0003",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"05-08-2021",
        "end-date":"05-02-2023",
        "tags":
            ["FortiGate","FortiNet","Kali","Penetration Testing","Network Operations"],
        "employer-id":"E0001"
        },
        {
        "id":"A0004",
        "achiever-ids":["R0001"],
        "title":"Software Developer at Dauvea",
        "desc":"Das Wetter ist nicht sehr gut heute. Es ist schlecht! Es ist bewolkt jeden Tag.",
        "page-url":"achievement/A0004",
        "img-url":"../../../../assets/img/0.jpg",
        "start-date":"05-02-2023",
        "end-date":"05-02-2023",
        "tags":
            ["Typescript","Javascript","Node.js","Angular","Ionic","mySQL","wordpress"],
        "employer-id":"E0001"
        }
    ]
    constructor()
    {
        this.cachedAchievBatch=null;
    }

    parseAchievFromDB(dbAchiev:DBAchievRecord)
    {
        let tsAchiev:Achievement = new Achievement(
            dbAchiev["id"],
            dbAchiev["achiever-ids"],
            dbAchiev["title"],
            dbAchiev["desc"],
            dbAchiev["page-url"],
            dbAchiev["img-url"],
            new Date(dbAchiev["start-date"]),
            new Date(dbAchiev["end-date"]),
            dbAchiev["tags"],
            dbAchiev["employer-id"]
        );
        return tsAchiev
    }
    
    parseAchievListFromDB(dbAchiev:DBAchievRecord[])
    {
        var returnArray=[];
        for(var i=0; i<dbAchiev.length;i++)
        {
            var tempAchiev=dbAchiev[i];
            returnArray.push(this.parseAchievFromDB(tempAchiev));
        }
        return returnArray;
    }
    
    getUserAchievements(achieverID:string):Achievement[]
    {
        var returnArray:Achievement[]=[];
        var tempAchiev:any;
        var dbRes:any=[];

        //fake Query:
        for(var i=0;i<this.achievBatchDB.length;i++)
        {
            if(this.achievBatchDB[i]["achiever-ids"].includes(achieverID))
            {
                dbRes.push(this.achievBatchDB[i]);
                console.log("dbRes");
            }
        }

        //parse db data into ts data
        console.log("Db queried. Res: \n"+JSON.stringify(dbRes))
        for(var i=0; i<dbRes.length;i++)
        {
            var tempAchiev=dbRes[i];
            returnArray.push(new Achievement(
                tempAchiev["id"],
                tempAchiev["achiever-ids"],
                tempAchiev["title"],
                tempAchiev["desc"],
                tempAchiev["page-url"],
                tempAchiev["img-url"],
                new Date(tempAchiev["start-date"]),
                new Date(tempAchiev["end-date"]),
                tempAchiev["tags"],
                tempAchiev["employer-id"]
            ));
        }
        console.log("dbRes");
        console.log(dbRes);
        console.log("returnArray");
        console.log(returnArray);
        
        this.cachedAchievBatch=returnArray;
        return returnArray;
    }

    getAchievByID(desiredID:string):Achievement|null
    {
        //fake Query:
        for(var i=0;i<this.achievBatchDB.length;i++)
        {
            var tempAchiev=this.achievBatchDB[i]
            if(tempAchiev["id"]==desiredID)
            {
                return this.parseAchievFromDB(tempAchiev);;
            }
        }
        return null;
    }

}