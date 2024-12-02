---
layout: ../../layouts/LayoutProjectView.astro
title: "Streams"
description: "En esta guía exploraremos los principales métodos de Stream en Java, aplicados en el contexto de una aplicación usando JPA y Spring Boot. Cada método se explica con un ejemplo que opera sobre una lista de transacciones obtenidas de la base de datos, en un contexto bancario."
pubDate: 2024-09-28
category: "intro"
---
# Java Streams: Ejemplos con JPA

En esta guía exploraremos los principales métodos de `Stream` en Java, aplicados en el contexto de una aplicación usando JPA y Spring Boot. Cada método se explica con un ejemplo que opera sobre una lista de transacciones obtenidas de la base de datos.

---

## Operaciones Intermedias

### 1. Obtener montos de transacciones

**Descripción:** Este método transforma cada transacción de la cuenta en su monto utilizando el método `map` de `Stream`.

```java
public List<Double> getTransactionAmounts(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .map(Transaction::getAmount)     // Transforma cada transacción en su amount
        .toList();
}
```

### 2. Filtrar transacciones de alto valor

**Descripción:** Este método filtra todas las transacciones cuyo monto es mayor a 100 utilizando el método `filter` de `Stream`.

```java
public List<Transaction> getHighValueTransactions(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .filter(t -> t.getAmount() > 100)  // Filtra las transacciones con amount > 100
        .toList();
}
```

### 3. Obtener montos de transacciones distintas

**Descripción:** Este método elimina los montos duplicados de las transacciones y devuelve una lista con montos únicos utilizando `distinct`.

```java
public List<Double> getDistinctTransactionAmounts(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .map(Transaction::getAmount)      // Mapea las transacciones a sus montos
        .distinct()                       // Elimina los montos duplicados
        .toList();
}
```

### 4. Obtener transacciones ordenadas

**Descripción:** Este método ordena las transacciones de la cuenta de mayor a menor monto utilizando `sorted`.

```java
public List<Transaction> getSortedTransactions(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .sorted((t1, t2) -> Double.compare(t2.getAmount(), t1.getAmount()))  // Ordena de mayor a menor
        .toList();
}
```

### 5. Obtener las primeras cinco transacciones

**Descripción:** Este método devuelve solo las primeras cinco transacciones de la cuenta utilizando `limit`.

```java
public List<Transaction> getFirstFiveTransactions(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .limit(5)     // Limita a las primeras 5 transacciones
        .toList();
}
```

### 6. Obtener transacciones después de las primeras cinco

**Descripción:** Este método omite las primeras cinco transacciones y devuelve el resto de las transacciones utilizando `skip`.

```java
public List<Transaction> getTransactionsAfterFirstFive(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .skip(5)      // Omite las primeras 5 transacciones
        .toList();
}
```




## Operaciones Finales

### 1. Obtener números de cuenta únicos

**Descripción:** Este método mapea cada transacción al número de cuenta correspondiente y devuelve un conjunto de números de cuenta únicos utilizando `Collectors.toSet()`.

```java
public Set<String> getAccountNumbers() {
    return transactionRepository.findAll().stream()
        .map(t -> t.getAccount().getAccountNumber())  // Mapea cada transacción al número de cuenta
        .collect(Collectors.toSet()); // convertir el flujo en una lista de tipo Set
}
```

### 2. Obtener el monto total de transacciones

**Descripción:** Este método mapea las transacciones de una cuenta a sus montos y utiliza `reduce` para sumar todos los montos, devolviendo el total.

```java
public Double getTotalTransactionAmount(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .map(Transaction::getAmount)       // Mapea cada transacción a su amount
        .reduce(0.0, Double::sum);         // Reduce sumando todos los montos
}
```

### 3. Imprimir todas las transacciones

**Descripción:** Este método imprime cada transacción de una cuenta utilizando `forEach`.

```java
public void printAllTransactions(Account account) {
    transactionRepository.findByAccount(account).stream()
        .forEach(System.out::println);     // Imprime cada transacción
}
```

### 4. Contar transacciones

**Descripción:** Este método cuenta el número total de transacciones asociadas a una cuenta utilizando `count()`.

```java
public long getTransactionCount(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .count();                          // Cuenta las transacciones
}
```
## Operaciones Finales Especiales

### 1. Obtener la suma de montos

**Descripción:** Este método utiliza `mapToDouble` para mapear cada transacción a un `DoubleStream` y luego suma todos los montos, devolviendo el total.

```java
public double getSumOfAmounts(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .mapToDouble(Transaction::getAmount)  // Mapea cada transacción a un DoubleStream
        .sum();                               // Suma todos los montos
}
```

### 2. Obtener el monto promedio

**Descripción:** Este método también utiliza `mapToDouble` para convertir las transacciones en un `DoubleStream` y calcula el promedio de los montos, devolviendo un `OptionalDouble`.

```java
public OptionalDouble getAverageAmount(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .mapToDouble(Transaction::getAmount)  // Mapea cada transacción a un DoubleStream
        .average();                           // Calcula el promedio
}
```

### 3. Obtener el monto de transacción máximo

**Descripción:** Este método devuelve el monto máximo de las transacciones de una cuenta utilizando `mapToDouble` y el método `max()`, que devuelve un `OptionalDouble`.

```java
public OptionalDouble getMaxTransactionAmount(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .mapToDouble(Transaction::getAmount)  // Mapea cada transacción a un DoubleStream
        .max();                               // Obtiene el valor máximo
}
```

### 4. Obtener el monto de transacción mínimo

**Descripción:** Similar al método anterior, este método obtiene el monto mínimo de las transacciones utilizando `mapToDouble` y el método `min()`, devolviendo un `OptionalDouble`.

```java
public OptionalDouble getMinTransactionAmount(Account account) {
    return transactionRepository.findByAccount(account).stream()
        .mapToDouble(Transaction::getAmount)  // Mapea cada transacción a un DoubleStream
        .min();                               // Obtiene el valor mínimo
}
```


## Resumen de Endpoints

#### Stream - metodos intermedios
| Método                                   | Endpoint                                             | Descripción                                          |
|------------------------------------------|-----------------------------------------------------|------------------------------------------------------|
| Obtener montos de todas las transacciones | `GET /methods/intermediate/map/{accountId}/amounts`      | Obtiene los montos de todas las transacciones para una cuenta. |
| Transacciones con monto superior a 100   | `GET /methods/intermediate/filter/{accountId}/high-value` | Obtiene transacciones con un monto superior a 100.  |
| Montos de transacciones distintas         | `GET /methods/intermediate/distinct/{accountId}/distinct-amounts` | Obtiene montos de transacciones distintas.           |
| Transacciones ordenadas por monto         | `GET /methods/intermediate/sorted/{accountId}/sorted-transactions` | Obtiene transacciones ordenadas de mayor a menor.    |
| Primeras cinco transacciones              | `GET /methods/intermediate/limit/{accountId}/first-five` | Obtiene las primeras cinco transacciones.            |
| Transacciones después de las primeras cinco | `GET /methods/intermediate/skip/{accountId}/after-first-five` | Obtiene transacciones que omiten las primeras cinco. |


#### Stream - metodos terminales

| Método                            | Endpoint                                           | Descripción                                          |
|-----------------------------------|---------------------------------------------------|------------------------------------------------------|
| Obtener números de cuentas         | `GET /methods/terminals/collect/account/numbers` | Obtiene un conjunto de números de cuenta de todas las transacciones. |
| Total de transacciones de una cuenta | `GET /methods/terminals/reduce/account/{accountId}/total-amount` | Obtiene el total de los montos de transacciones para una cuenta específica. |
| Imprimir todas las transacciones   | `GET /methods/terminals/foreach/account/{accountId}/print` | Imprime todas las transacciones de una cuenta específica. |
| Contar transacciones               | `GET /methods/terminals/count/account/{accountId}/count` | Cuenta el número de transacciones para una cuenta específica. |


#### Stream - metodos terminales especiales

| Método                     | Endpoint                                           | Descripción                                                   |
|----------------------------|---------------------------------------------------|---------------------------------------------------------------|
| Sumar montos de transacciones | `GET /methods/terminals/special/account/{accountId}/sum` | Obtiene la suma de los montos de transacciones para una cuenta específica. |
| Promedio de montos         | `GET /methods/terminals/special/account/{accountId}/average` | Obtiene el promedio de los montos de transacciones para una cuenta específica. |
| Monto máximo de transacciones | `GET /methods/terminals/special/account/{accountId}/max` | Obtiene el monto máximo de las transacciones para una cuenta específica. |
| Monto mínimo de transacciones | `GET /methods/terminals/special/account/{accountId}/min` | Obtiene el monto mínimo de las transacciones para una cuenta específica. |



## Resumen

Estos métodos proporcionan funcionalidades clave para trabajar con transacciones en una aplicación de Spring Boot. Utilizando la API de Streams de Java, se pueden realizar operaciones de transformación, filtrado y clasificación de manera eficiente.

Cada método está diseñado para trabajar en conjunto con un repositorio que maneja la persistencia de datos, asegurando que las operaciones se realicen sobre una colección de transacciones asociadas a una cuenta específica.

---

## Autor

- **Nombre**: Alexi Acuña
- **Rol**: Desarrollador Principal
- **Descripción**: Desarrollador de software con experiencia en aplicaciones Java y Spring Boot.
  Apasionado por la creación de soluciones eficientes y escalables.
- **GitHub**: [github.com/alexi-ae](https://github.com/alexi-ae)
- **LinkedIn**: [linkedin.com/in/ronald-alexi-ae](https://www.linkedin.com/in/ronald-alexi-ae/)