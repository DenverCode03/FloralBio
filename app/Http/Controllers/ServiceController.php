<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function programme_neriah() {
        return inertia('Services/Neriah');
    }

    // detox
    public function programme_detox() {
        return inertia('Services/Detox');
    }

    // prostate
    public function programme_prostate() {
        return inertia('Services/Prostate');
    }

    // ferti
    public function programme_ferti() {
        return inertia('Services/Ferti');
    }
}
