<?php

$name=$_POST['user-name'];
$phone=$_POST['user-phone'];
$adres=$_POST['user-adres'];
$home=$_POST['user-home'];
$fraction=$_POST['user-fraction'];
$apartment=$_POST['user-apartment'];
$floor=$_POST['user-floor'];
$comment=$_POST['user-comment'];
$surender=$_POST['user-surender'];
$surender=isset($surender)?'нет':'да';
$pay=$_POST['pay-card'];
$pay=isset($pay)?'нет':'да';
$disturb=$_POST['dont-disturb'];
$disturb=isset($disturb)? 'нет':'да';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
        <!DOCTYPE html>
        <<html > 
        <head>
            <title>заявка</title>
        </head>
        <body>
          <h2>Заказ</h2>
            <ul>
             <li>Имя:'.$name.'</li>
             <li> Телефон:'.$phone.'</li>
             <li> Улица:'.$adres.'</li>
             <li> Дом:'.$home.'</li>
             <li>Корпус:'.$fraction.'</li>
             <li>Квартира:'.$apartment.'</li>
             <li> Этаж:'.$floor.'</li>
             <li>Коментарий:'.$comment.' </li>
             <li>Потребуеться сдача:'.$surender.'</li>
             <li> Оплата по карте:'.$pay.'</li>
             <li>Не перезванивать:'.$disturb.'</li>
           </ul>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('stepanovnikolaj30@gmail.com', 'Заказ', $mail_message, $headers);

  



    $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data);
?>


