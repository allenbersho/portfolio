// Exercise data with embedded code content
const exerciseData = {
    ex1: {
        name: 'Exercise 1',
        examples: {
            example1: {
                name: 'chess Sample',
                url: 'ex/chess.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chessboard</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f0f0;
      border: 1px solid black;
    }
    .chessboard-container {
      position: relative;
      width: 400px;
      height: 400px;
      border: 1px solid brown;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      height: 100%;
    }
    td {
      width: 50px;
      height: 50px;
    }
    .white {
      background-color: rgb(245, 196, 141);
    }
    .black {
      background-color: rgb(143, 72, 14);
    }
    .piece {
      position: absolute;
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-family: Arial, sans-serif;
      pointer-events: none; 
    }
  </style>
</head>
<body>
  <div class="chessboard-container">
    <table>
      
      <tr>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
      </tr>
      <tr>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
      </tr>
      <tr>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
      </tr>
      <tr>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
      </tr>
      <tr>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
      </tr>
      <tr>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
      </tr>
      <tr>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
      </tr>
      <tr>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
        <td class="white"></td>
        <td class="black"></td>
      </tr>
    </table>


    <div class="piece" style="top: 0; left: 0;">&#9820;</div> 
    <div class="piece" style="top: 0; left: 50px;">&#9822;</div> 
    <div class="piece" style="top: 0; left: 100px;">&#9821;</div> 
    <div class="piece" style="top: 0; left: 150px;">&#9819;</div> 
    <div class="piece" style="top: 0; left: 200px;">&#9818;</div>
    <div class="piece" style="top: 0; left: 250px;">&#9821;</div>
    <div class="piece" style="top: 0; left: 300px;">&#9822;</div>
    <div class="piece" style="top: 0; left: 350px;">&#9820;</div>
    
    <div class="piece" style="top: 50px; left: 0;">&#9823;</div>
    <div class="piece" style="top: 50px; left: 50px;">&#9823;</div>
    <div class="piece" style="top: 50px; left: 100px;">&#9823;</div>
    <div class="piece" style="top: 50px; left: 150px;">&#9823;</div>
    <div class="piece" style="top: 50px; left: 200px;">&#9823;</div>
    <div class="piece" style="top: 50px; left: 250px;">&#9823;</div>
    <div class="piece" style="top: 50px; left: 300px;">&#9823;</div>
    <div class="piece" style="top: 50px; left: 350px;">&#9823;</div>
    
    <div class="piece" style="top: 300px; left: 0;">&#9817;</div>
    <div class="piece" style="top: 300px; left: 50px;">&#9817;</div>
    <div class="piece" style="top: 300px; left: 100px;">&#9817;</div>
    <div class="piece" style="top: 300px; left: 150px;">&#9817;</div>
    <div class="piece" style="top: 300px; left: 200px;">&#9817;</div>
    <div class="piece" style="top: 300px; left: 250px;">&#9817;</div>
    <div class="piece" style="top: 300px; left: 300px;">&#9817;</div>
    <div class="piece" style="top: 300px; left: 350px;">&#9817;</div>
    
    <div class="piece" style="top: 350px; left: 0;">&#9814;</div>
    <div class="piece" style="top: 350px; left: 50px;">&#9816;</div>
    <div class="piece" style="top: 350px; left: 100px;">&#9815;</div>
    <div class="piece" style="top: 350px; left: 150px;">&#9813;</div>
    <div class="piece" style="top: 350px; left: 200px;">&#9812;</div>
    <div class="piece" style="top: 350px; left: 250px;">&#9815;</div>
    <div class="piece" style="top: 350px; left: 300px;">&#9816;</div>
    <div class="piece" style="top: 350px; left: 350px;">&#9814;</div>
  </div>
</body>
</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example2: {
                name: 'Coffeeshop Sample',
                url: 'ex/coffeeshop.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Meow+Script&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Meow+Script&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            color: #494039;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .container {
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            filter: blur(5px);
            position: fixed;
            top: 0;
            left: 0;
            
        }

        .contain {
            border: 2px solid #DACABD;
            background-color: #DACABD;
            flex: 1;
        }

        .contains {
            border: 2px solid #494039;
            background-color: #494039;
            flex: 1;
        }

        .center-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 900px;
            height: auto;
            min-height: 60%;
            background-image: url("coffee.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            border-radius: 10px;
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
        }

        .navbar {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 15px;
            padding: 10px;
        }

        .logoport {
            flex: 1;
            min-width: 200px;
            display: flex;
            gap: 50px;
        }

        .nav-links {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            align-items: center;
        }

        .nav-link {
            color: #494039;
            text-decoration: none;
            font-size: 1rem;

        }

        .logo {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
        }

        .logos {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .search {
            border-radius: 43px;
            padding: 8px 15px;
            border: 2px solid #49403941;
            width: 100%;
            max-width: 200px;
            font-size: 1rem;
        }

        .menu {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 20px;
        }

        .menu-item {
            flex: 1;
            min-width: 200px;
            padding: 10px;
            color: #44240a;
            border-radius: 10px;
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
            overflow: hidden;
        }

        .menu-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
        }

        .theme {
            display: flex;
            justify-content: flex-end;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
        }

        .theme-moto {
            color: #352010;
            display: flex;
            flex-direction: column;
            background-color: rgba(255, 255, 255, 0);
            border-radius: 10px;
            padding: 10px;
            gap: 5px;
            justify-content: flex-end;
            font-size: 1rem;
            font-weight: bold;
            text-align: right;
            padding: 30px
        }

        .button {
            display: flex;
            justify-content: flex-end;
            /* margin-right: 177px; */
        }

        button {
            padding: 10px 20px;
            border: none;
            color: #494039;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 10px;
            cursor: pointer;
        }

        .moto {
            font-size: 2rem;
            font-family: 'Meow Script', cursive;
        }
        .moto2 {
            font-size: 1.5rem;
            font-family: 'Audiowide', cursive;
        }
        button:hover {
            background-color: #DACABD;
            /* border:2px solid #44240a ; */
        }
        .shopname {
            font-size: 2rem;
            font-family: 'Audiowide', cursive;
            background-color: #dacabd65;
            color: #2c1605;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="contain"></div>
        <div class="contains"></div>
        <div class="contain"></div>
    </div>
    <div class="center-box">
        <nav class="navbar">
            <div class="logoport">
                <div class="logo">
                    <img src="logo.jpg" alt="logo" class="logos">
                </div>
                <h1 class="shopname">CAFEAN</h1>
            </div>
            <div class="nav-links">
                <a href="" class="nav-link">specialty</a>
                <a href="" class="nav-link">reserve</a>
                <a href="" class="nav-link">trending</a>
                <a href="" class="nav-link">contact</a>
            </div>
            <input class="search" type="text" placeholder="Search">
        </nav>
        <div class="theme">
            <div class="theme-moto">
                <div class="moto">Black coffee is awesome</div>
                <div class="moto2"> TIME TO DISCOVER COFFEE HOUSE</div>
                <div class="button"> <button>Discover more</button></div>
            </div>
        </div>
        <div class="menu">
            <div class="menu-item">
                <img src="lop.jpg" alt="coffee1" class="menu-image">
                <h2 class="menu-title" style="color:rgb(102, 74, 61);">Maccacino Plus</h2>
                <h6>Add to order +</h6>
            </div>
            <div class="menu-item">
                <img src="cafe.jpg" alt="coffee1" class="menu-image">
                <h2 class="menu-title">Expresso</h2>
                <h6>Add to order +</h6>

            </div>
            <div class="menu-item">
                <img src="cofe.jpg" alt="coffee1" class="menu-image">
                <h2 class="menu-title">Black Ivory Coffee</h2>
                <h6>Add to order +</h6>
            </div>
        </div>
</body>

</html> `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example3: {
                name: 'animation',
                url: 'ex/animation.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minecraft Theme</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            font-family: 'Courier New', Courier, monospace;
        }

        .container {
            position: relative;
            background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce539041-b1c9-46cf-b883-ea5b26701d21/d8sp8p9-cc8cadcc-773f-471a-aa59-44b980414bbe.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NlNTM5MDQxLWIxYzktNDZjZi1iODgzLWVhNWIyNjcwMWQyMVwvZDhzcDhwOS1jYzhjYWRjYy03NzNmLTQ3MWEtYWE1OS00NGI5ODA0MTRiYmUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XFRjfUtIVOLOyyDlVf11fvh-ITFB792wPc5_ExdUpzs');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            height: 100vh;
            width: 100vw;
        }

        .grass {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 150px;
            background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bba97ad-76c0-4367-b694-9c9380f2656c/df8r26t-21e68e29-b974-44fd-96a4-d03a5475e50b.jpg/v1/fill/w_1280,h_1280,q_75,strp/minecraft_grass_block_texture_by_psddude_df8r26t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzhiYmE5N2FkLTc2YzAtNDM2Ny1iNjk0LTljOTM4MGYyNjU2Y1wvZGY4cjI2dC0yMWU2OGUyOS1iOTc0LTQ0ZmQtOTZhNC1kMDNhNTQ3NWU1MGIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5EcLotbgsNR5MYn5b3k0xjW1JbWxk_12JvBOHOUrrAs');
            background-position: 10% 25%;
        }

        .title {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            font-size: 3rem;
            color: white;
            text-shadow: 2px 2px 4px black;
        }

        .block {
            position: absolute;
            bottom: 250px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: auto;
        }
    </style>
</head>

<body>
    <div class="container">
        <marquee behavior="scroll" direction="left">
            <img src="clouds.png" alt="Character" class="cloud">
            <img style="margin-top: 33px;" src="minecraft-bee.gif" alt="">
            <img style="margin-bottom: 73px;" src="minecraft-bee.gif" alt="">
            <img style="margin-top: 12px; " src="minecraft-bee.gif" alt="">
            <img style="margin-top: 33px;" src="minecraft-bee.gif" alt="">
            <img style="margin-bottom: 73px;" src="minecraft-bee.gif" alt="">
            <img style="margin-top: 12px; " src="minecraft-bee.gif" alt="">
            </marquee>
        <marquee style="margin-top: 62px;" scrollamount="10" behavior="scroll" direction="left"><img src="chara.gif"
                alt="Cloud" class="character"> <img style="transform: scaleX(-1);" src="fireee-running.gif" alt="">
        </marquee>


        <div class="grass"></div>
    </div>
</body>

</html> `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            }
        }
    },
    ex2: {
        name: 'Exercise 2',
        examples: {
            example1: {
                name: 'login Sample',
                url: 'ex/login.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #000;
            font-family: Arial, sans-serif;
        }

        .center-box {
            width: 70vw;
            height: 70vh;
            background-color: #ffffff00;
            display: flex;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
            overflow: hidden;
        }

        .left, .right {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .left {
            background-color: #91080800;
            color: #fff;
            flex-direction: column;
            text-align: center;
        }

        .right {
            background-color: #f4f4f4;
            flex-direction: column;
            padding: 20px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .left h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .left p {
            font-size: 1rem;
        }

        .right h2 {
            font-size: 2rem;
            margin-bottom: 20px;
        }

        .right form {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .right input {
            margin-bottom: 15px;
            padding: 10px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .right button {
            padding: 10px;
            font-size: 1rem;
            background-color: #000000;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .right button:hover {
            background-color: #000000;
            color: white;
        }

        
    </style>
</head>

<body>
    <div class="center-box">
        <div class="left">
            <h1>Welcome Back!</h1>
            <p>Sign in to access your account.</p>
        </div>
        <div class="right">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Username" required>
                <input type="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</body>

</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example2: {
                name: 'Nav Bar Sample',
                url: 'ex/nav.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Navigation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
        }

        .nav {
            background-color: #333;
            color: white;
            padding: 10px;
            display: flex;
            gap: 40px;
            justify-content: flex-end;
            position: relative;
        }

        .ele {
            padding: 10px;
            position: relative;
        }

        .ele:hover {
            background-color: #555;
            color: rgb(0, 125, 228);
            cursor: pointer;
        }

        .dropdown {
            display: none;
            position: absolute;
            top: 40px;
            left: 0;
            background-color: #444;
            padding: 10px 0;
            border-radius: 4px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }

        .ele:hover .dropdown {
            display:block;
        }

        .dropdown a {
            display: block;
            padding: 10px 20px;
            color: white;
            text-decoration: none;
            white-space: nowrap;
        }

        .dropdown a:hover {
            background-color: #555;
        }

        .bottom {
            background-color: #f4f4f4;
            flex: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="nav">
            <div class="ele">Home</div>
            <div class="ele">
                Services
                <div class="dropdown">
                    <a href="#">Web Design</a>
                    <a href="#">SEO</a>
                    <a href="#">Marketing</a>
                </div>
            </div>
            <div class="ele">About</div>
            <div class="ele">Contact</div>
            <div class="ele">Help</div>
        </div>
        <div class="bottom"></div>
    </div>
</body>
</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example3: {
                name: 'projector screen',
                url: 'ex/projector screen.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dropdown Navigation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
        }

        .nav {
            background-color: #333;
            color: white;
            padding: 10px;
            display: flex;
            gap: 40px;
            justify-content: flex-end;
            position: relative;
        }

        .ele {
            padding: 10px;
            position: relative;
        }

        .ele:hover {
            background-color: #555;
            color: rgb(0, 125, 228);
            cursor: pointer;
        }

        .dropdown {
            display: none;
            position: absolute;
            top: 40px;
            left: 0;
            background-color: #444;
            padding: 10px 0;
            border-radius: 4px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }

        .ele:hover .dropdown {
            display:block;
        }

        .dropdown a {
            display: block;
            padding: 10px 20px;
            color: white;
            text-decoration: none;
            white-space: nowrap;
        }

        .dropdown a:hover {
            background-color: #555;
        }

        .bottom {
            background-color: #f4f4f4;
            flex: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="nav">
            <div class="ele">Home</div>
            <div class="ele">
                Services
                <div class="dropdown">
                    <a href="#">Web Design</a>
                    <a href="#">SEO</a>
                    <a href="#">Marketing</a>
                </div>
            </div>
            <div class="ele">About</div>
            <div class="ele">Contact</div>
            <div class="ele">Help</div>
        </div>
        <div class="bottom"></div>
    </div>
</body>
</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            }
        }
    },
    ex3: {
        name: 'Exercise 3',
        examples: {
            example1: {
                name: 'Cirular Path',
                url: 'ex/circularpath.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            height: 500px;
            width: 500px;
            border: 3px groove black;
            background-color: cyan;
            position: relative;
        }

        .rotate {
            position: absolute;
            height: 100px;
            width: 100px;
            top: 10px;
            left: 10px;
            background-color: rgb(225, 169, 251);
            border-radius:34px;
            animation: rotate 3s linear infinite;

        }

        @keyframes rotate {
            0% {
                transform: rotate(0deg);
            }

            25% {
                transform: rotate(360deg);
                left: 390px;
                top: 10px;
            }

            50% {
                transform: rotate(720deg);
                top: 390px;
                left: 390px;
            }

            75% {
                transform: rotate(1080deg);
                left: 10px;
                top: 390px;
            }

            100% {
                transform: rotate(1440deg);
                top: 10px;
                left: 10px;
            }
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="rotate"></div>
    </div>
</body>

</html> `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example2: {
                name: 'layout ',
                url: 'ex/index.html.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-align: center;
    }
    body{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bolder;
      color: aliceblue;
      background-color: rgb(246, 248, 252);
    }
    .box{
      display: grid;
      grid-template-columns: 2fr 1fr ;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      background-color: rgba(255, 255, 255, 0);
      box-shadow: 0  0 10px rgb(113, 114, 115);
      margin: px;
      gap: 10px;
      height: 700px;
      width: 60%;
    }
    .title{
      grid-column:span 2;
      background-color: rgb(166, 151, 242);
    }
    .nav{
      grid-column:span 2;
      background-color: rgb(233, 97, 142);
    }
    .sidebar{
      grid-row:span 2;
      background-color: lightcoral;
    }
    .article{
      grid-row:span 1;
      background-color: yellowgreen;
    }
    .main{
      grid-row:span 1;
      background-color: lightseagreen;
    }
    .foot{
      grid-column:span 2;
      height: 100px;
      background-color: rgb(116, 191, 237);
    }
    .content{
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-right: 19px;
      align-items: center;
      height: 100%;
    }
    .conts{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      height: 100%;
      margin-left: 20px;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="title" style="border: 2px solid;"><p style="margin-top: 60px;">Web Programming</p></div>
    <div class="nav" style="border: 2px solid;">
      <div class="content">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </div>
    <div class="main" style="border: 2px solid;">
      <div class="conts">
        <div style="font-size: xx-large;">Main Section</div>
        <div>This is the main content of the page</div>
      </div>
    </div>
    <div class="sidebar" style="border: 2px solid;">
      <div class="conts">
        <div style="font-size: xx-large;">Sidebar</div>
        <div style="text-align: left;">This is the sidebar content of the page</div>
      </div>
    </div>
    <div class="article" style="border: 2px solid;">
      <div class="conts">
        <div style="font-size: xx-large;">Article</div>
        <div style="text-align: left;">This is the standalone article related to main content</div>
      </div>
    </div>
    <div class="foot" style="border: 2px solid;">
      <div style="margin-top: 35px;">&copy;Your Company.All rights reserved</div>
    </div>
  </div>
</body>

</html> `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example3: {
                name: 'w3schools sample',
                url: 'ex/w3schools.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>animation practice</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .box {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: lavenderblush;
        }

        .csss {
            width: 100px;
            height: 100px;
            background-color: lightcoral;
            position: relative;
            top: 0;
            left: 0;
            animation: move 8s infinite;
            animation-delay: 2s;
            border-radius: 20px;
        }

        @keyframes move {
            0% {
                background-color: lightcoral;
                left: 0;
                transform: rotate(13deg);
            }

            25% {
                left: 310px;
                transform: rotate(13deg);
            }

            50% {
                left: 400px;
                transform: rotate(0deg);
            }

            60% {
                background-color: rgb(91, 240, 185);
            }

            75% {
                left: 0;
            }

            100% {
                left: 0;
                transform: rotate(-720deg);
            }
        }

        .text {
            font-size: 20px;
            color: white;
            text-align: center;
            padding-top: 40px;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="csss">
            <div class="text">CSS</div>
        </div>
    </div>
</body>

</html> `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            }
        }
    },
    ex4: {
        name: 'Exercise 4',
        examples: {
            example1: {
                name: 'infininte square ',
                url: 'ex/infinitesquare.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rotating Squares</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: white;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
        }

        .squa {
            position: absolute;
            width: 120px;
            height: 120px;
            background-color: blue;
            opacity: 0.8;
        }

        /* Animations with different delays */
        .re1 { animation: rotate 5s linear infinite; }
        .re2 { animation: rotate 5s linear infinite 0.2s; }
        .re3 { animation: rotate 5s linear infinite 0.4s; }
        .re4 { animation: rotate 6s linear infinite 0.6s; }
        .re5 { animation: rotate 6s linear infinite 0.8s; }
        .re6 { animation: rotate 6s linear infinite 1s; }
        .re7 { animation: rotate 7s linear infinite 1.2s; }
        .re8 { animation: rotate 7s linear infinite 1.4s; }

        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="squa re1"></div>
        <div class="squa re2"></div>
        <div class="squa re3"></div>
        <div class="squa re4"></div>
        <div class="squa re5"></div>
        <div class="squa re6"></div>
        <div class="squa re7"></div>
        <div class="squa re8"></div>
    </div>
</body>
</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example2: {
                name: 'flames',
                url: 'ex/flames.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flames</title>
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: pink;
            height: 100vh;
        }
        .container {
            width: 50%;
            margin: 0 auto;
            text-align: center;
        }
        input {
            padding: 5px;
            width: 50%;
        }
        button {
            padding: 5px 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>FLAMES</h1>
            <label for="name1">Name 1:</label>
            <input type="text" name="name1" id="name1" required>
            <br><br>
            <label for="name2">Name 2:</label>
            <input type="text" name="name2" id="name2" required>
            <br><br>
            <button type="submit">Calculate</button>
            <div>
                <h2>Result:</h2>
                <p id="result"></p>
            </div>
    </div>
</body>
<script>
            document.querySelector('button').addEventListener('click', function() {
                var name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
                var name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');
                
                if (name1 === '' || name2 === '') {
                    document.getElementById('result').innerText = 'Please enter both names.';
                    return;
                }

                for (var i = 0; i < name1.length; i++) {
                    var char = name1[i];
                    if (name2.includes(char)) {
                        name1 = name1.replace(char, '');
                        name2 = name2.replace(char, '');
                        i--; 
                    }
                }

                var count = name1.length + name2.length;

                var flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
                var index = 0;

                while (flames.length > 1) {
                    index = (index + count - 1) % flames.length;
                    flames.splice(index, 1);
                }

                document.getElementById('result').innerText = flames[0];
    });
</script>
</html> `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example3: {
                name: 'guess the number',
                url: 'ex/guess.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess The Number</title>
</head>
<style>
    body {
        background-color: rgb(6, 19, 49);
        height: 100vh;
        margin: 0;
    }

    .container {
        width: 50%;
        text-align: center;
        height: 100vh;
        width: 100vw;
        background-color: rgba(255, 255, 255, 0.215);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    input {
        padding: 5px;
        width: 50%;
        margin-top: 6px;
    }

    .button {
        padding: 5px 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        display: inline-block;
    }

    .title {
        font-size: 30px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color: rgb(185, 228, 255);
    }

    .top {
        padding: 20px;
        display: flex;
    }
    button {
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>

<body>
    <div class="container">
        <div class="top">
            <div class="title"> Guess The Number</div>
            <div class="guess">
                <input type="number" id="num" min="1" max="10">
            </div>
        </div>
        <br>
        <div class="bottom">
            <div class="button">
                <button>Guess</button>
            </div>
            <div class="result"></div>
        </div>
    </div>
</body>
<script>
    var result = document.querySelector(".result");
    var num = document.querySelector("#num").value;
    document.querySelector("button").addEventListener("click", function () {
        var number = Math.floor(Math.random() * 10) + 1; 
        if (num == number) {
            result.innerHTML = "Congratulations! You have guessed the correct number";
        } else {
            result.innerHTML = "Sorry! The correct number is " + number;
        }
    });
</script>

</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            }
        }
    },
    ex5: {
        name: 'Exercise 5',
        examples: {
            example1: {
                name: 'to do list',
                url: 'ex/todolist.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #e4f6bb;
            font-family: Arial, sans-serif;
        }

        .container {
            width: 400px;
            display: flex;
            max-height: 400px;
            flex-direction: column;
            align-items: center;
            background-color: #ffffff;
            border-radius: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            
        }
        .item{            
            overflow-y: scroll;
        }
        .item::-webkit-scrollbar{
            display: none;
        }
        .item{
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        h1 {
            margin-bottom: 20px;
            color: #035416;
        }

        .todo {
            width: 100%;
            display: flex;
            margin-bottom: 20px;
        }

        #input {
            flex: 1;
            height: 40px;
            border-radius: 8px 0 0 8px;
            padding: 10px;
            border: 1px solid #ddd;
            font-size: 16px;
            background-color: #f9f9f9;
        }

        .submit {
            width: 100px;
            border-radius: 0 8px 8px 0;
            background-color: #dc2020;
            color: white;
            border: none;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .submit:hover {
            background-color: #910808;
        }

        .item ul {
            width: 100%;
            padding: 0;
            list-style: none;
        }

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f9f9f9;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            transition: box-shadow 0.3s;
        }

        li:hover {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .delete {
            background-color: transparent;
            color: #dc3545;
            border: none;
            font-size: 20px;
            cursor: pointer;
            transition: color 0.3s;
        }

        .delete:hover {
            color: #a71d2a;
        }

        .task-content {
            flex: 1;
            margin-left: 10px;
        }

        .completed {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>To-Do List</h1>
        <div class="todo">
            <input type="text" id="input" placeholder="Enter your task">
            <button class="submit">Add</button>
        </div>
        <div class="item">
            <ul id="do"></ul>
        </div>
    </div>
    <script>
        const input = document.getElementById('input');
        const submit = document.querySelector('.submit');
        const doList = document.getElementById('do');

        submit.addEventListener("click", () => {
            if (input.value.trim() === '') {
                alert('Please enter a task.');
                return;
            }

            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            const taskContent = document.createElement('span');
            const deleteButton = document.createElement('button');

            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    taskContent.classList.add('completed');
                } else {
                    taskContent.classList.remove('completed');
                }
            });

            taskContent.textContent = input.value;
            taskContent.classList.add('task-content');

            deleteButton.innerHTML = '&times;';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', () => {
                listItem.remove();
            });

            listItem.appendChild(checkbox);
            listItem.appendChild(taskContent);
            listItem.appendChild(deleteButton);
            doList.appendChild(listItem);
            input.value = '';
        });

        input.addEventListener('keypress', (event) => {
            console.log(event);
            if (event.key === 'Enter') {
                submit.click();
            }
        });
    </script>
</body>

</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example2: {
                name: 'traffic light',
                url: 'ex/traffic.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0;
            height: 100vh;
            background-color: azure;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        .box {
            height: 700px;
            width: 250px;
            box-shadow: 0 0 15px black;
            border-radius: 200px;
            background-color: black;
            border-end-start-radius: 100px;
            border-end-end-radius: 100px;
        }
        .red{
            height: 200px;
            width: 200px;
            border-radius: 100px;
            background-color: rgb(103, 99, 99);
            margin: 20px auto;
        }   
        .yellow{
            height: 200px;
            width: 200px;
            border-radius: 100px;
            background-color: rgb(90, 90, 84);
            margin: 20px auto;
        }
        .green{
            height: 200px;
            width: 200px;
            border-radius: 100px;
            background-color: rgb(89, 96, 89);
            margin: 20px auto;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="red"></div>
        <div class="yellow"></div>
        <div class="green"></div>
    </div>
    <div class="bottom"></div>
</body>
<script>
    let red = document.querySelector('.red');
    let yellow = document.querySelector('.yellow');
    let green = document.querySelector('.green');
    let count = 0;
    setInterval(() => {
        if (count == 0) {
            red.style.backgroundColor = 'red';
            // red.style.transition = '2s';
            red.style.boxShadow = '0 0 30px 5px red';
            green.style.boxShadow = '0 0 0px green';
            yellow.style.boxShadow = '0 0 0px yellow';
            yellow.style.backgroundColor = 'rgb(90, 90, 84)';
            green.style.backgroundColor = 'rgb(89, 96, 89)';
            count = 1;
        } else if (count == 1) {
            red.style.backgroundColor = 'rgb(103, 99, 99)';
            yellow.style.backgroundColor = 'yellow';
            red.style.boxShadow = '0 0 0px red';
            green.style.boxShadow = '0 0 0px green';
            yellow.style.boxShadow = '0 0 20px 5px yellow';
            // yellow.style.transition = '2s';
            green.style.backgroundColor = 'rgb(89, 96, 89)';
            count = 2;
        } else {
            red.style.backgroundColor = 'rgb(103, 99, 99)';
            yellow.style.backgroundColor = 'rgb(90, 90, 84)';
            red.style.boxShadow = '0 0 0px red';
            green.style.boxShadow = '0 0 20px 5px green';
            yellow.style.boxShadow = '0 0 0px yellow';
            // green.style.transition = '2s';
            green.style.backgroundColor = 'green';
            count = 0;
            setTimeout(3000);
        }
    }, 3000);
</script>

</html> `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example3: {
                name: 'snake game  ',
                url: 'ex/snake.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snake Game</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #111;
      color: #fff;
      font-family: Arial, sans-serif;
    }
    canvas {
      background-color: #222;
      border: 2px solid #555;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      background-color: #28a745;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #218838;
    }
  </style>
</head>
<body>

<canvas id="gameCanvas" width="400" height="400"></canvas>
<button id="restartBtn">Restart</button>

<script>
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const restartBtn = document.getElementById("restartBtn");

  const gridSize = 20;
  const tileCount = canvas.width / gridSize;

  let snake, direction, food, gameOver;

  function initGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 0, y: 0 };
    food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
    gameOver = false;
    gameLoop();
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && direction.y === 0) direction = { x: 0, y: -1 };
    if (e.key === "ArrowDown" && direction.y === 0) direction = { x: 0, y: 1 };
    if (e.key === "ArrowLeft" && direction.x === 0) direction = { x: -1, y: 0 };
    if (e.key === "ArrowRight" && direction.x === 0) direction = { x: 1, y: 0 };
  });

  restartBtn.addEventListener("click", () => {
    initGame();
  });

  function gameLoop() {
    if (gameOver) {
      ctx.fillStyle = "white";
      ctx.font = "30px Arial";
      ctx.fillText("Game Over!", 120, 200);
      return;
    }

    setTimeout(() => {
      requestAnimationFrame(gameLoop);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount)
        };
      } else {
        snake.pop();
      }

      if (
        head.x < 0 || head.x >= tileCount ||
        head.y < 0 || head.y >= tileCount ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        gameOver = true;
      }

      ctx.fillStyle = "red";
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

      ctx.fillStyle = "lime";
      snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
      });

    }, 100);
  }

  initGame();
</script>

</body>
</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            }
        }
    },
    ex6: {
        name: 'Exercise 6',
        examples: {
            example1: {
                name: 'minion eye',
                url: 'ex/minioneye.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minion Eye</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        .eye {
            width: 100px;
            height: 100px;
            background: #fff;
            border-radius: 50%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 0 10px #000;
        }

        .pupil {
            width: 30px;
            height: 30px;
            background: #000;
            border-radius: 50%;
            position: absolute;
        }

        .pupil::before {
            content: '';
            width: 10px;
            height: 10px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .pupil::after {
            content: '';
            width: 5px;
            height: 5px;
            background: #000;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .pupil {
            transition: transform 0.1s ease-out;
        }
    </style>
</head>

<body>
    <div class="eye" style="margin-right: 20px;">
        <div class="pupil"></div>
    </div>
    <div class="eye" style="margin-left: 20px;">
        <div class="pupil"></div>
    </div>

    <script>
        document.addEventListener('mousemove', (event) => {
            const eyes = document.querySelectorAll('.eye');
            eyes.forEach(eye => {
                const pupil = eye.querySelector('.pupil');
                const eyeRect = eye.getBoundingClientRect();
                console.log(eyeRect);
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;
                const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
                const maxMove = (eyeRect.width / 2) - (pupil.offsetWidth / 2) - 5;

                const pupilX = Math.cos(angle) * 90 ;
                const pupilY = Math.sin(angle) * 90 ;
                pupil.style.transform = 'translate(' + pupilX + 'px, ' + pupilY + 'px)';
            });
        });

    </script>
</body>

</html> `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example2: {
                name: 'Flaslight',
                url: 'ex/flash.html',
                isLocal: true,
                htmlContent: `
                  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Sixtyfour+Convergence&display=swap"
        rel="stylesheet"
      />
      <style>
        * {
          margin: 0;
          box-sizing: border-box;
        }
        .image {
          background-color: rgb(207, 236, 255);
          height: 100vh;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Sixtyfour Convergence", serif;
          font-optical-sizing: auto;
          font-weight: 400;
          font-size: 100px;
          font-style: normal;
        }

        .overlay {
          background-color: rgb(0, 0, 0);
          height: 100vh;
          width: 100vw;
          position: absolute;
          top: 0;
          left: 0%;
        }
      </style>
    </head>
    <body>
      <div class="image">
        Find Me Here !!
        <div class="overlay"></div>
      </div>
    </body>
    <script>
      document.addEventListener("mousemove", function (e) {
        const overlay = document.querySelector(".overlay");
        const x = e.clientX;
        const y = e.clientY;
        overlay.style.background = 'radial-gradient(circle 200px at ' + x + 'px ' + y + 'px, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%)';
      });
    </script>
  </html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            },
            example3: {
                name: 'Image Slider',
                url: 'ex/imageslider.html',
                isLocal: true,
                htmlContent: `
                <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smooth Image Slider</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
    }

    .slider {
      position: relative;
      width: 80%;
      max-width: 800px;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .slides {
      display: flex;
      transition: transform 0.5s ease-in-out;
    }

    .slides img {
      width: 100%;
      flex-shrink: 0;
    }

    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: 50%;
    }

    .prev {
      left: 10px;
    }

    .next {
      right: 10px;
    }
  </style>
</head>
<body>

<div class="slider">
  <div class="slides">
    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80" alt="Slide 1">
    <img src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=" alt="Slide 2">
    <img src="https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg" alt="Slide 3">
  </div>
  <button class="nav-btn prev">&#10094;</button>
  <button class="nav-btn next">&#10095;</button>
</div>

<script>
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let index = 0;

  function showSlide(i) {
    index = (i + images.length) % images.length;
    slides.style.transform = ;
  }

  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));

  setInterval(() => showSlide(index + 1), 4000);
</script>

</body>
</html>
 `.trim(),
                cssContent: ``.trim(),
                jsContent: `  `.trim()
            }
        }
    }
};

const htmlDisplay = document.getElementById('htmlDisplay');
const cssDisplay = document.getElementById('cssDisplay');
const jsDisplay = document.getElementById('jsDisplay');
const preview = document.getElementById('preview');
const exerciseSelector = document.getElementById('exerciseSelector');
const codeSelector = document.getElementById('codeSelector');

async function loadExample(example) {
    try {
        preview.src = example.url;

        htmlDisplay.textContent = example.htmlContent || "No HTML content available";
        cssDisplay.textContent = example.cssContent || "No CSS content available";
        jsDisplay.textContent = example.jsContent || "No JavaScript content available";

        document.querySelectorAll('.code-display').forEach(d => d.classList.remove('active'));
        document.querySelector('.tab-btn[data-tab="html"]').classList.add('active');
        htmlDisplay.classList.add('active');

    } catch (error) {
        console.error('Error loading example:', error);
        htmlDisplay.textContent = `Error: ${error.message}`;
        cssDisplay.textContent = '';
        jsDisplay.textContent = '';
    }
}

function updateCodeSelector(exerciseId) {
    codeSelector.innerHTML = '<option value="">Select Example</option>';
    codeSelector.disabled = true;

    if (exerciseId && exerciseData[exerciseId]) {
        const examples = exerciseData[exerciseId].examples;
        for (const [id, example] of Object.entries(examples)) {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = example.name;
            codeSelector.appendChild(option);
        }
        codeSelector.disabled = false;
    }
}

exerciseSelector.addEventListener('change', function () {
    const exerciseId = this.value;
    updateCodeSelector(exerciseId);
    htmlDisplay.textContent = "Select an example to view code";
    cssDisplay.textContent = "";
    jsDisplay.textContent = "";
    preview.src = "about:blank";
});

codeSelector.addEventListener('change', function () {
    const exerciseId = exerciseSelector.value;
    const exampleId = this.value;

    if (exerciseId && exampleId && exerciseData[exerciseId]?.examples[exampleId]) {
        loadExample(exerciseData[exerciseId].examples[exampleId]);
    } else {
        htmlDisplay.textContent = "Select an example to view code";
        cssDisplay.textContent = "";
        jsDisplay.textContent = "";
        preview.src = "about:blank";
    }
});

document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        document.querySelectorAll('.code-display').forEach(display => display.classList.remove('active'));
        document.getElementById(`${tab}Display`).classList.add('active');
    });
});

updateCodeSelector(exerciseSelector.value);




