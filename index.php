<!doctype html>

<html lang="en">
<head>
    <title><!-- Insert your title here --></title>
    <link rel="stylesheet" href="_/css/style.css" />
</head>
<body>
    <button class="stop">STOP</button>
    <br />
    Port: <input type="text" id="port" />
    <br />
    Starboard: <input type="text" id="starboard" />
    <div class="moveme ">
        <div class="arrow"></div>
    </div>
    <div class="target"></div>
    <script src="_/js/script.js"></script>
    <?php
    $url = "http" . (($_SERVER['SERVER_PORT'] == 443) ? "s://" : "://") . $_SERVER['HTTP_HOST'];
    ?>
    <script src="<?php echo $url ?>:35729/livereload.js"></script>
    <!--script src="http://localhost:35729/livereload.js"></script-->
</body>
</html>
