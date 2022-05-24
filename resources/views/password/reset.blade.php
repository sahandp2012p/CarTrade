<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarTrade - Reset Password</title>
    <link rel="stylesheet" href="{{asset('css/custom.css')}}">
</head>
<body>
    @if($sended != "")
        <p class="text-sended">Your password reset link was sended</p>
    @endif
    <form action="/password/reset" class="reset" method="post">
        @csrf
        @method('put')
        <input type="email" placeholder='Email' required name="email" />
        <br>
        <br>
        <button type='submit' className='hover:bg-blue-600 hover:border-blue-600 mr-3 border-2 border-blue-700 rounded-sm px-12 py-2 text-white bg-blue-700 uppercase'>Send reset link</button>
    </form>
</body>
</html>