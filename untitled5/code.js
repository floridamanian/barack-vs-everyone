//all possible events
var char = "King James";
var events = [char + " hits Obama right his weak point <br><br>",
                    "Obama hits " + char + " right in his weak point<br><br>",
                    char + " discovers placeholder text<br><br>",
                    "Obama discovers placeholder text<br><br>",
                    "Obama and " + char + " have a nice chat by a fire<br><br>",
                    "Obama receives a firearm as a gift from the democratic party<br><br>",
                    char + " calls for a timeout in the battlefield because he “got a LeBoo-Boo”<br><br>",
                    char + " discovers fire<br><br>",
                    "Obama calls in a drone strike on " + char + " but hits a hospital on accident instead<br><br>",
                    char + " has trouble figuring out why his variable will only change in the win message and not the events<br><br>",
                    char + " works out<br><br>",
                    "Obama replenishes firepower<br><br>",
                    "Obama shoots at " + char + " but his basketball absorbs the impact<br><br>",
                    char + " dunks on obama. He blocks with his hand, shattering it<br><br>",
                    "Obama throws his basketball at " + char + ", but he counters with his own<br><br>",
                    "Obama obtains high ground<br><br>",
                    char + " obtains high ground<br><br>",
                    ]
var text = ""

CharSelect();

document.getElementById("simulate").addEventListener("click", Simulation);

function Simulation(){
    Screen2()
    var winner = Math.floor(Math.random()*2)+1
    var rounds = Math.floor(Math.random()*15) +5;
    for (var i = 0; i < rounds; i++){
        if(i === rounds-1){
            if(winner === 2){
                text = text + "After a fake out, " + char + " hits a half-court shot at obama, killing him"
            }
            else if(winner === 1){
                text = text + "After a surprise drone strike, obama leaves the battlefield victorious"
            }
        }
        else{
            text = text + events[Math.floor(Math.random()*events.length)];
        }
    }
    document.getElementById("battle").innerHTML = text
}

function CharSelect(){
    document.getElementById("charbron").addEventListener("click", function(){
        char = "King James";
        document.getElementById("char").src = "lebron (1).jpg";
    });
    document.getElementById("charobama").addEventListener("click", function(){
        char = "Barack";
        document.getElementById("char").src = "barack (1).png";
    });
    document.getElementById("chartrump").addEventListener("click", function(){
        char = "Trump";
        document.getElementById("char").src = "Trump.png";
    });
}
function Screen2(){
    document.getElementById("simulate").style.display = "none";
    document.getElementById("obama").style.display = "none";
    document.getElementById("charinfo").style.display = "none";

}