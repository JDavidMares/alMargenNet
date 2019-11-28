<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminController extends AbstractController
{
    public function newPublish()
    {
        return $this->render('views/newPost.html.twig');
    }


    public function variableDemo($myOtherVariable, $myVariable) {
      dd($myVariable, $myOtherVariable);
    }
}
