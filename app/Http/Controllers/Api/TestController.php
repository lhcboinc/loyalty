<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Devices;
use App\Notifications\WelcomeNotification;
use ExponentPhpSDK\Expo;
use Illuminate\Http\Request;

class TestController extends Controller
{
    /**
     * @api {post} /api/test Test
     * @apiName Test
     * @apiGroup TestApi
     */
    public function test()
    {
        $device = Devices::where('id', '=', 2)->first();
        $device->notify(new WelcomeNotification("Hello Title", "Hello Body"));
        return response()->json([]);
    }
}