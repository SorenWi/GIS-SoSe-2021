namespace Kapitelaufgabe {

    export let partsObj: Parts = {
        symbols: ["./media/symbols/symbol1.png", "./media/symbols/symbol2.png", "./media/symbols/symbol3.png", "./media/symbols/symbol4.png", "./media/symbols/symbol5.png", "./media/symbols/symbol6.png", "./media/symbols/symbol7.png", "./media/symbols/symbol8.png", "./media/symbols/symbol9.png", "./media/symbols/symbol10.png", "./media/symbols/symbol11.png", "./media/symbols/symbol12.png", "./media/symbols/symbol13.png"],
        shields: ["./media/shields/shield1.png", "./media/shields/shield2.png", "./media/shields/shield3.png", "./media/shields/shield4.png", "./media/shields/shield5.png"],
        shieldColors: ["./media/colors/color1.png", "./media/colors/color2.png", "./media/colors/color3.png", "./media/colors/color4.png", "./media/colors/color5.png", "./media/colors/color6.png", "./media/colors/color7.png", "./media/colors/color8.png", "./media/colors/color9.png", "./media/colors/color10.png", "./media/colors/color11.png", "./media/colors/color12.png"]
    };

    export let partsJSON: string = JSON.stringify(partsObj);
}