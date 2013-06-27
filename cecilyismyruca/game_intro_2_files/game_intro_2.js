// Created by iWeb 3.0.4 local-build-20120925

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="800" height="466" style="height: 466px; left: 0px; position: absolute; top: 65px; width: 800px; z-index: 1; "><param name="src" value="Media/rucatravelvideo-medium.m4v" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="800" height="466" style="height: 466px; left: 0px; position: absolute; top: 65px; width: 800px; z-index: 1; "><param name="src" value="game_intro_2_files/rucatravelvideo-medium-6.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/rucatravelvideo-medium.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="800" height="466" data="Media/rucatravelvideo-medium.m4v" style="height: 466px; left: 0px; position: absolute; top: 65px; width: 800px; z-index: 1; "><param name="src" value="Media/rucatravelvideo-medium.m4v"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('game_intro_2_files/game_intro_2Moz.css')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
