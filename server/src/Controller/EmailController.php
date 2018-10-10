<?php
namespace App\Controller;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations as FOSRest;
use App\Entity\Article;
use FOS\RestBundle\Controller\FOSRestController;

class EmailController extends FOSRestController
{
    /**
     * @FOSRest\Post("/email")
     *
     * @return array
     */
    public function sendEmail(Request $request, \Swift_Mailer $mailer)
    {
        $data = $this->get('jms_serializer')->deserialize($request->getContent(), 'array', 'json');

        $message = (new \Swift_Message("Email contact funga"))
            ->setFrom($data["email"])
            ->setTo($this->getParameter('user_email'))
            ->setBody(
                $this->renderView(
                    // templates/emails/registration.html.twig
                    'emails/contact.html.twig',
                    [
                        'message' => $data["message"],
                        'name' => $data["name"],
                        'email' => $data["email"]
                    ]
                ),
                'text/html'
            )
        ;

        $mailer->send($message);

        
        return View::create('ok', Response::HTTP_OK , []);
    }

}