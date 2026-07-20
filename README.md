# Librería - Frontend (Angular)

Esta es la aplicación frontend de **Librería**, un sistema de tienda en línea desarrollado con **Angular 18**, **RxJS**, **Angular Material** y **Tailwind CSS**. Proporciona una experiencia completa para clientes y un panel de administración para gestionar productos, usuarios y pedidos.

> **Importante**: Este frontend requiere que el **backend API** esté en ejecución. El backend está construido con .NET Core 8 y usa SQL Server como base de datos. Asegúrate de seguir las instrucciones del [README del backend](https://github.com/calcinas-adrian/bookstore-api) para levantarlo.

---

## Requisitos previos

- **Node.js** (v18 o superior)
- **npm** (v9 o superior)
- **Backend en ejecución** (ver sección correspondiente)

---

## Pasos para levantar el frontend

### 1. Clonar el repositorio

```bash
git clone https://github.com/calcinas-adrian/bookstore-web.git
cd bookstore-web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar la URL de la API

El frontend necesita saber dónde está el backend. La configuración se encuentra en `src/environments/environments.ts`:

```typescript
export const environments = {
  baseUrl: "http://localhost:5210/api",
};
```

Si tu backend corre en otro puerto o dominio, actualiza este valor.

### 4. Ejecutar la aplicación en modo desarrollo

```bash
npm start
```

Luego abre tu navegador en `http://localhost:4200`. La aplicación se recargará automáticamente ante cambios en el código.

---

## 🗂️ Estructura del proyecto

El frontend sigue una arquitectura MVC (Model‑View‑Controller) dentro del ecosistema Angular:

```
src/
├── app/
│   ├── controllers/          # Componentes reutilizables (ej: tarjeta de producto)
│   ├── models/               # Interfaces TypeScript (Producto, Usuario, Carrito, etc.)
│   ├── services/             # Servicios para comunicación con la API
│   ├── shared/               # Componentes compartidos (layouts, títulos, etc.)
│   └── views/                # Vistas/páginas principales
│       ├── admin/            # Panel de administración
│       ├── auth/             # Login y registro
│       └── dashboard/        # Vista de cliente (productos, carrito, historial)
├── environments/             # Configuración de entornos
└── styles.css                # Estilos globales con Tailwind
```

---

## 🧭 Funcionalidades principales

### Para clientes

- **Explorar productos**: Listado agrupado por categorías, con búsqueda por nombre.
- **Detalle de producto**: Ver información, stock y añadir al carrito.
- **Carrito de compras**: Añadir/eliminar productos, ajustar cantidades y proceder al pago.
- **Historial de compras**: Consultar pedidos anteriores.
- **Favoritos**: Guardar productos en una lista (almacenada en `localStorage`).
- **Perfil de usuario**: Ver y editar datos personales.
- **Soporte**: Preguntas frecuentes y formulario de contacto.

### Para administradores

- **Gestión de productos**: Crear, editar y eliminar productos.
- **Gestión de categorías y proveedores**: Añadir o eliminar categorías y proveedores.
- **Gestión de usuarios**: Cambiar roles (Cliente ↔ Empleado) y desactivar administradores.
- **Reportes**: (en construcción) espacio para futuros análisis.

---

## 🛠️ Tecnologías utilizadas

| Tecnología       | Versión |
| ---------------- | ------- |
| Angular          | 18      |
| Angular Material | 18      |
| Tailwind CSS     | 3.4     |
| TypeScript       | 5.5     |
| RxJS             | 7.8     |

---

## 📦 Scripts disponibles

| Comando         | Descripción                                                 |
| --------------- | ----------------------------------------------------------- |
| `npm start`     | Inicia el servidor de desarrollo en `http://localhost:4200` |
| `npm run build` | Compila la aplicación para producción en la carpeta `dist/` |
| `npm test`      | Ejecuta las pruebas unitarias con Karma                     |

---

## 🔗 Relación con el backend

El frontend se comunica con el backend a través de peticiones HTTP a la API. Asegúrate de que:

1. El backend esté en ejecución (ver [README del backend](https://github.com/calcinas-adrian/bookstore-api)).
2. La URL base en `environments.ts` sea correcta.
3. La política CORS del backend permita el origen del frontend (ya está configurada para permitir cualquier origen en desarrollo).

---

## 🤝 Contribuciones

Si deseas contribuir, por favor abre un issue o envía un pull request. Asegúrate de seguir las convenciones de código y de probar tus cambios.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## ✉️ Contacto

Para dudas o sugerencias, puedes contactar al mantenedor del proyecto o abrir un issue en GitHub.

---

**¡Disfruta de la experiencia Librería!**

---

![Diagrama ERD](./public/ERD.jpeg)
