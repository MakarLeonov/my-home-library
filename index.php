<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet">        
    <link rel="stylesheet" href="css/style.css">
    <title>Моя библиотека</title>
</head>
<body>
    <p class="myLib">Моя библиотека</p>
    <div class="main">
        <?php 
            $link = mysqli_connect("localhost", "root", "",'mylibrary');
            $sql = 'SELECT * from booklist';
            $result = mysqli_query($link,$sql);
                                        foreach ($result as $list) {  ?>
        <div class="item-close">
            <div class="number"><?= $list['id'] ?>.</div>
            <div class="title"><?= $list['name'] ?></div>
            <div class="author"><?= $list['author'] ?></div>
            <div class="stars">
                <div class="strok"><?= $list['stars'] ?></div>
            </div>
            
            <span class="item-info">
                <p><?= $list['comment'] ?></p>
                <p class="dop-info">
                    <div class="status-info">Статус: моя книга</div>
                    <div class="date-info"><?= $list['date'] ?></div>
                </p>
            </span>
        </div>

        <?}?>

    </div>

    <div class="addBook">
        Добавить новую книгу
    </div>

    <?php
  //Если переменная Name передана
  if (isset($_POST["name"])) {
    //Вставляем данные, подставляя их в запрос
    $sql2 = mysqli_query($link, "INSERT INTO `booklist` (`name`, `author`) VALUES ('{$_POST['name']}', '{$_POST['author']}')");
    //Если вставка прошла успешно
    if ($sql2) {
      echo '<p>Данные успешно добавлены в таблицу.</p>';
    } else {
      echo '<p>Произошла ошибка: ' . mysqli_error($link) . '</p>';
    }
  }
?>

    <div class="modal-window">
        <div class="modal-window-content">
            <h2 class="window-title">Добавить новую книгу</h2>
            <div class="close">&#215;</div>
           
            <form method="GET" action="">
            <div class="window-form">
                <!-- Название книги: <input type="text"><br>
                Название книги: <input type="text"><br>
                Название книги: <input type="text"><br> -->
                <div class="a">
                    Название книги: <input type="text" name="name">
                </div>
                <div class="a aa">
                    Автор книги: <input type="text" name="author">
                </div>
                <div class="a">
                    Название книги: <input type="date" name="date">
                </div>
                <!-- <div class="b">
                    Статус:
                    <div class="status">
                        <input type="radio" name="radio" value="Моя книга"> Моя книга <br>
                        <input type="radio" name="radio" value="Одолжил книгу"> Одолжил книгу <br>
                        <input type="radio" name="radio" value="Одолжил у кого-то"> Одолжил у кого-то
                    </div>
                </div> -->
                <div class="c">
                    <div class="stars-title">Моя оценка:</div> 
                    <div class="stars">
                        <div class="star star1">🖤</div>
                        <div class="star star2">🖤</div>
                        <div class="star star3">🖤</div>
                        <div class="star star4">🖤</div>
                        <div class="star star5">🖤</div>
                        <input type="text" name="stars" class="hidestars" value="">
                    </div>
                </div>
                <div class="d">
                    <div>Мой комментарий:</div>
                    <textarea name="comment" class="textarea" cols="57" rows="17"></textarea>
                </div>
                <input type="submit" name="button" class="btn" value="Добавить эту книгу">
            </div>
            </form>

            <?php
                if(isset($_GET['button'])) {
                    $name = $_GET['name'];
                    $author = $_GET['author'];
                    $date = $_GET['date'];
                    $stars = $_GET['stars'];
                    $comment = $_GET['comment'];
                    
                    $link = mysqli_connect("localhost", "root", "",'mylibrary');
                    
                    if (!$link) {
                        echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
                        exit;
                    }

                    
                    $query = "INSERT INTO `booklist` (`name`, `author`, `date`, `stars`, `comment`) VALUES ('$name', '$author', '$date', '$stars', '$comment')";
                    $result = mysqli_query($link,$query);

                    if($result == false){
                        print_r(mysqli_error($link));
                    }
                    echo'<script>window.location.href="/"</script>';
                }
            ?>

        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>

<!-- INSERT INTO `booklist` (`id`, `name`, `author`, `date`, `stars`, `comment`) VALUES (NULL, 'Морфий', 'М.А. Булгаков', '2022-05-05', '🖤 🖤 🖤 🖤 🖤', 'Хорошая книга, да!'); -->