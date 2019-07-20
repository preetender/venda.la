<?php

namespace App\Http\Middleware;

use Closure;

class CheckClientTokenMiddleware
{
  /**
   * Tokens de acesso permitidos.
   *
   * @var array
   */
  protected $white_list = [
    "zp3BEgTW4HGgQ1frYHHqxpM3xWVYZQTM",
    "Es0qDATwioS6ezRcmkx7jYjLvN9ADI8T",
    "E7Pfo4n87uIeApYA643pbDQiEOXVSDqM"
  ];

  /**
   * Handle an incoming request.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Closure  $next
   * @return mixed
   */
  public function handle($request, Closure $next)
  {
    //
    abort_if(!in_array($request->header('client-token'), $this->white_list), 403, 'Você não tem persmissões para acessar os recursos.');

    return $next($request);
  }
}
