import { CMSView } from '@firecms/core';
import { OrdersPage, StatisticsPage, FeedbackPage } from '../pages';

export const customViews: CMSView[] = [
  {
    path: 'orders',
    name: 'orders label',
    view: <OrdersPage />,
    icon: 'monetization_on',
    description: 'orders description',
  },
  //{
  //  path: 'feedback',
  //  name: 'feedback label',
  //  view: <FeedbackPage />,
  //  icon: 'forum',
  //  description: 'feedback description',
  //},
  {
    path: 'statistics',
    name: 'statistics label',
    view: <StatisticsPage />,
    icon: 'bar_chart',
    description: 'statistics description',
  },
];
