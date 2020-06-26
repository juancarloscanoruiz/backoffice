<?php

namespace App\Http\Middleware;

use Closure;

class viewLoginMiddleware
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
        if (session('status')) {
            return redirect()->back();
        } else {
            return $next($request);
        }
    }
}
