# Registro de visitantes proceso de UX
##PREAMBULO
Los espacios de coworking son oficinas compartidas (a veces hasta más de 50 empresas)  en las que profesionales autónomos, trabajadores y empresarios se dan cita para trabajar, y donde los gestores del espacio intentan conectar y crear oportunidades profesionales y personales entre y para sus miembros. Es común que a diario se reciban visitas ya sea por negocios, entrevistas de trabajo o para solicitar información. 

##PROBLEMA
En cada uno de estos coworking se lleva un registro de cada visitante, la mayoría en una bitácora donde se llenan datos como fecha, nombre, nombre de la persona a quien visita, motivo, etc. aparte de tener que dejar una identificación. 
1.- Registros largos y tediosos para los visitantes.
2.-Implica pérdida de tiempo  valioso tanto para los visitantes como para quien lleva el registro.
3.-En algunos casos los datos recabados se tienen que vaciar en hojas de Excel para llevar un control de visitantes.
4.-Interfiere en actividades de recepcionista o vigilante al tener que explicar cómo llenar la bitácora (el formato es poco intuitivo).
5.- Se tiene que hacer llamadas para avisar que llego visita (En casos donde haya mucha afluencia de visitantes, se demora el tiempo de espera).
6.- No se permite el acceso sin una identificación oficial.
##GOL
1.-Agilizar y simplificar el registro de visita.
2.-Agradable experiencia para el visitante.
3·- Proceso de registro que no interfiera en las actividades  de la recepcionista o vigilante.
4.-Aviso en automático a la persona que se visita. 
5.-Crear una base de datos con los datos de los visitantes, para futuras consultas.
##PROPUESTA
Crear una app de que permita al visitante registrarse de una manera ágil, intuitiva, reduciendo tiempos (tanto para el visitante como para quien lleva el registro) y mejorando la experiencia de usuario.
Se planea que esta app envié notificación a quien se visita, por medio de un correo electrónico. De igual forma guardar visitas en una base de datos que permitan la consulta de los mismos en cualquier momento y de una manera práctica.


##PROCESO DE DISEÑO
### Sketch baja fidelidad 
![Sketch baja fidelidad ](src/assets/img/sketch.jpg)
##INVESTIGACION
Se realizó una investigación de campo donde se visitó dos coworking y dos WeWork para conocer su proceso de registro y detectar áreas de oportunidad.
1.- Coworking 3ER ESPACIO ubicado en Ámsterdam 240, 4to piso, México CDMX. Se realizó una entrevista a la gerente de comunicaciones (Ella es quien lleva el registro).
•	Registro de forma manual en una bitácora (Se planea implementar tarjetas de acceso para llevar mayor control en el registro)
•	Se registran tanto visitantes como miembros que contratan el espacio por 80 horas (En este caso para llevar el control de horas trabajando en el espacio).
•	La información recabada se pasa a una hoja de Excel.
2.- WeWork  Montes Urales ,424 Lomas de Chapultepec. Se e logró hacer una entrevista a una miembro del coworking donde  explicó el proceso que se lleva a cabo para el registro de visitantes. 
•	Para el registro de visitantes (Ya sea visita programada o no) los miembros de este espacio cuentan con  una app, en la cual se realiza el pre registro de visitas, también esta notifica con un mensaje al llegar alguna visita (contiene los datos y la foto del visitante)
•	El visitante se presenta en recepción se registra en la tablet con los datos que le piden (Nombre, correo, empresa  y persona a quien visita), se toma una foto y estos datos se envían por medio de la app antes mencionada, espera a que lo reciba a quien visita 
•	Si va a acceder a las instalaciones del edificio, tiene que registrarse nuevamente en una bitácora y deja identificación.
  
3.- Coworking Terminal1 ubicado en Tehuantepec 170. Se realizó tanto entrevista a la recepcionista como a vigilancia ya que este es quien apoya en llevar el registro de entrada de los visitantes. (Son 37 empresas las que laboran en el lugar y se tiene un aproximado de mínimo 20 visitas por día).
•	Se llenan datos en bitácora localizada en el módulo de vigilancia, en caso de que no se encuentre el vigilante el registro se lleva a cabo en la recepción (se cuenta con una cámara la cual graba el proceso de registro).
•	Se le hace la llamada a la persona que se visita (esta decide si se da el acceso o no al inmueble). 
•	En dado caso que no se localice a la persona que se visita, el visitante se queda en espera hasta ser atendido. 


### Visita cliente incognito
WeWork ubicado en Insurgentes 601 cuenta con 8 pisos de espacios de coworking. Se realizó la visita para probar de “cliente incognito”. 
•	Al llegar al  edificio, se registra en bitácora en el caso de visitas, y en una libreta en caso de trabajar en el lugar este lo llevaba a cabo gente de seguridad del edificio, 
•	Para dar  acceso al edificio se nos  solicito  identificación oficial. 
•	Indicaron el piso donde se encuentra la recepción del WeWork donde se tiene  que registrar nuevamente (solo si algún miembro ha informado a la recepción que te permitan el acceder al lugar) en este caso de manera digital en una Tablet. 
•	Como no contábamos con ninguna invitación de algún miembro solo se pudo obtener la información por medio de la recepcionista sobre el modo de registro de visitantes.
Conclusión:
En resumen el registro no fue nada práctico ni agradable, se tiene que pasar por dos filtros los cuales hacen que  pierdas tiempo, sin contar que sin una identificación oficial no te permiten el acceso. Aunque se cuenta con el registro de manera digital se tiene que llevar el procedimiento arcaico del registro de bitácora (En este caso doblo vez, para poder acceder al edificio)
### Benchmarck	
Se realizó un comparativo con 4  diferentes registros de visitantes que se llevan a cabo de forma digital, para identificar su funcionamiento, y saber qué es lo que se ofrece al mercado.
https://docs.google.com/spreadsheets/d/1T2PmO7OF5h4Thg-H8md70gFtSOtcD7W0NVzN500A5JU/edit#gid=0 
##ALCANCE
###Usuario
En el proceso de registro se ha pensado en todas las personas que accedan al Coworking ya sea por una cita de de negocios, una entrevista de trabajo  o a solicitar alguna información, por estos motivos el rango de edad es extenso a partir de los 18 años. En el caso de quien lleva el control de registro, se ha pensado tanto en vigilantes (Son el primer filtro) como en la recepcionista quienes son 
###Historias de usuario
1.- Yo como visitante no quiero demorar más tiempo para que me permitan acceder al edificio.
2.-Yo como visitante quiero registrarme al ingresar al edificio de una manera sencilla y rápida.
3.-Yo como visitante no quiero demorar en llenar registros donde se me pidan bastantes datos.
4.- Yo como visitante no me gustaría esperar bastante tiempo en lo que localizan a la persona que voy a visitar.
5.-Yo como recepcionista quiero agilizar en el menor tiempo posible el registro de visitantes para que este no interfiera en mis múltiples actividades.
6.-Yo como recepcionista quiero llevar un registro ágil y consultar los datos de los visitantes en cualquier momento de una manera rápida.

###Mercado
Visitantes  y administradores del coworking en general

## ENTREVISTAS DE USUARIOS

## CRITERIOS DE DISEÑO
Después de lo investigado se ha pensado en el desarrollo de una aplicación que solucione lo engorroso y tardado que es el registro de visitantes tanto para el visitante como para quien lleva este registro. Se ha pensado en que esta aplicación tiene que llevar estas características.
1.-Intuitiva: Debe ser de fácil uso, el visitante debe saber en automático que pasos seguir sin necesidad de una amplia explicación.
2.-Simple: El formulario a llenar solo debe de requerir los datos y debe ser de una manera ágil.
3.-Amigable con el usuario: Tiene que ser una aplicación que minimice tiempo de registro en pocos click`s y debe ser de fácil uso.
### Paleta de colores
###Tipografía
###Identidad

##DIAGRAMA DE USUARIO
## IDEACIÓN Y VALIDACIÓN
##PROTOTIPO FINAL
https://marvelapp.com/4fg7gcf/screen/46664714

##CONCLUSION
###AREAS A MEJORAR
##APRENDIZAJES 
