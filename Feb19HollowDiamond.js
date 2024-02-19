let spacePara1 = 4;
let noOfStar = 1;
let spacePara2 = 0;

let currentDiamondShape=  "";

//For Diamond Upper Height
for (let diamondUpperHeight = 0; diamondUpperHeight < 5;
diamondUpperHeight++)
{
    currentDiamondShape=  "";
    for (let outerSpace = 0; outerSpace < spacePara1; outerSpace++)
    {
        currentDiamondShape += " ";

    }
    for (let printStar = 0; printStar < 1; printStar++)
    {
        currentDiamondShape += "*";

    }
    for (let innerSpace = 0; innerSpace < 2 * spacePara2; innerSpace++)
    {
        currentDiamondShape += " ";
    }
    if(diamondUpperHeight>0){
        currentDiamondShape += "*";
    }
    noOfStar = 2;
    spacePara1--;
    spacePara2++;
    console.log(currentDiamondShape);
    
}

//For Diamond Lower Height
spacePara1 = 1;
spacePara2 = 3;
for (let diamondLowerHeight = 0; diamondLowerHeight <= 3;
diamondLowerHeight++)
{
    currentDiamondShape = "";
    for (let outerSpace = 0; outerSpace < spacePara1; outerSpace++)
    {
        currentDiamondShape +=" "

    }
    if (diamondLowerHeight == 3) {
        noOfStar = 1;
    }

    for (let printStar = 0; printStar < 1; printStar++)
    {
        currentDiamondShape += "*";
    }

    for (let innerSpace = 0; innerSpace < 2 * spacePara2; innerSpace++)
    {
        currentDiamondShape += " ";
    }
    if(diamondLowerHeight<3){
        currentDiamondShape += "*";
    }
    noOfStar = 2;
    spacePara1++;
    spacePara2--;
    console.log(currentDiamondShape);
    
}