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
