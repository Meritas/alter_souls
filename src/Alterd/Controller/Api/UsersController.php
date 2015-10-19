<?php

namespace Alterd\Controller\Api;

use Alterd\Entity\Api\User;
use Alterd\Entity\CharacterSheet;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
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

        //CREATE USER
        $user = new User();

        $user->setUsername(strtolower($postData['username']));
        $user->setPassword(md5($postData['password']));
        $user->setEmail($postData['email']);

        $em = $this->getDoctrine()->getManager();

        $em->persist($user);
        $em->flush();

        //CREATE CHARACTER SHEET

        $characterSheet = new CharacterSheet();

        $characterSheet->setUid($user->getId());
        $characterSheet->setCharacterName($postData['characterName']);
        $characterSheet->setCharacterFatherName($postData['fatherName']);

        $em->persist($characterSheet);
        $em->flush();

        return new Response('Character created!');
    }

    public function loginUserAction(Request $request){
        if($request->getMethod() == 'POST'){
            $getData = json_decode($request->request->get('post'), true);
            $repository = $this->getDoctrine()
                ->getRepository('AlterdBundle:Api\User');
            $fetchedData = $repository->findOneByUsername(strtolower($getData['username']));
            if(($fetchedData !== NULL) && ($fetchedData->getPassword() == md5($getData['password']))){
                return new JsonResponse(array(
                        'response_status'   => 1,
                        'ui_message'        => 'Successful Login'
                    )
                );
            }
            else{
                return new JsonResponse(array(
                        'response_status'   => 2,
                        'ui_message'        => 'Wrong user or password'
                    )
                );
            }
        }
        else{
            return new JsonResponse(array(
                    'response_status'   => 0,
                    'ui_message'        => 'No data'
                )
            );
        }
    }
}


