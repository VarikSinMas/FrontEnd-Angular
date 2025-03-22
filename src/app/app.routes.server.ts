<<<<<<< HEAD
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
=======
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'players',
    renderMode: RenderMode.Prerender,  // Usa RenderMode.Ssr para permitir que se renderice del lado del servidor
  },
  {
    path: '**',  // Esto maneja cualquier otra ruta
    renderMode: RenderMode.Prerender,  // Asegura que las rutas se manejen en SSR
  }
];
>>>>>>> a6f9468530a3d91f3989422301d458515ee6a53d
