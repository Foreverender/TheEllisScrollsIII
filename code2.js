gdjs.gameOverSceneCode = {};
gdjs.gameOverSceneCode.GDbackgroundObjects1= [];
gdjs.gameOverSceneCode.GDbackgroundObjects2= [];
gdjs.gameOverSceneCode.GDBorderObjects1= [];
gdjs.gameOverSceneCode.GDBorderObjects2= [];
gdjs.gameOverSceneCode.GDokbuttonObjects1= [];
gdjs.gameOverSceneCode.GDokbuttonObjects2= [];
gdjs.gameOverSceneCode.GDyouTriedObjects1= [];
gdjs.gameOverSceneCode.GDyouTriedObjects2= [];
gdjs.gameOverSceneCode.GDmobsMercedObjects1= [];
gdjs.gameOverSceneCode.GDmobsMercedObjects2= [];
gdjs.gameOverSceneCode.GDskylineScavengedObjects1= [];
gdjs.gameOverSceneCode.GDskylineScavengedObjects2= [];
gdjs.gameOverSceneCode.GDdoorsOpenedObjects1= [];
gdjs.gameOverSceneCode.GDdoorsOpenedObjects2= [];
gdjs.gameOverSceneCode.GDdoorScoreObjects1= [];
gdjs.gameOverSceneCode.GDdoorScoreObjects2= [];
gdjs.gameOverSceneCode.GDmobScoreObjects1= [];
gdjs.gameOverSceneCode.GDmobScoreObjects2= [];
gdjs.gameOverSceneCode.GDskylineScoreObjects1= [];
gdjs.gameOverSceneCode.GDskylineScoreObjects2= [];


gdjs.gameOverSceneCode.mapOfGDgdjs_46gameOverSceneCode_46GDokbuttonObjects1Objects = Hashtable.newFrom({"okbutton": gdjs.gameOverSceneCode.GDokbuttonObjects1});
gdjs.gameOverSceneCode.mapOfGDgdjs_46gameOverSceneCode_46GDokbuttonObjects1Objects = Hashtable.newFrom({"okbutton": gdjs.gameOverSceneCode.GDokbuttonObjects1});
gdjs.gameOverSceneCode.mapOfGDgdjs_46gameOverSceneCode_46GDokbuttonObjects1Objects = Hashtable.newFrom({"okbutton": gdjs.gameOverSceneCode.GDokbuttonObjects1});
gdjs.gameOverSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("doorScore"), gdjs.gameOverSceneCode.GDdoorScoreObjects1);
{for(var i = 0, len = gdjs.gameOverSceneCode.GDdoorScoreObjects1.length ;i < len;++i) {
    gdjs.gameOverSceneCode.GDdoorScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("mobScore"), gdjs.gameOverSceneCode.GDmobScoreObjects1);
{for(var i = 0, len = gdjs.gameOverSceneCode.GDmobScoreObjects1.length ;i < len;++i) {
    gdjs.gameOverSceneCode.GDmobScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("skylineScore"), gdjs.gameOverSceneCode.GDskylineScoreObjects1);
{for(var i = 0, len = gdjs.gameOverSceneCode.GDskylineScoreObjects1.length ;i < len;++i) {
    gdjs.gameOverSceneCode.GDskylineScoreObjects1[i].setBBText(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("okbutton"), gdjs.gameOverSceneCode.GDokbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameOverSceneCode.mapOfGDgdjs_46gameOverSceneCode_46GDokbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Startmenu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("okbutton"), gdjs.gameOverSceneCode.GDokbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameOverSceneCode.mapOfGDgdjs_46gameOverSceneCode_46GDokbuttonObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.gameOverSceneCode.GDokbuttonObjects1 */
{for(var i = 0, len = gdjs.gameOverSceneCode.GDokbuttonObjects1.length ;i < len;++i) {
    gdjs.gameOverSceneCode.GDokbuttonObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("okbutton"), gdjs.gameOverSceneCode.GDokbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameOverSceneCode.mapOfGDgdjs_46gameOverSceneCode_46GDokbuttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.gameOverSceneCode.GDokbuttonObjects1 */
{for(var i = 0, len = gdjs.gameOverSceneCode.GDokbuttonObjects1.length ;i < len;++i) {
    gdjs.gameOverSceneCode.GDokbuttonObjects1[i].setColor("223;208;23");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.gameOverSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameOverSceneCode.GDbackgroundObjects1.length = 0;
gdjs.gameOverSceneCode.GDbackgroundObjects2.length = 0;
gdjs.gameOverSceneCode.GDBorderObjects1.length = 0;
gdjs.gameOverSceneCode.GDBorderObjects2.length = 0;
gdjs.gameOverSceneCode.GDokbuttonObjects1.length = 0;
gdjs.gameOverSceneCode.GDokbuttonObjects2.length = 0;
gdjs.gameOverSceneCode.GDyouTriedObjects1.length = 0;
gdjs.gameOverSceneCode.GDyouTriedObjects2.length = 0;
gdjs.gameOverSceneCode.GDmobsMercedObjects1.length = 0;
gdjs.gameOverSceneCode.GDmobsMercedObjects2.length = 0;
gdjs.gameOverSceneCode.GDskylineScavengedObjects1.length = 0;
gdjs.gameOverSceneCode.GDskylineScavengedObjects2.length = 0;
gdjs.gameOverSceneCode.GDdoorsOpenedObjects1.length = 0;
gdjs.gameOverSceneCode.GDdoorsOpenedObjects2.length = 0;
gdjs.gameOverSceneCode.GDdoorScoreObjects1.length = 0;
gdjs.gameOverSceneCode.GDdoorScoreObjects2.length = 0;
gdjs.gameOverSceneCode.GDmobScoreObjects1.length = 0;
gdjs.gameOverSceneCode.GDmobScoreObjects2.length = 0;
gdjs.gameOverSceneCode.GDskylineScoreObjects1.length = 0;
gdjs.gameOverSceneCode.GDskylineScoreObjects2.length = 0;

gdjs.gameOverSceneCode.eventsList0(runtimeScene);

return;

}

gdjs['gameOverSceneCode'] = gdjs.gameOverSceneCode;
