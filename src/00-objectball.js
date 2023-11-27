function gameObject(){
const teams ={
    home : {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players:{
                "Alan Anderson":{
                        Number:0,
                        Shoe:16,
                        Points:22,
                        Rebounds:12,
                        Assists:12,
                        Steals:3,
                        Blocks:1,
                        Slam_Dunks:1
                    },
                "Reggie Evans":{
                        Number:330,
                        Shoe:14,
                        Points:12,
                        Rebounds:12,
                        Assists:12,
                        Steals:12,
                        Blocks:12,
                        Slam_Dunks:7
                    },
                "Brook Lopez":{
                                Number:11,
                                Shoe:17,
                                Points:17,
                                Rebounds:19,
                                Assists:10,
                                Steals:3,
                                Blocks:1,
                                Slam_Dunks:15
                    },
                "Mason Plumlee":{
                                Number:1,
                                Shoe:19,
                                Points:26,
                                Rebounds:12,
                                Assists:6,
                                Steals:3,
                                Blocks:8,
                                Slam_Dunks:5
                    },
                "Jason Terry":{
                                Number:31,
                                Shoe:15,
                                Points:19,
                                Rebounds:2,
                                Assists:2,
                                Steals:4,
                                Blocks:11,
                                Slam_Dunks:1
                    }
        }

    
    
    },
   
   away : {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise" , "Purple"],
        players: {
                "Jeff Adrien":{
                        Number:4,
                        Shoe:18,
                        Points:10,
                        Rebounds:1,
                        Assists:1,
                        Steals:2,
                        Blocks:7,
                        Slam_Dunks:2,
                    },
                "Bismak Biyombo":{
                        Number:0,
                        Shoe:16,
                        Points:12,
                        Rebounds:4,
                        Assists:7,
                        Steals:7,
                        Blocks:15,
                        Slam_Dunks:10
                    },
                "DeSagna Diop":{
                        Number:2,
                        Shoe:14,
                        Points:24,
                        Rebounds:12,
                        Assists:12,
                        Steals:4,
                        Blocks:5,
                        Slam_Dunks:5


                    },
                "Ben Gordon":{
                        Number:8,
                        Shoe:15,
                        Points:33,
                        Rebounds:3,
                        Assists:2,
                        Steals:1,
                        Blocks:1,
                        Slam_Dunks:0


                    },
                "Brendan Haywood":{
                        Number:33,
                        Shoe:15,
                        Points:6,
                        Rebounds:12,
                        Assists:12,
                        Steals:22,
                        Blocks:5,
                        Slam_Dunks:12


                    }
                }

    }



};


   // console.log(gameObject());
    return teams;
};
function homeTeamName() {
    let object = gameObject();
    console.log(object["home"]["teamName"]);
    return object["home"]["teamName"];
  };

///////////////////////////////////////////////// number of points scored
function numPointsScored(pname){
    
  let gameobj = gameObject();
  
    for(let kvalue in gameobj){
        let nobj = gameobj[kvalue];
          for (let xvalue in nobj.players){
 
            if(xvalue == pname){
                let playern = nobj.players[pname];
                   console.log(playern.Points);
                return playern.Points;
               
            };

       };
    };


  };
  numPointsScored("Alan Anderson");
///////////////////////////////////////////////// shoesize
  function shoeSize(pname){
    let gameobj = gameObject();
    for(let kvalue in gameobj){
        let nobj = gameobj[kvalue];
          for (let xvalue in nobj.players){
 
            if(xvalue == pname){
                let playern = nobj.players[pname];
                console.log(playern.Shoe);
                return playern.Shoe;
               
            };

       };
    };


  };
  shoeSize("Jeff Adrien");
////////////////////////////////////////////////// Team colors
  function teamColors(pname){
    let gameobj = gameObject();
    if(gameobj["home"][pname]){
        console.log(gameobj["home"].colors[0]+","+gameobj["away"].colors[1]);
        return gameobj["home"].colors[0]+","+gameobj["away"].colors[1];
    } else{
        console.log(gameobj["away"].colors[0]+","+gameobj["away"].colors[1]);
        return gameobj["away"].colors[0]+","+gameobj["away"].colors[1];
        };
  


  };
  teamColors("Charlotte Hornets");
///////////////////////////////////////////////// team names
  function teamNames(pname){
    let gameobj = gameObject();
   if(gameobj["home"][pname]){
            console.log(gameobj["home"].teamName);
            return gameobj["home"].teamName;
        } else{
            console.log(gameobj["away"].teamName);
            return gameobj["away"].teamName;
            };


  };
  teamNames("Charlotte Hornets");
/////////////////////////////////////////////////
  function playersNumbers(pname){
    let gameobj = gameObject();
    let teamnumres;
    if(gameobj["home"][pname]){
        let teamnum = gameobj["home"].players;
        console.log("line 217");
        for(tnumb in teamnum){
            console.log("line 220");
            let teamnumres = teamnum[tnumb].Number;
            //return teamnum[tnumb].Number;
        }
    } else{
        let teamnum = gameobj["away"].players;
       
        for(tnumb in teamnum){
            console.log(teamnum[tnumb].Number);
            teamnumres = teamnum[tnumb].Number;
        };
    };
return teamnumres;


  };
  playersNumbers("Charlotte Hornets");
/////////////////////////////////////////////////  
  function playersStats(pname){
    let gameobj = gameObject();
    for(let kvalue in gameobj){
            let nobj = gameobj[kvalue];
              for (let xvalue in nobj.players){
     
                if(xvalue == pname){
                    let playern = nobj.players[pname];
                    console.log(playern);
                    return playern;
                   
                };
    
           };
        };

  };
  playersStats("DeSagna Diop");
/////////////////////////////////////////////////
  function bigShoeRebounds(){
    let gameobj = gameObject();
    let maxValue =0;
    let playersval = [];
    let playerscomval = [];
    let a=0;
    for(let kvalue in gameobj){
        let nobj = gameobj[kvalue];
          for (let xvalue in nobj.players){
              let playern = nobj.players[xvalue];
              let playershoe = playern.Shoe;
              let PlayerName = xvalue;
              let playerrebounds = playern.Rebounds;
            playersval.push(playerrebounds);
            playerscomval.push(PlayerName+" "+playershoe);
                
          };
    };

    //console.log(playersval,playerscomval);
    playersval.map((el) => {
        //getting the value from each object and 
        //comparing to existing value
        const valueFromObject = el;
        maxValue = Math.max(maxValue, valueFromObject);
      });
      console.log(maxValue.length);
    for(a=0; a<playersval.length;a++){
      if(playersval[a] == maxValue){
            console.log(playerscomval[a]+" "+playersval[a]);
            return playerscomval[a]+" "+playersval[a]);
      };
    };
     

  };
  bigShoeRebounds();
