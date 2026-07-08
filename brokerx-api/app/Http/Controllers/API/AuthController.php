<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Resources\UserResource;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([

            'name' => $request->name,

            'email' => $request->email,

            'password' => bcrypt($request->password),

        ]);

        $user->wallets()->create([
            'currency' => 'USDT',
            'balance' => 10000,
            'locked_balance' => 0,
        ]);

        $user->wallets()->create([
            'currency' => 'BTC',
            'balance' => 0,
            'locked_balance' => 0,
        ]);

        $user->wallets()->create([
            'currency' => 'ETH',
            'balance' => 0,
            'locked_balance' => 0,
        ]);

        $user->wallets()->create([
            'currency' => 'XAU',
            'balance' => 0,
            'locked_balance' => 0,
        ]);

        $token = $user
            ->createToken('brokerx')
            ->plainTextToken;

        return response()->json([

            'success' => true,

            'token' => $token,

            'user' => new UserResource($user),

        ],201);
    }

    public function login(LoginRequest $request)
    {
        $user = User::where(

            'email',

            $request->email

        )->first();

        if(
            !$user ||
            !Hash::check(
                $request->password,
                $user->password
            )
        ){
            return response()->json([

                'success'=>false,

                'message'=>'Invalid credentials'

            ],401);
        }

        $token = $user
            ->createToken('brokerx')
            ->plainTextToken;

        return response()->json([

            'success'=>true,

            'token'=>$token,

            'user'=>new UserResource($user),

        ]);
    }

    public function profile(Request $request)
    {
        return new UserResource(

            $request->user()

        );
    }

    public function logout(Request $request)
    {
        $request
            ->user()
            ->currentAccessToken()
            ->delete();

        return response()->json([

            'success'=>true,

            'message'=>'Logout success'

        ]);
    }
}