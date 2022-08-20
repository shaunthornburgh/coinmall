<?php

namespace App\Http\Controllers\API;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller as Controller;

class BaseController extends Controller
{
    /**
     * @param $result
     * @param $msg
     * @return JsonResponse
     */
    public function handleResponse($result, $message) : JsonResponse
    {
        $response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];

        return response()->json($response, 200);
    }

    /**
     * @param $error
     * @param array $errorMsg
     * @param int $code
     * @return JsonResponse
     */
    public function handleError($error, array $errorMsg = [], int $code = 404) : JsonResponse
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];
        if(!empty($errorMsg)){
            $response['data'] = $errorMsg;
        }
        return response()->json($response, $code);
    }
}
