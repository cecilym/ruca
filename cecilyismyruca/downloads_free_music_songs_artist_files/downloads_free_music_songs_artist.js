// Created by iWeb 3.0.4 local-build-20121128

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="253" height="16"><param name="src" value="Media/DoinTime_NewEnd_CecilyMadanes.mp3" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="253" height="16"><param name="src" value="Media/DoinTime_NewEnd_CecilyMadanes.mp3"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="253" height="16" data="Media/DoinTime_NewEnd_CecilyMadanes.mp3"><param name="src" value="Media/DoinTime_NewEnd_CecilyMadanes.mp3"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('downloads_free_music_songs_artist_files/downloads_free_music_songs_artistMoz.css')
detectBrowser();fixAllIEPNGs('Media/transparent.gif');Widget.onload();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
