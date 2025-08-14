<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix("/services")->controller(ServiceController::class)->group(function() {
    Route::get('/programme_neriah', 'programme_neriah')->name('programme_neriah');
    Route::get('/programme_detox', 'programme_detox')->name('programme_detox');
    Route::get('/programme_prostate', 'programme_prostate')->name('programme_prostate');
    Route::get('/programme_ferti', 'programme_ferti')->name('programme_ferti');
});

// contact
Route::get('/contact', [ContactController::class, 'contact'])->name('contact');

require __DIR__.'/auth.php';
