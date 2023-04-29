<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesTestController extends Controller
{
    public function firstpage(){
        return inertia('Test/FirstPage');
    }
    public function secondpage(){
        return inertia('Test/SecondPage');
    }
}
