# [1.9.0](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.8.0...v1.9.0) (2025-02-25)


### Features

* Agregar opciones para Steam ID y Discord ID en el comando de agregar jugador ([42350a0](https://github.com/Negri234279/bot-rust-battlemetrics/commit/42350a08a35ce8b9f7d50b21cb878d985dd880e8))
* Agregar soporte para obtener información de jugadores de Steam y comando correspondiente ([57dc892](https://github.com/Negri234279/bot-rust-battlemetrics/commit/57dc8922a1d7f8399c28e593d0d2b6bb34230ffa))
* Agregar soporte para obtener información de usuarios de Steam y actualizar la configuración de la API ([62e9702](https://github.com/Negri234279/bot-rust-battlemetrics/commit/62e97027d7d5c446257675c7c9e23888151c481b))
* Mejorar la lista de jugadores mostrando Steam ID y Discord ID en el comando de seguimiento ([a918d5f](https://github.com/Negri234279/bot-rust-battlemetrics/commit/a918d5fb3d13c6c62a0fe473ce8c426bb1ac0060))
* Mejorar la presentación de información del jugador con soporte para Steam ID y Discord ID ([bff7555](https://github.com/Negri234279/bot-rust-battlemetrics/commit/bff75559e9d488a0a2cec0f7a269a2858e7d1d6b))

# [1.8.0](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.16...v1.8.0) (2025-02-24)


### Features

* Agregar configuración de MariaDB y phpMyAdmin en docker-compose para entornos de desarrollo y producción ([6f1880a](https://github.com/Negri234279/bot-rust-battlemetrics/commit/6f1880aae29188b64611a19dcde32a06095e1a74))
* Agregar nuevas dependencias 'inversify', 'mariadb' y 'reflect-metadata' en package.json y package-lock.json ([b4afd03](https://github.com/Negri234279/bot-rust-battlemetrics/commit/b4afd0360558b4b424162a080294509098586a80))
* Refactor estructura de comandos y agregar soporte para inyección de dependencias en el repositorio de Battlemetrics ([1fbce9a](https://github.com/Negri234279/bot-rust-battlemetrics/commit/1fbce9a8c70fca99cb534ba0f23139cfb11761fd))

## [1.7.16](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.15...v1.7.16) (2025-02-23)


### Bug Fixes

* Cambiar la rama de 'dev' a 'main' en el flujo de trabajo de Docker y configuración de lanzamiento ([c276559](https://github.com/Negri234279/bot-rust-battlemetrics/commit/c2765596deda6c0cee3f13d6e7378e13071da434))

## [1.7.15](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.14...v1.7.15) (2025-02-23)


### Bug Fixes

* Mejorar la obtención de la última etiqueta en el flujo de trabajo de Docker ([61bb9d0](https://github.com/Negri234279/bot-rust-battlemetrics/commit/61bb9d0bc1e1705d0ac0083506f6f6c95e466df0))

## [1.7.14](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.13...v1.7.14) (2025-02-23)


### Bug Fixes

* Mejorar la obtención de la última etiqueta en el flujo de trabajo de Docker ([13a7680](https://github.com/Negri234279/bot-rust-battlemetrics/commit/13a7680cd5e645ab3800df9c90ac82ec419e6e34))

## [1.7.13](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.12...v1.7.13) (2025-02-23)


### Bug Fixes

* Obtener la última etiqueta y usarla en el flujo de trabajo de Docker ([2580c7a](https://github.com/Negri234279/bot-rust-battlemetrics/commit/2580c7ae90ff69e43fb109db8a2b601f2f64efae))

## [1.7.12](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.11...v1.7.12) (2025-02-23)


### Bug Fixes

* Agregar configuración de caché para mejorar la instalación de dependencias en el flujo de trabajo de Docker ([b3f99f5](https://github.com/Negri234279/bot-rust-battlemetrics/commit/b3f99f5f6083091964692879f23ae514a885ae5d))

## [1.7.11](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.10...v1.7.11) (2025-02-23)


### Bug Fixes

* Cambiar de 'npm install' a 'npm ci' y agregar caché para mejorar la instalación de dependencias ([f1b6c1a](https://github.com/Negri234279/bot-rust-battlemetrics/commit/f1b6c1af1e4121423550353e4d05f26c32256b77))
* Eliminar la obtención de la etiqueta más reciente en el flujo de trabajo de Docker y usar el nombre de referencia de GitHub ([10c0af1](https://github.com/Negri234279/bot-rust-battlemetrics/commit/10c0af1bcd8b660b789a72a552f5b0bdfadea80e))

## [1.7.10](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.9...v1.7.10) (2025-02-23)


### Bug Fixes

* Eliminar la obtención de etiquetas innecesaria en el flujo de trabajo de Docker ([34e6fad](https://github.com/Negri234279/bot-rust-battlemetrics/commit/34e6fadd7053a123cbb344d9ef001060109b4c92))

## [1.7.9](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.8...v1.7.9) (2025-02-23)


### Bug Fixes

* Actualizar acciones de Docker a la versión más reciente ([1fa60be](https://github.com/Negri234279/bot-rust-battlemetrics/commit/1fa60bec88ddbcd1ce245bb901beea98bc9011c2))

## [1.7.8](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.7...v1.7.8) (2025-02-23)


### Bug Fixes

* Actualizar la acción de configuración de Node.js a la versión 4 y mejorar la obtención de etiquetas en el flujo de trabajo de Docker ([f204df2](https://github.com/Negri234279/bot-rust-battlemetrics/commit/f204df2483071531fc1318ae6b3f2e918d461041))

## [1.7.7](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.6...v1.7.7) (2025-02-23)


### Bug Fixes

* Añadir nueva línea al final del archivo de flujo de trabajo de Docker ([2fd5773](https://github.com/Negri234279/bot-rust-battlemetrics/commit/2fd5773778029500b0b89940c4c1a739261f84a0))

## [1.7.6](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.5...v1.7.6) (2025-02-23)


### Bug Fixes

* Actualizar la versión de etiqueta predeterminada a v0.0.0 en el flujo de trabajo de Docker ([e46a81c](https://github.com/Negri234279/bot-rust-battlemetrics/commit/e46a81c3f9208c6ed8b8694e1502ba53f37757d8))

## [1.7.5](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.4...v1.7.5) (2025-02-23)


### Bug Fixes

* Actualizar acciones de checkout a la versión 4 y ajustar la profundidad de fetch en el flujo de trabajo de Docker ([96109b7](https://github.com/Negri234279/bot-rust-battlemetrics/commit/96109b7ac8e9e3206e26d2f86a62fa6884d4124f))

## [1.7.4](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.3...v1.7.4) (2025-02-23)


### Bug Fixes

* Manejar el caso en que no hay etiquetas disponibles en el flujo de trabajo de Docker ([04c5182](https://github.com/Negri234279/bot-rust-battlemetrics/commit/04c51824cd9d0a991e26d804f0bbecea8f8ecedd))

## [1.7.3](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.2...v1.7.3) (2025-02-23)


### Bug Fixes

* Simplificar la obtención de la última etiqueta en el flujo de trabajo de Docker ([33b3d19](https://github.com/Negri234279/bot-rust-battlemetrics/commit/33b3d192bba3ca1bd714644bec0731ab407a1a56))

## [1.7.2](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.1...v1.7.2) (2025-02-23)


### Bug Fixes

* Actualizar acción de checkout a v4 y habilitar la obtención de etiquetas ([d99a9e6](https://github.com/Negri234279/bot-rust-battlemetrics/commit/d99a9e62d7c2823b510546a66898f5fbc2ea64c6))

## [1.7.1](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.7.0...v1.7.1) (2025-02-23)


### Bug Fixes

* Limpiar el flujo de trabajo de Docker eliminando líneas innecesarias y corrigiendo la salida de la etiqueta más reciente ([be26239](https://github.com/Negri234279/bot-rust-battlemetrics/commit/be262396d55ebef446175efc3016f9931e603a76))

# [1.7.0](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.6.0...v1.7.0) (2025-02-23)


### Features

* Modificar flujo de trabajo de Docker para obtener la etiqueta desde GITHUB_REF y ajustar configuración de semantic-release ([9e0cefe](https://github.com/Negri234279/bot-rust-battlemetrics/commit/9e0cefea32621eff9290deeb841fc548d8b5f408))

# [1.6.0](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.5.0...v1.6.0) (2025-02-23)


### Features

* Actualizar flujo de trabajo de Docker para obtener la última etiqueta y agregar CHANGELOG.md a los activos de lanzamiento ([570b436](https://github.com/Negri234279/bot-rust-battlemetrics/commit/570b4367bf444e3519f393917983d4c8271f9d92))

# [1.3.0](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.2.0...v1.3.0) (2025-02-23)


### Features

* Actualizar la configuración de Docker y la versión del paquete a 1.3.0 ([0738b8f](https://github.com/Negri234279/bot-rust-battlemetrics/commit/0738b8f95e2bbc3ebdb7429cd6d5f1c2e72cd9e2))
* Actualizar la versión de destino de TypeScript a ES2023 en tsconfig.json ([30987f1](https://github.com/Negri234279/bot-rust-battlemetrics/commit/30987f15191a63f5699d834c06c9a1f98ce82114))
* Añadir tipos para comandos y carga de comandos en el bot ([7bfa98c](https://github.com/Negri234279/bot-rust-battlemetrics/commit/7bfa98c80998ba2e33866868e4f18ae62613e808))
* Migrar código de JavaScript a TypeScript, eliminar archivos obsoletos y mejorar la configuración de Docker ([8b85fd1](https://github.com/Negri234279/bot-rust-battlemetrics/commit/8b85fd1cb509fc08f1bd0a81eb55cf7afb978bf9))
* Refactor configuración del bot y carga de comandos en un nuevo archivo ([aa554ca](https://github.com/Negri234279/bot-rust-battlemetrics/commit/aa554ca797da660a33a22817f558883b1889b259))

# [1.2.0](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.1.1...v1.2.0) (2025-02-22)


### Features

* Configurar Docker para entornos de desarrollo y producción, y añadir scripts de inicio en package.json ([d40470f](https://github.com/Negri234279/bot-rust-battlemetrics/commit/d40470fd0dbb7238801ab56487f2cbdf8b1a434d))
* Implementar sistema de logging con Winston y mejorar manejo de errores en el bot ([ae8babf](https://github.com/Negri234279/bot-rust-battlemetrics/commit/ae8babf496463941211a8ddbc47f6006b2ffbff1))
* Inicializar la instancia de BattlemetricsRepositoryImpl ([188798d](https://github.com/Negri234279/bot-rust-battlemetrics/commit/188798d19d132d86584a7bc638240deb9bc0ac23))

## [1.1.1](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.1.0...v1.1.1) (2025-02-22)


### Bug Fixes

* Importar ControlledError en el comando list-player ([581509f](https://github.com/Negri234279/bot-rust-battlemetrics/commit/581509f72944c1473a6a86142448ac61cf8c7f52))

# [1.1.0](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.0.2...v1.1.0) (2025-02-22)


### Features

* Añadir configuración de Dependabot para actualizaciones automáticas de dependencias ([e230eec](https://github.com/Negri234279/bot-rust-battlemetrics/commit/e230eec1c047d4c75bc9c31e6b38d62a1983fc51))
* Añadir flujo de trabajo para la auto-fusión de PRs de Dependabot ([3c10838](https://github.com/Negri234279/bot-rust-battlemetrics/commit/3c108389b5ae7cbaefeb20b140a58723111bc71b))

## [1.0.2](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.0.1...v1.0.2) (2025-02-21)


### Bug Fixes

* Eliminar el plugin @semantic-release/github de la configuración de semantic-release ([2f481e9](https://github.com/Negri234279/bot-rust-battlemetrics/commit/2f481e9b86d8ef7d7f9a6efef01d679a0efa1e46))

## [1.0.1](https://github.com/Negri234279/bot-rust-battlemetrics/compare/v1.0.0...v1.0.1) (2025-02-21)


### Bug Fixes

* Establecer un valor predeterminado para la versión en caso de que no existan tags ([ed7b621](https://github.com/Negri234279/bot-rust-battlemetrics/commit/ed7b621568a0d4dab0b535247210fd466576cd0b))

# 1.0.0 (2025-02-21)


### Bug Fixes

* Agregar permisos de escritura y URL del repositorio en la configuración de semantic-release ([4a2df88](https://github.com/Negri234279/bot-rust-battlemetrics/commit/4a2df8871b0950990fafaab468de8d7c81990c77))
* Eliminar el plugin @semantic-release/npm de la configuración de semantic-release ([30d6ebb](https://github.com/Negri234279/bot-rust-battlemetrics/commit/30d6ebbab3a481a15e1ab423c8c2405a84eeb7b6))


### Features

* Agregar configuración para semantic-release y actualizar flujo de trabajo de Docker ([6a8a3cd](https://github.com/Negri234279/bot-rust-battlemetrics/commit/6a8a3cdde1389f5553459b6410f243d6e504b6dc))
