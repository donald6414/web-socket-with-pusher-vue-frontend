import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

window.Pusher = Pusher

const echo = new Echo({
  broadcaster: 'pusher',
  key: 'aaa0bef97e7a5bd86f38',
  cluster: 'eu',
  forceTLS: true,
  encrypted: true,
})

export default echo
