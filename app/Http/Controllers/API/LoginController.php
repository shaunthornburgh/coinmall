<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class LoginController extends BaseController
{
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $auth = Auth::user()->with('coins')->first();;
            $success['token'] =  $auth->createToken('LaravelSanctumAuth')->plainTextToken;
            $success['name'] =  $auth->name;
            $success['coins'] = $auth->coins;

            return $this->handleResponse($success, 'User logged-in!');
        } else {
            return $this->handleError('Unauthorised.', ['error'=>'Unauthorised']);
        }
    }

    public function logout(Request $request)
    {
        auth('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return $this->handleResponse(null, ['message' => 'logged out']);
    }

    public function me()
    {
        if (Auth::user()) {
            $auth = Auth::user()->with('coins')->first();
        }

        $success['id'] =  $auth->id;
        $success['name'] =  $auth->name;
        $success['coins'] = $auth->coins;

        return $this->handleResponse($success, 'Current user');
    }
}
