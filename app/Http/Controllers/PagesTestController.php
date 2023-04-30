<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesTestController extends Controller
{
    public function firstpage()
    {
        return Inertia::render('FirstPage');
        // return inertia('Test/FirstPage');
    }
    public function secondpage()
    {
        return inertia('Test/SecondPage');
    }
}
