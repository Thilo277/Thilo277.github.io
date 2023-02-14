var start = 0;
function colorchange(id)
{
    if(document.getElementById(id).style.backgroundColor == "green")
    {
        document.getElementById(id).style.backgroundColor = "red";
    }
    else if(document.getElementById(id).style.backgroundColor == "red")
    {
        document.getElementById(id).style.backgroundColor = "white";
    }
    else
    {
        document.getElementById(id).style.backgroundColor = "green"
    }
    
}

function scolorchange(id)
{
    if(start == 0)
    {
        if(document.getElementById(id).style.backgroundColor == "gold")
        {
            document.getElementById(id).style.backgroundColor = "white"
        }
        else
        {
            document.getElementById(id).style.backgroundColor = "gold";
        }
        
    }
    else
    {
        if(document.getElementById(id).style.backgroundColor == "gold")
        {
            document.getElementById(id).style.backgroundColor = "red"
        }
        else if(document.getElementById(id).style.backgroundColor == "red")
        {
            document.getElementById(id).style.backgroundColor = "gold";
        }
        else if(document.getElementById(id).style.backgroundColor == "green")
        {
            document.getElementById(id).style.backgroundColor = "white";
        }
        else
        {
            document.getElementById(id).style.backgroundColor = "green";
        }
    }
    
}