function checkVowels()
{
    var text = document.getElementById("inpText").value;
    var vowCount = 0;
    text = text.toLowerCase();
    for(var i = 0; i < text.length; i++)
    {
        var char = text.charAt(i);
        if(isVow(char))
        {
            vowCount++;
        }
    }
    var result = document.getElementById("result");
    result.textContent = "Total " + vowCount + " vowels in the text"
}

function isVow(char)
{
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char);
}