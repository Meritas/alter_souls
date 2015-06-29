<?php

namespace Alterd\Controller\Api;

use Alterd\Entity\Api\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class UsersController extends Controller {
    /**
     * @Route("/app/example", name="homepage")
     */

    public function createUserAction(Request $request){

        if($request->getMethod() == 'POST'){

            $postData = json_decode($request->request->get('post'), true);
        }
        else{
            return new Response('No data');
        }

        $userEntity = new User();

        $userEntity->setUsername($postData['username']);
        $userEntity->setPassword(md5($postData['password']));
        $userEntity->setEmail($postData['email']);

        $em = $this->getDoctrine()->getManager();

        $em->persist($userEntity);
        $em->flush();

        return new Response('Character created!');


        /*$userRecord = new User();

        $userRecord->setUsername('Admin');
        $userRecord->setPassword(md5('123456'));
        $userRecord->setEmail('test@alterd.com');

        $em = $this->getDoctrine()->getManager();

        $em->persist($userRecord);
        $em->flush();

        return new Response('Created user id: ' . $userRecord->getId());*/
    }
}


