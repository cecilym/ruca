// Created by iWeb 3.0.4 local-build-20120925

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="145" height="209" style="height: 193px; left: 44px; position: absolute; top: 21px; width: 145px; z-index: 1; "><param name="src" value="../Media/IMG_0427.MOV" /><param name="controller" value="false" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="88" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="145" height="209" style="height: 193px; left: 44px; position: absolute; top: 21px; width: 145px; z-index: 1; "><param name="src" value="Blog_files/IMG_0427-2.jpg"/><param name="target" value="myself"/><param name="href" value="../../Media/IMG_0427.MOV"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="145" height="209" data="../Media/IMG_0427.MOV" style="height: 193px; left: 44px; position: absolute; top: 21px; width: 145px; z-index: 1; "><param name="src" value="../Media/IMG_0427.MOV"/><param name="controller" value="false"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="88"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://www.cecilyismyruca.com/cecilyismyruca/Blog/rss.xml");}
function onPageLoad()
{loadMozillaCSS('Blog_files/BlogMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('../Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
