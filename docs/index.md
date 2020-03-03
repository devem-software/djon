# Documentación para DJ.on

Esta documentación estará en constante actualización, al igual dado que la librería esta en modo de desarrollo esta documentación puede cambiar.

DJon se divide en 5 funcionalidades principales:

[1]: collection.md "Colección"
[2]: database.md "Base de datos"
[3]: events.md "Eventos"
[4]: security.md "Seguridad"
[5]: utils.md "Utilidades"

[a]: https://img.shields.io/badge/collection:-proyectado-blue
[b]: https://img.shields.io/badge/database:-desarrollo-red
[c]: https://img.shields.io/badge/events:-proyectado-blue
[d]: https://img.shields.io/badge/security:-desarrollo-yellow
[e]: https://img.shields.io/badge/utils:-stable-green

---

+ [![Proyectado][a]][1]
  + En este apartado el modulo `collection` es empleado para la administración de las colecciones almacenadas dentro de una base de datos.

+ [![Presenta errores][b]][2]
  + `database` se enfoca en la creacion, conexion, limpieza y eliminacion de las bases de datos enteras no discrimina colecciones o elementos adicionales almacenados en estas.

+ [![Proyectado][c]][3]
  + El modulo `events` es el encargado de llamar un `callback` luego de ejecutar unar accion en la libreria.

+ [![Precaucion][d]][4]
  + El modulo `security` encripta y desencripta la informacion almacenada en las bases de datos generadas con **DJ.on**.

+ [![Estable][e]][5]
  + La utilidades de la libreria **DJ.on** estan testeadas en su totalidad por lo tanto son funcionales y estables a la hora de hacer uso de estas.

---

## Estado de desarrollo

| Label | Description |
|:---|----:|
|![Modulo para una futura version](https://img.shields.io/badge/&lt;MODULO&gt;:-proyectado-blue) |Completamente funcional|
|![Presenta errores](https://img.shields.io/badge/&lt;MODULO&gt;:-desarrollo-red)|En desarrollo, aun presenta errores inesperados|
|![Puede ser usado con precaución](https://img.shields.io/badge/&lt;MODULO&gt;:-desarrollo-yellow)|Puede ser usado pero con precaución|
|![Modulo estable](https://img.shields.io/badge/&lt;MODULO&gt;:-stable-green)|Completamente|funcional
