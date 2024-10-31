
---

# Proyecto de Ecommerce con Medusa y Next.js 14

Este proyecto es una tienda en línea creada con **Medusa** y **Next.js 14** que permite la gestión de productos, categorías y pagos. Incluye soporte para **Tolgee** para la internacionalización y sincronización con **PayPal** para el procesamiento de pagos. Este repositorio es mantenido por **Spinzarpa**.

## Características

- **Catálogo de Productos**: Administra productos y categorías de forma fácil.
- **Pago Seguro**: Integración con **PayPal** para transacciones rápidas y seguras.
- **Internacionalización (i18n)**: Tolgee implementado para gestionar traducciones.
- **Despliegue en Vercel**: Fácilmente desplegable en Vercel para un hosting rápido.

## Requisitos

- Node.js (v16 o superior)
- Medusa CLI (`npm install -g @medusajs/medusa-cli`)
- Git (para clonar el repositorio)
- Cuenta en Vercel (opcional, para el despliegue)
- Cuenta de PayPal (para el procesamiento de pagos)
- Claves de Tolgee (para la internacionalización)

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/Spinzarpa/ecommerce-storefront.git
   cd ecommerce-storefront
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Configurar Medusa**:

   Instala y configura Medusa en tu entorno local. Sigue [la guía de instalación de Medusa](https://docs.medusajs.com/) para más detalles.

4. **Configurar Tolgee**:

   Asegúrate de tener las claves de Tolgee configuradas. Puedes definir las claves en el archivo de configuración en la ruta adecuada para la internacionalización.

5. **Configurar PayPal**:

   Configura PayPal en tu proyecto. Asegúrate de ingresar tus credenciales de PayPal en las variables de entorno para una integración segura.

## Ejecución en Local

Para iniciar el proyecto en local:

```bash
npm run dev
```

---
