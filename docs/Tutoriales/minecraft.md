---
label: Minecraft Completo
icon: stack
title: Minecraft +
layout: default
---
![](https://i.postimg.cc/7hsXx5Rq/Minecraft.png)
# Minecraft Premium - Everywhere
Descarga Minecraft completamente gratis y con todas sus funciones para cada cualquier plataforma.

---

**Selecciona la version que deseas instalar:**

[!badge variant="contrast" target="blank" text="🖼 Bedrock - Win 10 & 11"](#minecraft-windows-10--11) [!badge variant="contrast" target="blank" text="🗺 Bedrock - Android"](#minecraft-bedrock---android) [!badge variant="contrast" target="blank" text="☕ Java - Windows"](#minecraft-java) [!badge variant="contrast" target="blank" text="☕ Java - MAC"](#mac-java) [!badge variant="contrast" target="blank" text="☕ Java - Linux"](#linux-java)

---

## Minecraft Windows 10 & 11    


### Instala la version desde la tienda oficial

1. Descargate la version de prueba en la tienda de Microsoft.

[!badge variant="success" target="blank" text="Descargalo aqui!"](https://www.xbox.com/es-EC/games/store/minecraft-for-windows/9nblggh2jhxj)

![](https://i.postimg.cc/RZt01XCb/2023-05-19-16-38-40.png)
![](https://i.postimg.cc/Zqh5wpCY/2023-05-19-16-34-08.png)

> Si entras a la app notaras que no puedes iniciar sesion o abrir tienda.

![](https://i.postimg.cc/xThCbWQz/2023-05-19-16-40-26.png)

!!!warning
Si no eres muy tecnologico, de nuevo, te recomiendo usar este metodo de [Launcher X](#archivos-necesarios) que parcha el minecraft oficial a traves de un ejecutador que aplica una configuracion al juego para desbloquearlo al jugar.
!!!

### Instala el Winaero Tweaker     


2. Descargate el programa Winaero Tweaker:

[!badge variant="sucess" target="blank" text="Descargalo aqui!"](https://winaerotweaker.com/)


3.  Abrelo y busca la opcion de "take ownership" o "tomar permisos" en la opcion de menu contextual que hay en el programa.

![](https://i.postimg.cc/QCMtpDVp/2023-05-19-16-45-15.png)
![](https://i.postimg.cc/769hGhPH/2023-05-19-16-46-05.png)

### Archivos Necesarios    

==- Parche Dll
Requerido para el tutorial
[!badge variant="sucess" target="blank" text="Descargalo aqui!"](https://drive.google.com/file/d/1ZCtW0RH4VkCab3QmECa4-FqB4O8cRFVY/view?usp=share_link)

==- Launcher X (Vuelate el resto del tuto)
Si usas esta opcion no necesitas hacer el resto del tutorial despues de descargar Minecraft. Pero no es 100% estable.
Usala si no eres muy tecnologico.
> Lo unico que debes hacer es descomprimir el archivo donde desees, ejecutar el launcher y se abrira Minecraft oficial parchado.
[!badge variant="sucess" target="blank" text="Launcher X aqui!"](https://drive.google.com/file/d/1i_CIEAA5jdScfsDHWTgODamOCPWep5ax/view?usp=share_link)
===

### Parche al juego con Dll   


4. Ve a tu carpeta *"Windows/Sytem32/". Si tu windows es de 64bits tambien en "Windows/SysWOW64".
Estando ahi busca el archivo: *Windows.ApplicationModel.Store.dll*

![](https://i.postimg.cc/6q1QcPGF/2023-05-19-16-46-06.png)

Dale click derecho y dale en tomar permisos o "take ownership"

![](https://i.postimg.cc/HxdjkXgv/2023-05-19-16-52-18.png)

> Se abrira una ventana de powershell y luego un cmd que te pedira presionar cualquier tecla para continuar.

5. Descomprime los archivos del [Parche Dll](#archivos-necesarios).    
Una vez descomprimas los archivos reemplazalos en la carpetas correspondientes:

- Windows 32bits: ´Windows/Sytem32/´
- Windows 64bits: ´Windows/Sytem32´ y ´Windows/SysWOW64´

> Los archivos recuerda que dependeran de si tu sistema es de 32 o 64bits. Si no sabes lo que es eso, recomiendo usar la opcion de [launcher X](#archivos-necesarios).

6. Listo, ya esta full tu Minecraft.

![](https://i.postimg.cc/zXVvvqsN/2023-05-19-16-55-09.png)



---


## Minecraft Bedrock - Android     

Descarga, instala e inicia sesion desde la pagina debajo.

> Debes seleccionar la version mas reciente o la que desees. Si alguna version no funciona en tu telefono, es porque simplemente no es compatible y no hay mucho que hacer.

[MCPE - Todos los Bedrock](https://mcpedl.org/minecraft-pe-1-20-20-20-apk/){ target="_blank" }     
*Recomendado acceder a la pagina con un bloqueador de anuncios o con un navegador como Brave, ya que puedes terminar descargando algo que no es Minecraft.*

---

## Minecraft Java      

> Recomendado que instales esta version de java desde [Azul](https://www.azul.com/downloads/?version=java-17-lts&os=windows&package=jdk#zulu){ target="_blank" } si planeas jugar las ultimas versiones del juego.

### Instalación Windows      

1. Descargamos el siguiente launcher     
	[!button variant="contrast" target="blank" size="xs" text="🔷PRISM Launcher"](https://prismlauncher.org/download/)   
  *Launcher liviano y super personalizable. Ademas de tener la opcion de descargar packs y mods directamente en tus versiones del juego.*

2. Lo instalamos *(Escoge el idioma español de españa, el de latinoamerica no esta del todo traducido)* y no lo ejecutamos. Solo lo dejamos asi para seguir con el siguiente paso.
> Este launcher es para minecraft premium. Pero con el siguiente truco podremos jugar cuentas crackeadas.

#### Crack del launcher     

1. Cerramos PrismLauncher y descargamos el siguiente archivo:     
[!button variant="contrast" target="blank" size="xs" text="accounts.json"](https://raw.githubusercontent.com/NOIR-DexPrkr/dexco-files/9fe923dd203c401e32a28b8a591492a5e581fb49/uploads/accounts.json)   
  *Dale click derecho y selecciona ´guardar link como´ en caso de que no descargue directamente.*
  *Si no, crea un documento de texto nuevo pega el codigo que te muestra el enlace y guardalo con el nombre "accounts.json".*

2. Ahora tomamos el archivo y lo pegamos en la siguiente ruta:    
  *AppData/Roaming/PrismLauncher*

> Para ello presiona la tecla inicio + R rapidamente y pega     
 ```
 %AppData%/PrismLauncher
 ```

 #### Agregar Cuenta      


1. Abrimos una vez mas el launcher.


2. Vamos a la esquina superior derecha y seleccionamos la foto de perfil que se encuentra ahi, escogemos "gestionar cuentas" luego en "añadir sin conexión" y eso seria todo.

> Los nombres de usuario no deben tener espacios y simbolos raros. Si lo escribes asi, te va a dar error cuando intentes jugar.

> Si estas teniendo problemas al agregar la cuenta, [usa este tutorial mas detallado](https://rentry.co/prismgratis){ target="_blank" }

> *Si estas teniendo problema con la cuenta offline, tambien pudes usar esta version de* [*Prism Launcher Precrackeado*](https://github.com/Diegiwg/PrismLauncher-Cracked/releases/download/7.1/PrismLauncher-Windows-MSVC-Setup-7.1.exe)


#### Instalar version de Java deseada

1. Ahora, solo nos queda abrir PrismLauncher, seguir los pasos que nos da el Launcher y añadir una instancia. Ahi escogemos la version deseada.

2. Selecciona primero la version **Vanilla** que deseas jugar, iniciala/lanzala y luego si lee lo que sigue.

> Recomiendo que si quieres jugar una version optimizada,en la parte izquierda nos vamos donde dice Modrinth y seleccionamos "Fabulously Optimized". Le damos ok.

![](https://i.postimg.cc/159MhYP4/prism.png)


==- 💊 *Solución a que no abre el juego.*

Sigue los pasos tal cual, pero estos son los tips:

- Si tienes Java 8 dara problemas si piensas jugar versiones superiores a la 1.16.
- Descarga Java 17 desde Azul, que se encuentra dentro de los pasos. (El archivo debe terminar en .msi.
> Puedes tener Java 8 y la de azul instaladas a la vez.

- Al descargar el archivo account.json, asegúrate de que este correctamente escrito.
- Asegúrate de seleccionar "añadir sin conexión" y siempre usar tu nombre. Luego, crea una instancia "vanilla" con la versión que desees y haz clic derecho en ella > editar > configuración > Misceláneo > Marcar la opción de sobrescribir cuenta por defecto > selecciona tu nombre creado recientemente y cierra la ventana.
- A un lado de "Añadir instancia" verás la opción de "ajustes". Haz clic en ella y selecciona "java Autodetectar" en la opción que tiene una estrella 🌟. Luego, haz clic en "probar".
- Para descargar el juego en sí, debes descargar la demo, ya que intentar lanzarlo sin más no genera la descarga. En el lado derecho de "LANZAR", verás algunas opciones. Selecciona "LANZAR DEMO" y comenzará la descarga. Si llega al 99% y no carga, ve al Administrador de tareas, finaliza la tarea y luego reanuda la descarga lanzando la demo nuevamente. Repite esto hasta que se descargue por completo.

> Una vez dentro del juego, no podrás jugar de inmediato, tendrás que salir y cerrar todo. Abre nuevamente el lanzador y, esta vez, selecciona "LANZAR".

Ahora, ponte a jugar como cuando eras niño. ¡Diviértete!

===


---

### MAC Java
Para el caso de MAC usa esta version ya crackeada. Se encuentra comprimida.       
[!button variant="contrast" target="blank" size="xs" text="PrismLauncher MAC"](https://github.com/Diegiwg/PrismLauncher-Cracked/releases/download/7.1/PrismLauncher-macOS-7.1.tar.gz)

---

### Linux Java
Para el caso de Linux usa esta version ya crackeada. Se encuentra comprimida.       
[!button variant="contrast" target="blank" size="xs" text="PrismLauncher MAC"](https://github.com/Diegiwg/PrismLauncher-Cracked/releases/download/7.1/PrismLauncher-Linux-7.1.tar.gz)

---

> **¿Tienes una petición o duda durante el tutorial?**       
> *Hazlo desde* [!badge variant="contrast" icon="feed-rocket" text="Discord"](https://discord.gg/hVKeY3uEru) 
