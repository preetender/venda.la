<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   *
   * @return bool
   */
  public function authorize()
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array
   */
  public function rules()
  {
    return [
      'name' => 'required',
      'description' => 'nullable',
      'kit' => 'boolean',
      'images.*' => 'nullable|image|between:1,5000',
      'children.*' => [
        'nullable',
        // custom rule
      ],
      'category_id' => 'required',
      'price' => 'required|numeric'
    ];
  }
}
