![](https://i.postimg.cc/wMQJzzTD/Xiaomi-debloat.png)
# Xiaomi Debloat

Haz tu Xiaomi un poco mas rapido y menos saturado de apps basura con el siguiente tutorial.

## Requisitos

Para poder continuar con este proceso necesitaras un computador y lo siguiente:

::: details Activar los ajustes ADB en el Xiaomi

**Activar el modo de desarrollo**
- Ir a "Ajustes".
- Haz clic en la primera pestaña, "Sobre el teléfono".
- Preste atención al "Versión de MIUI" artículoque haga clic en en 5 veces. Debería aparecer una notificación de que te has convertido en desarrollador.

**Activar la depuración**
- Ahora vuelve al menú de configuración original y ve a "Ajustes avanzados".
- Vemos una nueva línea, "Para desarrolladores".
- Se abre un menú en el que activamos la casilla situada junto a "Depuración USB".
- La depuración USB se activa de la misma forma en todos los dispositivos Android. La interfaz de configuración puede variar ligeramente, así como la ubicación de las secciones. Pero el esquema general es casi el mismo en todas partes.

Fuente: https://xiaomilive.com/es/how-to-enable-usb-debugging-on-xiaomi

:::

Tambien instalar:

<a href="https://adb.clockworkmod.com/">
 <div style="position: relative; padding-top: 1em">
   <p style="position: absolute; top: 5px; left: 20px; font-size: 14px; color: white; text-indent: 20px">⚙ ADB Drivers</p>
   <img src="https://i.postimg.cc/RZPvRHhg/Mini-Descarga.png" alt="Descarga" />
 </div>
</a>

- Los  drivers ADB que permitiran que el computador reconozca el telefono.
*Solo necesitas instalarlos y es todo.*

<a href="https://www.azul.com/downloads/?version=java-21-lts&package=jre#zulu">
 <div style="position: relative; padding-top: 1em">
   <p style="position: absolute; top: 5px; left: 20px; font-size: 14px; color: white; text-indent: 20px">☕ Java Runtime</p>
   <img src="https://i.postimg.cc/RZPvRHhg/Mini-Descarga.png" alt="Descarga" />
 </div>
</a>

- El siguiente Java Runtime que debes instalar para ejecutar el programa ADB/F tools.    
*Estan las versiones para Windows, Linux y MAC.*

<a href="https://drive.google.com/file/d/1Jv24Po9WS1fm4My8jvR_F9UECgznxb2y/view?usp=sharing">
 <div style="position: relative; padding-top: 1em">
   <p style="position: absolute; top: 5px; left: 20px; font-size: 14px; color: white; text-indent: 20px">⭐ ADB/Fastboot</p>
   <img src="https://i.postimg.cc/RZPvRHhg/Mini-Descarga.png" alt="Descarga" />
 </div>
</a>


- El programa ADB/fastboot que nos ayudara a mejorar nuestro telefono.

## Procedimiento

1. Conectamos nuestro telefono por usb al computador. *(debe salirte que se conecto por ADB USB debugging)*
2. Abrimos el **Xiaomi Tools ADB/FASTBOOT** y nos aseguramos que haya detectado nuestro telefono.

**Imagen de ejemplo** 
![](https://szaki.github.io/XiaomiADBFastbootTools/screenshot.png)

3. Usa la seccion:    
- Uninstaller para desinstalar aplicaciones. *(la app deasaparece de la lista de apps y del sistema)*
- Disabler para deshabilitar aplicaciones. *(La app desaparece de la lista de apps, pero sigue dormida en sistema)*
- Reinstaller y Enabler son para restaurar las apps desinstaladas o deshabilitadas.

::: tip Importante
Las siguientes categorias de apps que son seguras de deshabilitar o desinstalar. Para eso debes seleccionarlas y luego dar al boton rojo uninstall o disable.
:::
::: details Apps no deseadas de Xiaomi

**Selecciona las que NO quieras**

com.sohu.inputmethod.sogou.xiaomi
com.xiaomi.channel
com.xiaomi.discover | Xiaomi System apps updater
com.xiaomi.glgm | Games
com.xiaomi.joyose | Junk and safe to remove
com.xiaomi.location.fused
com.xiaomi.midrop | Mi Drop
com.xiaomi.mipicks | GetApps(Xiaomi app store)
com.xiaomi.miplay_client
com.xiaomi.mircs | MIUI to MIUI Message
com.xiaomi.mirror
com.xiaomi.payment | Mi Pay
com.xiaomi.scanner | Scanner app

:::

::: details Apps no deseadas de MIUI

**Selecciona SOLO las que NO quieras**

com.mfashiongallery.emag
com.mi.android.globalpersonalassistant
com.mi.globalTrendNews
com.mi.health | Mi Health
com.mi.webkit.core | Mi Webkit
com.milink.service
com.mipay.wallet.id | Mi Wallet
com.mipay.wallet.in | Mi Wallet (India)
com.miui.accessibility
com.miui.analytics | MIUI Analytics (spyware)
com.miui.android.fashiongallery | Wallpaper Carousel
com.miui.backup | Backup app
com.miui.bugreport | Bug reporting app
com.miui.cit
com.miui.compass | MIUI Compass
com.miui.contentcatcher
com.miui.enbbs
com.miui.face | MIUI Biometric
com.miui.fm | MIUI FM
com.miui.fmservice| MIUI FM Module
com.miui.freeform | MIUI PiP service
com.miui.greenguard
com.miui.huanji
com.miui.hybrid | Quick Apps (data mining app)
com.miui.hybrid.accessory | Quick Apps (data mining app)
com.miui.miservice
com.miui.mishare.connectivity | Mi Share
com.miui.misound | Music app & sound enhancer
com.miui.miwallpaper.earth
com.miui.miwallpaper.mars
com.miui.msa.global | MSA or MIUI Ad Services
com.miui.newmidrive
com.miui.nextpay
com.miui.notes | Notes
com.miui.phrase | Frequent phrases
com.miui.player | Music Player
com.miui.qr
com.miui.smsextra | Text Message features
com.miui.system | MIUI System Launcher
com.miui.systemui.carriers.overlay | Carrier name chaging service
com.miui.translation.kingsoft
com.miui.userguide | User Guide app
com.miui.videoplayer | MIUI Video player
com.miui.virtualsim
com.miui.vsimcore
com.miui.weather2 | Weather app
com.miui.wmsvc
com.miui.yellowpage | Yellow Page app
com.miui.zman

:::

::: details Apps no deseadas de google

**Selecciona las que NO quieras**

com.google.android.apps.docs | Google Docs
com.google.android.apps.maps | Google Maps
com.google.android.apps.meetings | Google Meet
com.google.android.apps.wellbeing | Digital Wellbeing
com.google.android.feedback | Feedback app
com.google.android.gm | Gmail
com.google.android.gms | Gmail service
com.google.android.gms.location.history | Gmail location service
com.google.android.googlequicksearchbox | Google Quick Search
com.google.android.inputmethod.latin | Gboard
com.google.android.marvin.talkback | Talkback feature
com.google.android.music | Google Play Music
com.google.android.printservice.recommendation | Mobile Printing
com.google.android.syncadapters.calendar | Calendar Sync
com.google.android.tts | Text-to-speech
com.google.android.videos | Google Play Movies & TV
com.google.android.youtube | Youtube
com.google.ar.lens | AR Lens
:::

::: details Otras

**Selecciona las que NO quieras**

cn.wps.xiaomi.abroad.lite
com.autonavi.minimap
com.caf.fmradio
com.duokan.phone.remotecontroller
com.samsung.aasaservice
org.simalliance.openmobileapi.service
com.duokan.phone.remotecontroller.peel.plugin
in.amazon.mShop.android.shopping | Amazon India
com.bsp.catchlog
com.netflix.partner.activation | Netflix
com.netflix.mediaclient | Netflix
com.opera.app.news | Opera
com.opera.branding | Opera
com.opera.branding.news | Opera News
com.opera.mini.native | Opera Mini
com.opera.preinstall | Opera
com.tencent.soter.soterserver | Chinese Payment service
com.facebook.katana | Facebook
com.facebook.appmanager | Facebook
com.facebook.services | Facebook
com.facebook.system | Facebook
pl.zdunex25.updater | Xiaomi.eu
ros.ota.updater | RevolutionOS
com.syberia.ota | SyberiaOS
com.syberia.SyberiaPapers | SyberiaOS
org.lineageos.recorder | LineageOS
org.lineageos.snap | LineageOS
com.hampusolsson.abstruct | Paranoid Android
code.name.monkey.retromusic | Paranoid Android
:::

::: warning Por nada del mundo deshabilites o quites

- com.miui.securitycenter    
- com.miui.securityadd      
- com.xiaomi.finddevice

:::

4. Eso seria todo, ahora tu telefono ya no tendra esas aplicaciones basura. Disfruta.