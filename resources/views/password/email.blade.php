<h1>{{$body->name}}, Here is your reset password link</h1>

<form action="{{$link}}/password/reset/{{$body->email}}" class="reset">
    <button type='submit'>Open reset form</button>
</form>