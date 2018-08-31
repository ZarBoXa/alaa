<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('users/json/{id}', function ($id) {
  $user = App\User::find($id);
  if ($user) {
    return compact('user');
  }
  return response()->json(['error' => 'This user is not exist'], 404);
});

Route::post('users/create', function (Request $request) {
  return Request::all();
});



Route::get('/', function () {
  return view('app');
});

Route::get('{any}', function ($any) {
  return view('app');
})->where('any', '.*');
