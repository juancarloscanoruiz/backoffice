<?php

namespace App\Http\Middleware;

use Closure;

class sessionRolMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //SI EL USUARIO NO ES ADMINISTRADOR
        if (session('id_rol') != 1) {
            return redirect()->back();
        } else {
            return $next($request);
        }
    }
}
