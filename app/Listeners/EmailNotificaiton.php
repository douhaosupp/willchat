<?php

namespace App\Listeners;

use App\Events\PasswordUpdated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;

class EmailNotificaiton implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param PasswordUpdated $event
     */
    public function handle(PasswordUpdated $event)
    {
        $user = $event->user;

        Mail::send('emails.passwordupdated', ['user' => $user], function ($m) use ($user) {
            $m->from(env('MAIL_USERNAME'), 'WillChat');
            $m->to($user->email, $user->name)->subject('密码更新通知!');
        });
    }
}
