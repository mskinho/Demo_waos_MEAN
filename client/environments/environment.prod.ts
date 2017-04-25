export const environment = {
    production: true,
    backend: {
        protocol: 'http',
        host: 'romeanet.weareopensource.me',
        port: '80',
        endpoints: {
          signup: '/api/auth/signup',
          signin: '/api/auth/signin',
          articles :'/api/articles',
          users : '/api/users'
        }
    }
};
