---
layout: ../../layouts/LayoutProjectView.astro
title: "Kafka Core"
description: "En este proyecto, exploramos la herramienta de arquiectura distribuida 'KAFKA', veremos la implementación y configuración del consumer, provider y server."
pubDate: 2024-10-07
category: "intro"
---
# Kafka Core


## Descripción de la Estructura
Este proyecto está organizado de manera modular en dos componentes principales: `kafka-consumer` y `kafka-provider`. A
continuación, se presenta la estructura de carpetas y una breve descripción de cada una de ellas.

### `pom.xml` (Proyecto Padre)

El archivo `pom.xml` en la raíz del proyecto actúa como el proyecto padre y define las dependencias comunes y la
configuración para los módulos `kafka-consumer` y `kafka-provider`. Este archivo permite la herencia de configuraciones,
lo que simplifica la gestión de dependencias y versiones.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.3.5</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.alexiae.kafka</groupId>
    <artifactId>alexiae-kafka-core</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>kafka-core</name>
    <description>Demo project for Spring Boot</description>

    <!-- proyecto global base-->
    <packaging>pom</packaging>
    <modules>
        <module>kafka-provider</module>
        <module>kafka-consumer</module>
    </modules>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.kafka</groupId>
            <artifactId>spring-kafka</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.kafka</groupId>
            <artifactId>spring-kafka-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>


```

### `kafka-consumer`

Esta carpeta es un módulo que implementa un consumidor de mensajes de Kafka.

- **`.idea`**: Configuración del IDE para el módulo.
- **`.mvn`**: Configuración de Maven para el módulo.
- **`src`**: Contiene el código fuente y recursos del proyecto.
    - **`main/java`**: Código Java de la aplicación.
        - **`config`**: Configuraciones específicas del consumidor.
        - **`listeners`**: Clases que manejan la lógica para escuchar mensajes de Kafka.
    - **`main/resources`**: Archivos de recursos como configuraciones y propiedades.
    - **`test/java`**: Código de pruebas unitarias para el consumidor.

- **`target`**: Directorio donde Maven compila los archivos generados y los resultados de las pruebas.
    - **`classes`**: Clases compiladas.
    - **`generated-sources`**: Fuentes generadas automáticamente, como los archivos de anotaciones.

### `kafka-provider`

Este módulo proporciona servicios que interactúan con Kafka para publicar mensajes.

- **`.idea`**: Configuración del IDE para el módulo.
- **`.mvn`**: Configuración de Maven para el módulo.
- **`src`**: Contiene el código fuente y recursos del proyecto.
    - **`main/java`**: Código Java de la aplicación.
        - **`config`**: Configuraciones específicas del proveedor.
        - **`controller`**: Controladores que manejan las solicitudes.
        - **`service`**: Lógica de negocio, con implementaciones específicas en la subcarpeta `impl`.
    - **`main/resources`**: Archivos de recursos como configuraciones y propiedades.
    - **`test/java`**: Código de pruebas unitarias para el proveedor.

- **`target`**: Al igual que en el módulo consumidor, aquí se generan los archivos compilados y resultados de las
  pruebas.

```html
├kafka-core
├───.idea
│   └───libraries
├───.mvn
│   └───wrapper
├───kafka-consumer
│   ├───.idea
│   ├───.mvn
│   │   └───wrapper
│   ├───src
│   │   ├───main
│   │   │   ├───java
│   │   │   │   └───com
│   │   │   │       └───alexiae
│   │   │   │           └───kafka
│   │   │   │               └───consumer
│   │   │   │                   ├───config
│   │   │   │                   └───listeners
│   │   │   └───resources
│   │   └───test
│   │       └───java
│   │           └───com
│   │               └───alexiae
│   │                   └───kafka
│   │                       └───consumer
│   └───target
│       ├───classes
│       │   └───com
│       │       └───alexiae
│       │           └───kafka
│       │               └───consumer
│       │                   ├───config
│       │                   └───listeners
│       ├───generated-sources
│       │   └───annotations
│       ├───generated-test-sources
│       │   └───test-annotations
│       └───test-classes
│           └───com
│               └───alexiae
│                   └───kafka
│                       └───consumer
└───kafka-provider
├───.idea
│   └───libraries
├───.mvn
│   └───wrapper
├───src
│   ├───main
│   │   ├───java
│   │   │   └───com
│   │   │       └───alexiae
│   │   │           └───kafka
│   │   │               └───provider
│   │   │                   ├───config
│   │   │                   ├───controller
│   │   │                   └───service
│   │   │                       └───impl
│   │   └───resources
│   └───test
│       └───java
│           └───com
│               └───alexiae
│                   └───kafka
│                       └───provider
└───target
├───classes
│   └───com
│       └───alexiae
│           └───kafka
│               └───provider
│                   ├───config
│                   ├───controller
│                   └───service
│                       └───impl
├───generated-sources
│   └───annotations
├───generated-test-sources
│   └───test-annotations
└───test-classes
└───com
└───alexiae
└───kafka
└───provider
```



# Comandos de Apache Kafka

A continuación se presenta una lista de comandos comunes de Apache Kafka

- **Iniciar Zookeeper**:
  ```bash
  .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
  ```

- **Iniciar el servidor Kafka**:
  ```bash
    .\bin\windows\kafka-server-start.bat .\config\server.properties
  ```

- **Crea un nuevo topic en el servidor de kafka**:
  ```bash
    .\bin\windows\kafka-topics.bat --bootstrap-server localhost:9092 --create --topic test-topic
  ```

- **Decribir los detalles de un topic**:
  ```bash
    .\bin\windows\kafka-topics.bat --describe --topic test-topic --bootstrap-server localhost:9092
  ```

- **Listar todos los topics que existen dentro del broker**:
  ```bash
    .\bin\windows\kafka-topics.bat --list --bootstrap-server localhost:9092
  ```

- **Inicia una consola para ver mensajes de un topic especifico**:
  ```bash
    .\bin\windows\kafka-console-consumer.bat --topic test-topic --bootstrap-server localhost:9092
  ```

- **Inicia una consola para enviar mensajes a un topic específico**:
  ```bash
    .\bin\windows\kafka-console-producer.bat --broker-list localhost:9092 --topic test-topic
  ```


## Tecnologías Utilizadas

- **Lenguaje de programación**: Java
- **Frameworks**:Spring Boot
- **Plataforma de Mensajería/Streaming**: Kafka
- **Control de versiones**: Git


---

## Autor

- **Nombre**: Alexi Acuña
- **Rol**: Desarrollador Principal
- **Descripción**: Desarrollador de software con experiencia en aplicaciones Java y Spring Boot.
  Apasionado por la creación de soluciones eficientes y escalables.
- **GitHub**: [github.com/alexi-ae](https://github.com/alexi-ae)
- **LinkedIn**: [linkedin.com/in/ronald-alexi-ae](https://www.linkedin.com/in/ronald-alexi-ae/)