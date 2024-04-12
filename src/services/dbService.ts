/*
THIS DOESN'T actually call a db yet.
Right now it only reads local json files for development purposes.
*/

import { Injectable } from "@angular/core";
import { Achievement } from "src/models/achievement";
import { Achiever } from "src/models/achiever";

type DBAchievementRecord=
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

type DBAchieverRecord=
{
    "id":string;
    "username":string;
    "name":string;
    "surname":string;
    "email":string;
    "bio":string;
    "pfp-url":string;
    "date-created":string;
    "latest-access":string;
}

@Injectable()
export class DBService
{
    cachedAchievBatch:Achievement[]|null;
    dbAchievements:DBAchievementRecord[]=
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

    dbAchievers:DBAchieverRecord[]=
    [
        {
            "id":"R0000",
            "username":"joshua.terranova",
            "name":"Joshua",
            "surname":"Terranova",
            "email":"terranova@dauvea.it",
            "bio":"Hallo! Ich heiße Joshua Terranova und ich bin eine Katze. Ich bin sehr süß und schön! Ich mache viele Dinge! Lesen Sie weiter unten!",
            "pfp-url":"../../../../assets/img/Katze.jpg",
            "date-created":"09-04-2024",
            "latest-access":"09-04-2024",
        },
        {
            "id":"R0001",
            "username":"vittorio.serra",
            "name":"Vittorio",
            "surname":"Serra",
            "email":"joshuaterranova01@gmail.com",
            "bio":"Chi lo sa, lo sa.",
            "pfp-url":"../../../../assets/img/Katze.jpg",
            "date-created":"08-04-2024",
            "latest-access":"08-04-2024",
        }
    ]

    constructor()
    {
        this.cachedAchievBatch=null;
    }

    parseAchievementFromDB(dbAchiev:DBAchievementRecord):Achievement
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
    
    parseAchievementListFromDB(dbAchiev:DBAchievementRecord[]):Achievement[]
    {
        var returnArray=[];
        for(var i=0; i<dbAchiev.length;i++)
        {
            var tempAchiev=dbAchiev[i];
            returnArray.push(this.parseAchievementFromDB(tempAchiev));
        }
        return returnArray;
    }

    parseAchieverFromDB(dbAchiev:DBAchieverRecord):Achiever
    {
        let tsAchiev:Achiever = new Achiever(
            dbAchiev["id"],
            dbAchiev["username"],
            dbAchiev["name"],
            dbAchiev["surname"],
            dbAchiev["email"],
            dbAchiev["bio"],
            dbAchiev["pfp-url"],
            new Date(dbAchiev["date-created"]),
            new Date(dbAchiev["latest-access"]),
        );
        return tsAchiev
    }
    
    parseAchieverListFromDB(dbAchiev:DBAchieverRecord[]):Achiever[]
    {
        var returnArray=[];
        for(var i=0; i<dbAchiev.length;i++)
        {
            var tempAchiev=dbAchiev[i];
            returnArray.push(this.parseAchieverFromDB(tempAchiev));
        }
        return returnArray;
    }
    
    getUserAchievements(achieverID:string):Achievement[]
    {
        var returnArray:Achievement[]=[];
        var tempAchiev:any;
        var dbRes:any=[];

        //fake Query:
        for(var i=0;i<this.dbAchievements.length;i++)
        {
            if(this.dbAchievements[i]["achiever-ids"].includes(achieverID))
            {
                dbRes.push(this.dbAchievements[i]);
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

    getAllAchievements(pageSize:number=50, nPage:number=0):Achievement[]
    {
        var returnArray:Achievement[]=[];
        var dbRes:any=[];

        for(var i=0;i<this.dbAchievements.length;i++)
        {
          dbRes.push(this.dbAchievements[i]);
        }

        //parse db data into ts data
        console.log("Db queried. Res: \n"+JSON.stringify(dbRes))
        
        returnArray=this.parseAchievementListFromDB(dbRes);

        console.log("dbRes");
        console.log(dbRes);
        console.log("returnArray");
        console.log(returnArray);
        
        this.cachedAchievBatch=returnArray;
        return returnArray;
    }

    getAllAchievers(pageSize:number=50, nPage:number=0):Achiever[]
    {
        var returnArray:Achiever[]=[];
        var dbRes:any=[];

        for(var i=0;i<this.dbAchievers.length;i++)
        {
          dbRes.push(this.dbAchievers[i]);
        }

        //parse db data into ts data
        console.log("Db queried. Res: \n"+JSON.stringify(dbRes))
        
        returnArray=this.parseAchieverListFromDB(dbRes);

        console.log("dbRes");
        console.log(dbRes);
        console.log("returnArray");
        console.log(returnArray);
        
        return returnArray;
    }

    getAchievementByID(desiredID:string):Achievement|null
    {
        //fake Query:
        for(var i=0;i<this.dbAchievements.length;i++)
        {
            var tempAchiev=this.dbAchievements[i]
            if(tempAchiev["id"]==desiredID)
            {
                return this.parseAchievementFromDB(tempAchiev);;
            }
        }
        return null;
    }

    getAchieverByID(desiredID:string):Achiever|null
    {
        //fake Query:
        for(var i=0;i<this.dbAchievers.length;i++)
        {
            var tempAchiev=this.dbAchievers[i]
            if(tempAchiev["id"]==desiredID)
            {
                return this.parseAchieverFromDB(tempAchiev);;
            }
        }
        return null;
    }

}