---
layout: ../../layouts/LayoutProjectView.astro
title: "Arquitectura Hexagonal"
description: "En este proyecto, veremos la Arquitectura Hexagonal, también conocida como 'Arquitectura de Puertos y Adaptadores', fue propuesta por Alistair Cockburn. Su principal objetivo es separar el núcleo de la aplicación de las interacciones externas, como bases de datos, interfaces de usuario y servicios externos. Esto permite que la aplicación sea más flexible, mantenible y fácil de probar."
pubDate: 2024-10-14
category: "intro"
---
# Arquitectura Hexagonal

La **Arquitectura Hexagonal**, también conocida como **Arquitectura de Puertos y Adaptadores**, fue propuesta por Alistair Cockburn. Su principal objetivo es separar el núcleo de la aplicación de las interacciones externas, como bases de datos, interfaces de usuario y servicios externos. Esto permite que la aplicación sea más flexible, mantenible y fácil de probar.

## Principios Clave

- **Separación de Responsabilidades**: La lógica de negocio se encuentra en el centro, mientras que las interacciones externas se manejan a través de puertos y adaptadores.
- **Independencia de la Interfaz**: La aplicación puede funcionar sin una interfaz de usuario, lo que facilita la realización de pruebas automatizadas.
- **Flexibilidad**: Permite cambiar o reemplazar componentes externos sin afectar el núcleo de la aplicación.

## Estructura del Proyecto

A continuación se presenta la estructura del proyecto base, junto con una breve explicación de cada paquete:
``` shell
src
├───main
│   ├───java
│   │   └───com
│   │       └───alexiae
│   │           └───arq
│   │               └───hexagonal
│   │                   │   ArqHexagonalApplication.java
│   │                   │
│   │                   ├───application          # Lógica de aplicación
│   │                   │   ├───dto              # Objetos de transferencia de datos
│   │                   │   ├───mapper           # Conversión entre modelos y DTOs
│   │                   │   ├───service          # Servicios de aplicación
│   │                   │   └───usercase         # Implementaciones de casos de uso
│   │                   │
│   │                   ├───domain               # Lógica de negocio
│   │                   │   ├───model            # Modelos de dominio
│   │                   │   └───port             # Interfaces para entrada y salida
│   │                   │       ├───in           # Interfaces de entrada (Use Cases)
│   │                   │       └───out          # Interfaces de salida (Adapters)
│   │                   │
│   │                   └───infrastructure       # Interacción con el mundo exterior
│   │                       ├───adapter          # Implementaciones de puertos de salida
│   │                       ├───entity           # Entidades de persistencia
│   │                       ├───mapper           # Conversión entre entidades y modelos
│   │                       ├───repository       # Repositorios JPA
│   │                       └───rest             # Controladores REST
│   │
│   └───resources
│       ├───application.properties               # Configuración de la aplicación
│       ├───static                                # Recursos estáticos
│       └───templates                             # Plantillas HTML
└───test
    └───java
        └───com
            └───alexiae
                └───arq
                    └───hexagonal
                            ArqHexagonalApplicationTests.java
```

### Capas y sus responsabilidades

1. **Application**: Contiene la lógica de aplicación, incluyendo servicios, DTOs y casos de uso.
    - **DTO**: Objetos para transferir datos entre capas.
    - **Mapper**: Conversión entre entidades y DTOs.
    - **Service**: Implementaciones de servicios que coordinan los casos de uso.
    - **UserCase**: Casos de uso específicos que implementan las interfaces definidas en la capa de dominio.

2. **Domain**: Representa la lógica central del negocio.
    - **Model**: Entidades principales del dominio (`Account`, `Customer`, `Transaction`).
    - **Port**: Interfaces para comunicación entre la lógica de negocio y otras capas.
        - **In**: Interfaces para casos de uso.
        - **Out**: Interfaces para persistencia y otros servicios externos.

3. **Infrastructure**: Maneja las interacciones con el mundo exterior.
    - **Adapter**: Implementaciones de los puertos de salida (`Out`).
    - **Entity**: Representación de las entidades para la persistencia en la base de datos.
    - **Repository**: Interfaces de Spring Data JPA.
    - **Rest**: Controladores REST para la comunicación con la capa de aplicación.

## Requisitos

- **Java 17+**
- **Spring Boot 3.3.4**
- **Base de datos**: PostgreSQL (configurable)
- **Maven**
---

# Conclusión
La arquitectura hexagonal proporciona una forma efectiva de estructurar aplicaciones, permitiendo una separación clara entre la lógica de negocio y las interacciones externas. Esta estructura de proyecto facilita el mantenimiento y la escalabilidad, al tiempo que permite realizar pruebas de manera más sencilla.

---

## Autor

- **Nombre**: Alexi Acuña
- **Rol**: Desarrollador Principal
- **Descripción**: Desarrollador de software con experiencia en aplicaciones Java y Spring Boot.
  Apasionado por la creación de soluciones eficientes y escalables.
- **GitHub**: [github.com/alexi-ae](https://github.com/alexi-ae)
- **LinkedIn**: [linkedin.com/in/ronald-alexi-ae](https://www.linkedin.com/in/ronald-alexi-ae/)