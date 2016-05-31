import Actions from './../../lib/Actions'

const uri = '/api/auth'
const server = 'http://localhost:8000'

const action = new Actions('auth', server, {
  verify:{uri:uri, method: 'post'},
  status:{uri:uri+'/status', method:'post'},
})

export default action;
