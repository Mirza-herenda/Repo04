function main()
{
    var myX=12;
    var MyY=19;
    var myZ=24;

    myX+=3;
    MyY+=17;
    myZ-=20;
    

    return{myX,MyY,myZ};
}
console.log(main());
module.exports=main;