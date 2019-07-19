<?php

namespace App\Support;

use Intervention\Image\ImageManagerStatic;
use Illuminate\Filesystem\Filesystem;

class Upload
{
  /**
   * Gerar thumbs
   *
   * @var array
   */
  protected $sizes = [
    10, // lazy-loader
    256,
    512,
    'original'
  ];

  /**
   * Diretorio padrao
   *
   * @var string
   */
  protected $folder = 'products';

  /**
   * @var
   */
  protected $file;

  /**
   * Processar imagens
   *
   * @var array
   */
  protected $pipes;

  /**
   * @var string
   */
  protected $name;

  /**
   * @var int
   */
  protected $id;

  /**
   * @param $file
   */
  private function __construct($file)
  {
    $this->file = $file;
    $this->name = \str_random(8);
  }

  /**
   * Iniciar construtor.
   *
   * @return Upload
   */
  public static function make($file): Upload
  {
    return new self($file);
  }

  /**
   * Preparar envio
   *
   * @param int $id
   * @return $this
   */
  public function prepare(int $id, $folder = null, $sizes = null)
  {
    // Id blog
    $this->id = $id;

    //
    $this->folder = $folder ?? $this->folder;

    //
    $this->sizes = $sizes ?? $this->sizes;

    // processar tarefas
    $this->preparePipeThumbs();

    return $this;
  }

  /**
   * Retornar lista com nome de arquivos
   *
   * @return array
   */
  public function getSizesFilename(): array
  {
    $names = [];

    foreach ($this->sizes as $size) {
      $names[$size] = $this->replaceName("{$this->folder}/:id/{$this->name}/w_{$size}.webp");
    }

    return $names;
  }

  /**
   * Obter nome do caminho relativo.
   *
   * @return string
   */
  public function getPath(): string
  {
    return $this->replaceName("{$this->folder}/:id/{$this->name}");
  }

  /**
   * Formatar nome
   *
   * @return string
   */
  public function replaceName($value)
  {
    return str_replace(':id', $this->id, $value);
  }

  /**
   * Montar imagens de acordo com o tamanho definido.
   *
   * @return void
   */
  public function preparePipeThumbs(): void
  {
    foreach ($this->sizes as $size) {
      //
      $image = ImageManagerStatic::make($this->file);

      if ($size !== 'original') {
        //
        // Redimensionar
        //
        $image->resize($size, null, function ($constrait) {
          $constrait->aspectRatio();
          $constrait->upSize();
        });
      }

      //
      $this->pipes[$size] = [
        'filename' => $this->replaceName("{$this->folder}/:id/{$this->name}/w_{$size}.webp"),
        'buffer' => base64_encode($image->encode('webp', 100))
      ];
    }
  }

  /**
   * Empilhar
   *
   * @return void
   */
  public function dispatchNow()
  {
    foreach ($this->pipes as $pipe) {
      //
      //
      //
      self::drive()->put($pipe['filename'], base64_decode($pipe['buffer']), 'public');
    }
  }

  /**
   * Reverter operação de envio
   *
   * @return void
   */
  public function revert(): void
  {
    self::drive()->deleteDirectory($this->getPath());
  }

  /**
   * Remover diretorio.
   *
   * @return void
   */
  public function dropFolder(): void
  {
    $path = $this->folder . '/' . $this->id;

    $drive = self::drive();

    if (is_dir($drive->isDirectory($path))) {
      //
      $drive->deleteDirectory($path);
    }
  }

  /**
   * Obtem instancia do drive utilizado na operação.
   *
   * @return Filesystem
   */
  public static function drive()
  {
    return app('filesystem');
  }
}
