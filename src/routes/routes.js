export const dashboardRoutes = {
  label: 'Dashboard',
  labelDisable: true,
  children: [
    {
      name: 'Dashboard',
      active: true,
      icon: 'chart-pie',
      to: '/'
    },
    {
      name: 'Instansi',
      icon: 'building',
      to: '/agencies',
      active: true
    }
  ]
};
export const appRoutes = {
  label: 'Pengguna',
  children: [
    {
      name: 'Pengguna',
      icon: 'users',
      to: '/users',
      active: true
    },
    {
      name: 'Tadarus',
      icon: 'book',
      to: '/tadarus',
      active: true
    },
    {
      name: 'Hafalan',
      icon: 'list',
      to: '/rote',
      active: true
    }
  ]
};

export default [dashboardRoutes, appRoutes];
