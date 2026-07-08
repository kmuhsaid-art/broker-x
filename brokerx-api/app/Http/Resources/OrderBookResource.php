<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderBookResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [

            'price' => $this->price,

            'quantity' => $this->remaining_quantity,

            'total' => bcmul(

                $this->price,

                $this->remaining_quantity,

                8

            ),

        ];
    }
}