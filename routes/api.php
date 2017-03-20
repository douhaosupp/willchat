<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// 微信消息路由
Route::match(['post', 'get'], 'wechat/{token}', 'ServerController@serve');

// 支付异步回调
Route::post('order-notify', 'OrderNotifyController@notify');

Route::group(['prefix' => 'user', 'namespace' => 'Api'], function () {
    // Login and Register
    Route::post('/login', 'AuthController@authenticate');
    Route::post('/register', 'AuthController@register');

     // 文章
    Route::get('/post', 'PostController@lists');
    Route::get('/post/{id}', 'PostController@detail');

    Route::group(['middleware' => ['jwt.auth', 'jwt.refresh']], function () {
        Route::post('/update-password', 'AuthController@updatePassword');
        Route::get('/current-user', 'AuthController@getAuthenticatedUser');
        Route::post('/user/avatar', 'UserController@avatar');

         // 公众号管理接口
        Route::get('/account/lists', 'AccountController@lists');
        Route::get('/account/show/{id}', 'AccountController@show');
        Route::post('/account/store', 'AccountController@store');

         // 粉丝管理
        Route::get('/fans/lists', 'FansController@lists');
        Route::post('/fans/sync', 'FansController@syncFromWechatServer');

        // 回复管理
        Route::get('/reply/default', 'ReplyController@getDefaultReply');
        Route::get('/reply/subscribe', 'ReplyController@getSubscribeReply');
        Route::post('/reply/store', 'ReplyController@store');
        Route::get('/reply/lists', 'ReplyController@getLists');

        // 二维码管理
        Route::get('/qrcode/lists', 'QrcodeController@lists');

         // 菜单管理
        Route::get('/menu/lists', 'MenuController@lists');
        Route::post('/menu/store', 'MenuController@store');
        Route::post('/menu/sync', 'MenuController@sync');

         // 帮助文档
        Route::get('/document/lists', 'PostController@lists');
        Route::get('/document/show/{id}', 'PostController@show');
    });
});
