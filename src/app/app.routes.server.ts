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
