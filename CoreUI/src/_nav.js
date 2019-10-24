export default {
  items: [
    {
      name: 'ABOUT',
      url: '/about',
      icon: 'icon-like',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
     {
      title: true,
      name: 'Hệ thống',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Tài khoản Admin',
      url: '/aduser',
      icon: 'icon-user'
    },
    {
      name: 'Cấu hình',
      url: '/theme/typography',
      icon: 'icon-equalizer'
    },
    {
      title: true,
      name: 'Website',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Người dùng',
      url: '/base',
      icon: 'icon-people',
      children: [
        {
          name: 'PG',
          url: '/base/breadcrumbs',
          icon: 'icon-user-female'
        },
        {
          name: 'Nhà tuyển dụng',
          url: '/base/cards',
          icon: 'icon-briefcase'
        }
      ]
    },
    {
      name: 'Bài đăng',
      url: '/buttons',
      icon: 'icon-note'      
    },
    
    {
      name: 'Đăng xuất',
      url: '#',
      icon: 'icon-logout',
      variant: 'danger',
      attributes: {  rel: 'noopener' }
    },
  ]
}
