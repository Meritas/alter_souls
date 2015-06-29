<?php

namespace Alterd\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class ScreenController extends Controller {
    /**
     * @Route("/app/example", name="homepage")
     */

    public function gameScreenAction(){
        return $this->render('game/screen.html.twig', array());
    }

    public function startAction(){

        //return $this->render('default/index.html.twig', array('title'=> 'New Start'));
        return new JsonResponse(array(
            'data'=>
                array('message'=> 'Welcome, hero!')));
    }
}
