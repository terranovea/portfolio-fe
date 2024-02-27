/*
THIS DOESN'T actually call a db yet.
Right now it only reads local json files for development purposes.
*/

import { Achievement } from "src/models/achievement";

var achievementTable:any=[
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

async function getAchievList():Promise<Achievement[]>
{
    var achievArray:Achievement[]=[];
    var tempAchiev:any;
    for(var i=0; i<achievementTable.length;i++)
    {
        var tempAchiev=achievementTable[i];
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
    return achievArray;
}

export {getAchievList}