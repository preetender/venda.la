<?php

namespace App\Support;

final class ApiMercadoLivre
{
  /**
   * Consultar dados da categoria pelo id.
   *
   * @param $id
   * @return array
   */
  public static function findById($id)
  {
    $ctx = stream_context_create([
      'https' => [
        'header' => 'Accept: application/json'
      ]
    ]);

    return json_decode(
      file_get_contents("https://api.mercadolibre.com/categories/$id", false, $ctx)
    );
  }
}
