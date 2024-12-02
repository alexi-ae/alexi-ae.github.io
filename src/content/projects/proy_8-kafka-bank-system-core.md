---
layout: ../../layouts/LayoutProjectView.astro
title: "Core - Sistema Bancario - Distribuido"
description: "En este proyecto, veremos la base del ecosistema de microservicios para un sistema bancario. Este núcleo inicial está diseñado para establecer una infraestructura robusta que permita el despliegue y la comunicación efectiva entre los microservicios del sistema principal."
pubDate: 2024-10-21
category: "intro"
---
# Banking System Core

**Banking System Core** es la base del ecosistema de microservicios para un sistema bancario. Este núcleo inicial está diseñado para establecer una infraestructura robusta que permita el despliegue y la comunicación efectiva entre los microservicios del sistema principal.

## Componentes Principales

El núcleo de *Banking System Core* incluye los siguientes servicios esenciales:

### 1. **API Gateway**
- **Descripción**: Actúa como puerta de entrada para las solicitudes de los clientes hacia los microservicios internos. Encargado del enrutamiento, balanceo de carga y gestión de autenticación.
- **Framework**: Spring Cloud Gateway.
- **Puerto Predeterminado**: `8099`.

### 2. **Config Server**
- **Descripción**: Centraliza la gestión de configuración de todos los microservicios, permitiendo cambios dinámicos sin necesidad de reiniciar servicios.
- **Repositorio de Configuración**: Archivos YAML almacenados en un directorio o repositorio Git.
- **Puerto Predeterminado**: `9000`.

### 3. **Registry Server (Eureka)**
- **Descripción**: Servicio de descubrimiento que permite a los microservicios registrarse y localizarse entre ellos dinámicamente.
- **Framework**: Spring Cloud Netflix Eureka.
- **Puerto Predeterminado**: `8761`.

### 4. **Directorio del Config Server**
- **Descripción**: Contiene los archivos de configuración para los diferentes microservicios del sistema.
- **Estructura**:
  - `microservice-1.yml`, `microservice-2.yml`: Configuraciones específicas de cada microservicio.

## Configuración y Ejecución
1. Crear carpeta de trabajo
   Primero, crea una carpeta llamada bank-system en tu máquina y navega dentro de ella:
   ```bash
    mkdir bank-system-core
    cd bank-system
    ```

2. **Clonar el repositorio**:
   Clonaremos el proyecto en nuestra carpeta de trabajo local
   ```bash
   git clone https://github.com/tu-usuario/banking-system-core.git
   ```
3. Usar Docker para el despliegue (docker-compose)
   Luego, en el proyecto clonado, ejecutaremos el docker-compose que contiene la configuración para el despliegue:
   ```bash
    docker-compose up --build
   ```
4. Validación del Despliegue
   Una vez que hayas ejecutado docker-compose up --build, puedes seguir estos pasos para validar que todo se ha levantado correctamente.
  - 4.1 Verificar el estado de los contenedores
     Primero, asegúrate de que todos los contenedores estén funcionando correctamente. Puedes usar el siguiente comando para ver el estado de los contenedores:
     ```bash
      docker-compose ps
     ```
     Esto debería mostrar algo como:
     ```bash
      CONTAINER ID   IMAGE                                   COMMAND                  CREATED              STATUS                   PORTS                                                  NAMES
      16bd58dc5924   kafka-bank-system-core-api-gateway      "sh -c 'sleep 20 && …"   8 minutes ago        Up 7 minutes             0.0.0.0:8099->8099/tcp, 8761/tcp                       api-gateway
      bd462865dc6c   kafka-bank-system-core-registry         "sh -c 'sleep 20 && …"   8 minutes ago        Up 7 minutes (healthy)   0.0.0.0:8761->8761/tcp                                 registry
      8f2c9f0d8b70   kafka-bank-system-core-config-server    "java -jar /app.jar"     8 minutes ago        Up 8 minutes (healthy)   0.0.0.0:9000->9000/tcp                                 config-server
     ```
     Asegúrate de que el estado de todos los contenedores sea Up. Si algún contenedor no está "Up", revisa los logs para detectar posibles errores.


  - 4.2 Verificar la conectividad de las APIs
    Abre tu navegador o usa curl para hacer una petición GET a la ruta del API Gateway:
  ```bash
    curl http://localhost:8099/actuator/health
  ```
  Si todo esta bien, tendrias que tener una respuesta como:
  ```bash
    {"status":"UP"}
  ```


## Próximos Pasos:

Una vez desplegado el núcleo del sistema, se pueden levantar los siguientes microservicios específicos que implementan la lógica de negocio del sistema bancario, como:
- **Authenticación y dseguridad**.
- **Gestión de clientes**.
- **Gestión de Cuentas**.
- **Gestión de Transacciones**.

[kafka-bank-system](https://github.com/alexi-ae/kafka-bank-system)

## Tecnologías_Utilizadas

#### Lenguaje de Programación
- Java

#### Frameworks y Bibliotecas
- Spring Boot
- Spring Security

#### Herramientas de Contenerización y Despliegue
- Docker
- Docker Compose

#### Control de Versiones
- Git
- GitHub
---

### Autor
- **Nombre**: Alexi Acuña
- **Rol**: Desarrollador Principal
- **Descripción**: Desarrollador de software con experiencia en aplicaciones Java y Spring Boot.
  Apasionado por la creación de soluciones eficientes y escalables.
- **GitHub**: [github.com/alexi-ae](https://github.com/alexi-ae)
- **LinkedIn**: [linkedin.com/in/ronald-alexi-ae](https://www.linkedin.com/in/ronald-alexi-ae/)
